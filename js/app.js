// ============================================================
// EL FORO DE LAS IDEAS — Application Logic
// ============================================================

(function () {
  'use strict';

  // ── State ────────────────────────────────────────────────
  let activeFilters = new Set();
  let searchQuery = '';
  let sortMode = 'abc'; // 'abc' or 'preference'

  // ── DOM References ───────────────────────────────────────
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  const filtersContainer = $('#filters');
  const cardsGrid = $('#cards-grid');
  const searchInput = $('#search-input');
  const counterEl = $('#counter');
  const modalOverlay = $('#modal-overlay');
  const modalContent = $('#modal-content');
  const controlsEl = $('.controls');
  const sortToggle = $('#sort-toggle');

  // ── Per-scholar photo overrides ──────────────────────────
  // Custom object-position for specific scholars whose photos
  // need special cropping to avoid cutting faces.
  const PHOTO_OVERRIDES = {
    'dan-mcclellan': '70% top'
  };

  // ── Utilities ────────────────────────────────────────────

  /**
   * Generate a deterministic hue from a name string
   */
  function nameToHue(name) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash) % 360;
  }

  /**
   * Generate a gradient style for an avatar
   */
  function avatarGradient(name) {
    const hue = nameToHue(name);
    return `linear-gradient(135deg, hsl(${hue}, 55%, 50%), hsl(${(hue + 45) % 360}, 60%, 40%))`;
  }

  /**
   * Get initials from a name
   */
  function getInitials(name) {
    return name
      .replace(/[^a-zA-ZÀ-ÿ\s]/g, '')
      .split(/\s+/)
      .filter(w => w.length > 0)
      .map(w => w[0].toUpperCase())
      .slice(0, 2)
      .join('');
  }

  /**
   * Extract YouTube video ID from URL
   */
  function getYouTubeVideoId(url) {
    const match = url.match(/(?:watch\?v=|youtu\.be\/|\/embed\/)([^&\s#]+)/);
    return match ? match[1] : null;
  }

  /**
   * Get YouTube thumbnail URL
   */
  function getYouTubeThumbnail(videoId) {
    return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
  }

  /**
   * Generate tag pill HTML with color styling and icon
   */
  function tagPillHTML(tagKey, size = 'normal') {
    const config = TAG_CONFIG[tagKey];
    if (!config) return '';
    const bgColor = hexToRGBA(config.color, 0.1);
    const cls = size === 'mini' ? 'tag-mini' : 'tag-pill';
    const icon = config.icon ? `<span class="tag-icon">${config.icon}</span>` : '';
    const label = tTag(tagKey);
    return `<span class="${cls} tag-clickable" data-tagkey="${tagKey}" style="background:${bgColor}; color:${config.color}">${icon}${label}</span>`;
  }

  /**
   * Convert hex to rgba
   */
  function hexToRGBA(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  // ── Render Filter Pills ─────────────────────────────────
  function renderFilters() {
    // Group tags by category
    const categories = {};
    Object.entries(TAG_CONFIG).forEach(([key, config]) => {
      if (!categories[config.category]) categories[config.category] = [];
      // Count how many scholars have this tag
      const count = SCHOLARS.filter(s => s.tags.includes(key)).length;
      categories[config.category].push({ key, ...config, count });
    });

    let html = `
      <button class="filter-pill filter-pill--clear" data-tag="clear" id="filter-clear" style="display:none">
        ${t('clearFilters')}
      </button>
    `;

    const categoryOrder = ['Rol', 'Posición', 'Soteriología', 'Enfoque'];

    categoryOrder.forEach(category => {
      const tags = categories[category];
      if (!tags) return;

      const categoryLabel = tCategory(category);

      html += `<div class="filter-group">`;
      html += `<span class="filter-group__label">${categoryLabel}</span>`;
      tags.forEach(tag => {
        const bgColor = hexToRGBA(tag.color, 0.08);
        const icon = tag.icon ? `<span class="filter-icon">${tag.icon}</span>` : '';
        const label = tTag(tag.key);
        html += `
          <button class="filter-pill" 
                  data-tag="${tag.key}" 
                  id="filter-${tag.key}"
                  style="color:${tag.color}; border-color:${hexToRGBA(tag.color, 0.3)}; background:${bgColor}">
            ${icon}${label}
          </button>
        `;
      });
      html += `</div>`;
    });

    filtersContainer.innerHTML = html;

    // Bind events
    filtersContainer.querySelectorAll('.filter-pill').forEach(pill => {
      pill.addEventListener('click', handleFilterClick);
    });

    // Update clear button visibility
    updateClearButton();
  }

  // ── Render Cards ─────────────────────────────────────────
  function renderCards() {
    // Sort scholars based on current sort mode
    let sortedScholars;
    if (sortMode === 'preference') {
      sortedScholars = [...SCHOLARS].sort((a, b) => {
        const idxA = PREFERENCE_ORDER.indexOf(a.id);
        const idxB = PREFERENCE_ORDER.indexOf(b.id);
        // Scholars not in the preference list go to the end
        const posA = idxA === -1 ? 999 : idxA;
        const posB = idxB === -1 ? 999 : idxB;
        return posA - posB;
      });
    } else {
      sortedScholars = [...SCHOLARS].sort((a, b) =>
        a.name.localeCompare(b.name, 'es', { sensitivity: 'base' })
      );
    }

    let html = '';
    sortedScholars.forEach((scholar, index) => {
      const gradient = avatarGradient(scholar.name);
      const initials = getInitials(scholar.name);
      const topTagKey = scholar.tags[0];
      const topTagColor = TAG_CONFIG[topTagKey]?.color || '#1A365D';
      const photoPosition = PHOTO_OVERRIDES[scholar.id] || 'top';

      const avatarContent = scholar.photo 
        ? `<img src="${scholar.photo}" alt="${scholar.name}" style="object-position: ${photoPosition}" onerror="this.parentElement.innerHTML='${initials}'; this.parentElement.style.background='${gradient}'">`
        : initials;
      const avatarStyle = scholar.photo 
        ? `background: ${gradient}` 
        : `background: ${gradient}`;

      html += `
        <article class="card entering" 
                 data-id="${scholar.id}" 
                 data-tags="${scholar.tags.join(',')}"
                 data-name="${scholar.name.toLowerCase()}"
                 tabindex="0"
                 role="button"
                 aria-label="Ver perfil de ${scholar.name}"
                 style="--card-accent: ${topTagColor}; animation-delay: ${index * 50}ms">
          <span class="card__flag" aria-label="País">${scholar.country}</span>
          <div class="card__avatar" style="${avatarStyle}">
            ${avatarContent}
          </div>
          <h3 class="card__name">${scholar.name}</h3>
          <p class="card__short-desc">${tScholar(scholar, 'shortDesc')}</p>
          <div class="card__tags">
            ${scholar.tags.map(t => tagPillHTML(t, 'mini')).join('')}
          </div>
          <div class="card__cta">${t('viewProfile')}</div>
        </article>
      `;
    });

    // Set accent line via CSS for each card
    cardsGrid.innerHTML = html;

    // Animate entrance
    requestAnimationFrame(() => {
      cardsGrid.querySelectorAll('.card').forEach((card, i) => {
        setTimeout(() => {
          card.classList.remove('entering');
          card.classList.add('entered');
        }, i * 60);
      });
    });

    // Bind card clicks
    cardsGrid.querySelectorAll('.card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.tag-clickable')) return;
        openModal(card.dataset.id);
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(card.dataset.id);
        }
      });
    });

    // Apply card accent line via ::before
    cardsGrid.querySelectorAll('.card').forEach(card => {
      const accent = card.style.getPropertyValue('--card-accent');
      card.style.setProperty('--card-accent', accent);
    });

    updateCounter();
  }

  // ── Filter Logic ─────────────────────────────────────────
  function handleFilterClick(e) {
    const tag = e.currentTarget.dataset.tag;

    if (tag === 'clear') {
      // Clear all filters
      activeFilters.clear();
      filtersContainer.querySelectorAll('.filter-pill').forEach(p => {
        p.classList.remove('active');
        // Re-apply original color styles
        const pillTag = p.dataset.tag;
        const config = TAG_CONFIG[pillTag];
        if (config) {
          p.style.color = config.color;
          p.style.background = hexToRGBA(config.color, 0.08);
          p.style.borderColor = hexToRGBA(config.color, 0.3);
        }
      });
    } else {
      if (activeFilters.has(tag)) {
        activeFilters.delete(tag);
        e.currentTarget.classList.remove('active');
        // Re-apply color styles when deactivated
        const config = TAG_CONFIG[tag];
        e.currentTarget.style.color = config.color;
        e.currentTarget.style.background = hexToRGBA(config.color, 0.08);
        e.currentTarget.style.borderColor = hexToRGBA(config.color, 0.3);
      } else {
        activeFilters.add(tag);
        e.currentTarget.classList.add('active');
        // Apply active color
        const config = TAG_CONFIG[tag];
        e.currentTarget.style.background = config.color;
        e.currentTarget.style.color = '#FFFFFF';
        e.currentTarget.style.borderColor = 'transparent';
      }
    }

    updateClearButton();
    applyFilters();
  }

  function updateClearButton() {
    const clearBtn = $('#filter-clear');
    if (clearBtn) {
      clearBtn.style.display = activeFilters.size > 0 ? 'inline-flex' : 'none';
    }
  }

  function applyFilters() {
    const cards = cardsGrid.querySelectorAll('.card');
    let visibleCount = 0;

    cards.forEach(card => {
      const cardTags = card.dataset.tags.split(',');
      const cardName = card.dataset.name;

      const matchesFilter = activeFilters.size === 0 || 
        [...activeFilters].every(filter => cardTags.includes(filter));
      
      const matchesSearch = searchQuery === '' || 
        cardName.includes(searchQuery.toLowerCase());

      if (matchesFilter && matchesSearch) {
        card.classList.remove('hidden');
        visibleCount++;
      } else {
        card.classList.add('hidden');
      }
    });

    updateCounter(visibleCount);
  }

  function updateCounter(visible) {
    const total = SCHOLARS.length;
    const shown = visible !== undefined ? visible : total;
    counterEl.innerHTML = `${t('counterShowing')} <strong>${shown}</strong> ${t('counterOf')} <strong>${total}</strong> ${t('counterReferents')}`;
  }

  // ── Sort Toggle ──────────────────────────────────────────
  function handleSortToggle() {
    sortMode = sortMode === 'abc' ? 'preference' : 'abc';

    // Update toggle UI
    sortToggle.querySelectorAll('.sort-toggle__option').forEach(opt => {
      opt.classList.toggle('sort-toggle__option--active', opt.dataset.sort === sortMode);
    });

    // Re-render cards in new order
    renderCards();
    applyFilters();
  }

  // ── Search ───────────────────────────────────────────────
  function handleSearch(e) {
    searchQuery = e.target.value.trim();
    applyFilters();
  }

  // ── Modal ────────────────────────────────────────────────
  function openModal(scholarId) {
    const scholar = SCHOLARS.find(s => s.id === scholarId);
    if (!scholar) return;

    const gradient = avatarGradient(scholar.name);
    const initials = getInitials(scholar.name);
    const bio = scholar.bio;
    const localBio = {
      description: tBio(scholar, 'description'),
      education: tBio(scholar, 'education'),
      focus: tBio(scholar, 'focus'),
      affiliation: tBio(scholar, 'affiliation'),
      denomination: tBio(scholar, 'denomination'),
      books: bio.books
    };
    const photoPosition = PHOTO_OVERRIDES[scholar.id] || 'top';

    let detailsHTML = '';

    // Education
    if (localBio.education && localBio.education.length > 0) {
      detailsHTML += `
        <div class="detail-item">
          <div class="detail-item__icon">🎓</div>
          <div class="detail-item__content">
            <div class="detail-item__label">${t('education')}</div>
            <div class="detail-item__value">
              <ul>${localBio.education.map(e => `<li>${e}</li>`).join('')}</ul>
            </div>
          </div>
        </div>
      `;
    }

    // Focus
    if (localBio.focus) {
      detailsHTML += `
        <div class="detail-item">
          <div class="detail-item__icon">🔬</div>
          <div class="detail-item__content">
            <div class="detail-item__label">${t('focus')}</div>
            <div class="detail-item__value">${localBio.focus}</div>
          </div>
        </div>
      `;
    }

    // Affiliation
    if (localBio.affiliation) {
      detailsHTML += `
        <div class="detail-item">
          <div class="detail-item__icon">🏛️</div>
          <div class="detail-item__content">
            <div class="detail-item__label">${t('affiliation')}</div>
            <div class="detail-item__value">${localBio.affiliation}</div>
          </div>
        </div>
      `;
    }

    // Denomination
    if (localBio.denomination && localBio.denomination !== '—') {
      detailsHTML += `
        <div class="detail-item">
          <div class="detail-item__icon">⛪</div>
          <div class="detail-item__content">
            <div class="detail-item__label">${t('denomination')}</div>
            <div class="detail-item__value">${localBio.denomination}</div>
          </div>
        </div>
      `;
    }

    // Books
    if (localBio.books) {
      detailsHTML += `
        <div class="detail-item">
          <div class="detail-item__icon">📚</div>
          <div class="detail-item__content">
            <div class="detail-item__label">${t('books')}</div>
            <div class="detail-item__value">${localBio.books}</div>
          </div>
        </div>
      `;
    }

    // Channel link
    let channelHTML = '';
    if (scholar.channel) {
      channelHTML = `
        <a href="${scholar.channel.url}" target="_blank" rel="noopener noreferrer" class="channel-link">
          <span class="channel-link__icon">▶</span>
          <span>${scholar.channel.name}</span>
          <span style="margin-left:auto; opacity:0.8; font-weight:400; font-size:0.8rem">${t('youtubeLabel')}</span>
        </a>
      `;
    }

    // Videos
    let videosHTML = '';
    if ((scholar.videos && scholar.videos.length > 0) || scholar.channel) {
      const videoItems = (scholar.videos || []).map(video => {
        const videoId = getYouTubeVideoId(video.url);
        const thumbnail = videoId ? getYouTubeThumbnail(videoId) : '';
        return `
          <a href="${video.url}" target="_blank" rel="noopener noreferrer" class="video-card">
            <div class="video-card__thumbnail">
              ${thumbnail ? `<img src="${thumbnail}" alt="${video.title}" loading="lazy">` : ''}
              <div class="video-card__play">
                <div class="video-card__play-icon">▶</div>
              </div>
            </div>
            <div class="video-card__info">
              <div class="video-card__title">${video.title}</div>
              <div class="video-card__type">${t('videoType')}</div>
            </div>
          </a>
        `;
      }).join('');

      videosHTML = `
        <div class="modal__videos">
          <h4 class="modal__videos-title">${t('videosAndChannel')}</h4>
          ${channelHTML}
          <div class="videos-grid">
            ${videoItems}
          </div>
        </div>
      `;
    }

    // Modal avatar with photo support — larger rectangular photo with rounded corners
    const modalAvatarContent = scholar.photo
      ? `<img src="${scholar.photo}" alt="${scholar.name}" style="object-position: ${photoPosition}" onerror="this.parentElement.innerHTML='${initials}'; this.parentElement.style.background='${gradient}'">`
      : initials;

    modalContent.innerHTML = `
      <button class="modal__close" id="modal-close" aria-label="${t('close')}">✕</button>
      
      <div class="modal__header">
        <div class="modal__avatar" style="background: ${gradient}">${modalAvatarContent}</div>
        <div class="modal__title-group">
          <h2 class="modal__name">${scholar.name} <span class="modal__name-flag">${scholar.country}</span></h2>
          <p class="modal__short-desc">${tScholar(scholar, 'shortDesc')}</p>
        </div>
      </div>

      <div class="modal__tags">
        ${scholar.tags.map(t => tagPillHTML(t)).join('')}
      </div>

      <p class="modal__description">${localBio.description}</p>

      <div class="modal__details">
        ${detailsHTML}
      </div>

      ${videosHTML}
    `;

    // Show modal
    modalOverlay.classList.add('active');
    document.body.classList.add('modal-open');

    // Bind close
    $('#modal-close').addEventListener('click', closeModal);

    // Prevent link clicks from closing modal (stopPropagation)
    modalContent.querySelectorAll('a[target="_blank"]').forEach(link => {
      link.addEventListener('click', (e) => e.stopPropagation());
    });

    // Focus trap
    $('#modal-close').focus();
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.classList.remove('modal-open');
  }

  // ── Tag Description Modal ──────────────────────────────
  let tagModalEl = null;

  function showTagModal(tagKey) {
    hideTagModal();
    const config = TAG_CONFIG[tagKey];
    const richDesc = TAG_DESCRIPTIONS[tagKey];
    if (!config || !richDesc) return;

    // Create overlay
    tagModalEl = document.createElement('div');
    tagModalEl.className = 'tag-modal-overlay';
    tagModalEl.innerHTML = `
      <div class="tag-modal">
        <button class="tag-modal__close" aria-label="Cerrar">✕</button>
        <div class="tag-modal__header">
          <span class="tag-modal__icon">${config.icon || ''}</span>
          <span class="tag-modal__title" style="color:${config.color}">${tTag(tagKey)}</span>
          <span class="tag-modal__category">${tCategory(config.category)}</span>
        </div>
        <div class="tag-modal__body">
          ${richDesc}
        </div>
      </div>
    `;
    document.body.appendChild(tagModalEl);

    // Animate in
    requestAnimationFrame(() => tagModalEl.classList.add('active'));

    // Close handlers
    tagModalEl.querySelector('.tag-modal__close').addEventListener('click', hideTagModal);
    tagModalEl.addEventListener('click', (e) => {
      if (e.target === tagModalEl) hideTagModal();
    });
    document.addEventListener('keydown', tagModalEscHandler);
  }

  function tagModalEscHandler(e) {
    if (e.key === 'Escape') hideTagModal();
  }

  function hideTagModal() {
    if (tagModalEl) {
      tagModalEl.classList.remove('active');
      setTimeout(() => {
        tagModalEl?.remove();
        tagModalEl = null;
      }, 200);
      document.removeEventListener('keydown', tagModalEscHandler);
    }
  }

  // Delegate tag clicks from cards grid and modal
  function handleTagClick(e) {
    const tagEl = e.target.closest('.tag-clickable');
    if (!tagEl) return;
    e.stopPropagation();
    const tagKey = tagEl.dataset.tagkey;
    if (tagKey) showTagModal(tagKey);
  }

  // ── Scroll Effects ───────────────────────────────────────
  function handleScroll() {
    if (window.scrollY > 10) {
      controlsEl.classList.add('scrolled');
    } else {
      controlsEl.classList.remove('scrolled');
    }
  }

  // ── No Results Message ───────────────────────────────────
  function showNoResults() {
    return `
      <div class="no-results">
        <div class="no-results__icon">🔍</div>
        <p class="no-results__text">${t('noResultsText')}</p>
        <p class="no-results__hint">${t('noResultsHint')}</p>
      </div>
    `;
  }

  // ── Language Switching ───────────────────────────────────
  function switchLanguage(lang) {
    currentLang = lang;

    // Update html lang attribute
    document.documentElement.lang = t('htmlLang');

    // Update page title
    document.title = t('pageTitle');

    // Update hero
    const heroTitle = $('#hero-title');
    const heroIntro = $('#hero-intro');
    if (heroTitle) {
      heroTitle.innerHTML = t('title').replace(t('titleItalic'), `<em>${t('titleItalic')}</em>`);
    }
    if (heroIntro) heroIntro.textContent = t('intro');

    // Update search placeholder
    searchInput.placeholder = t('searchPlaceholder');

    // Update footer
    const footerText = $('#footer-text');
    const footerCredits = $('#footer-credits');
    if (footerText) footerText.textContent = t('footerText');
    if (footerCredits) footerCredits.textContent = t('footerCredits');

    // Update lang buttons
    $$('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Re-render dynamic content
    activeFilters.clear();
    renderFilters();
    renderCards();
  }

  function initLanguageSwitcher() {
    $$('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        switchLanguage(btn.dataset.lang);
      });
    });
  }

  // ── Initialize ───────────────────────────────────────────
  function init() {
    renderFilters();
    renderCards();

    // Language switcher
    initLanguageSwitcher();

    // Sort toggle
    sortToggle.addEventListener('click', handleSortToggle);

    // Search
    searchInput.addEventListener('input', handleSearch);

    // Modal overlay click to close
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });

    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });

    // Scroll effect
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Tag description popup (delegated)
    cardsGrid.addEventListener('click', handleTagClick);
    modalContent.addEventListener('click', handleTagClick);
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
