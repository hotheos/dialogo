// ============================================================
// EL FORO DE LAS IDEAS — Internacionalización (i18n)
// ============================================================
// Soporta: Español (es), English (en), Português (pt)
// ============================================================

const I18N = {
  es: {
    lang: 'es',
    htmlLang: 'es',
    title: 'El Diálogo de los Expertos',
    titleItalic: 'Expertos',
    pageTitle: 'El Diálogo de los Expertos — Referentes Teológicos y Académicos',
    searchPlaceholder: 'Buscar por nombre...',
    allLabel: 'Todos',
    clearFilters: '✕ Limpiar filtros',
    counterShowing: 'Mostrando',
    counterOf: 'de',
    counterReferents: 'referentes',
    viewProfile: 'Ver perfil →',
    close: 'Cerrar',
    education: 'Formación',
    focus: 'Enfoque',
    affiliation: 'Afiliación',
    denomination: 'Denominación',
    books: 'Obras destacadas',
    videosAndChannel: '🎬 Videos y Canal',
    youtubeLabel: 'YouTube →',
    videoType: 'Video de YouTube',
    footerText: 'Compilado con el propósito de fomentar el estudio y el diálogo teológico responsable. Las posiciones aquí representadas no implican adhesión a todas las ideas de cada referente.',
    footerCredits: 'El Diálogo de los Expertos © 2026',
    noResultsText: 'No se encontraron referentes',
    noResultsHint: 'Intenta con otros filtros o términos de búsqueda',
    // Category labels for filters
    catRol: 'Rol',
    catPosicion: 'Posición',
    catSoteriologia: 'Soteriología',
    catEnfoque: 'Tema',
    // Tag labels
    tags: {
      academico: 'Académico',
      pastor: 'Pastor / Predicador',
      filosofo: 'Filósofo',
      trinitario: 'Trinitario',
      unitario: 'Unitario Bíblico',
      musulman: 'Musulmán',
      mormon: 'Mormón',
      agnostico: 'Agnóstico',
      critico_secular: 'Crítico Secular',
      calvinista: 'Calvinista',
      molinista: 'Molinista',
      ex_calvinista: 'Ex-Calvinista',
      provisionista: 'Provisionista',
      cristianismo_primitivo: 'Cristianismo Primitivo',
      soteriologia: 'Soteriología',
      critica_textual: 'Crítica Textual',
      ateismo: 'Ateísmo',
      ex_newage: 'Ex-New Age',
      griego: 'Griego / Hebreo',
      doctrina_dios: 'Doctrina de Dios',
    }
  },
  en: {
    lang: 'en',
    htmlLang: 'en',
    title: 'The Experts\' Dialogue',
    titleItalic: 'Dialogue',
    pageTitle: 'The Experts\' Dialogue — Theological & Academic References',
    intro: 'Understanding the Bible, ancient texts, Judaism, and the great religious traditions requires listening to diverse voices. Here, scholars, apologists, and thinkers from different viewpoints — Trinitarians, Unitarians, historical critics, conservatives, and skeptics — come together because the honest pursuit of truth is enriched when we engage with those who think differently. Each perspective, backed by years of study and dedication, contributes a piece to the puzzle.',
    searchPlaceholder: 'Search by name...',
    allLabel: 'All',
    clearFilters: '✕ Clear filters',
    counterShowing: 'Showing',
    counterOf: 'of',
    counterReferents: 'scholars',
    viewProfile: 'View profile →',
    close: 'Close',
    education: 'Education',
    focus: 'Focus',
    affiliation: 'Affiliation',
    denomination: 'Denomination',
    books: 'Notable Works',
    videosAndChannel: '🎬 Videos & Channel',
    youtubeLabel: 'YouTube →',
    videoType: 'YouTube Video',
    footerText: 'Compiled with the purpose of fostering responsible theological study and dialogue. The positions represented here do not imply endorsement of all ideas of each scholar.',
    footerCredits: 'The Experts\' Dialogue © 2026',
    noResultsText: 'No scholars found',
    noResultsHint: 'Try other filters or search terms',
    catRol: 'Role',
    catPosicion: 'Position',
    catSoteriologia: 'Soteriology',
    catEnfoque: 'Topic',
    tags: {
      academico: 'Scholar',
      pastor: 'Pastor / Preacher',
      filosofo: 'Philosopher',
      trinitario: 'Trinitarian',
      unitario: 'Biblical Unitarian',
      musulman: 'Muslim',
      mormon: 'Mormon',
      agnostico: 'Agnostic',
      critico_secular: 'Secular Critic',
      calvinista: 'Calvinist',
      molinista: 'Molinist',
      ex_calvinista: 'Ex-Calvinist',
      provisionista: 'Provisionist',
      cristianismo_primitivo: 'Early Christianity',
      soteriologia: 'Soteriology',
      critica_textual: 'Textual Criticism',
      ateismo: 'Atheism',
      ex_newage: 'Ex-New Age',
      griego: 'Greek / Hebrew',
      doctrina_dios: 'Doctrine of God',
    }
  },
  pt: {
    lang: 'pt',
    htmlLang: 'pt',
    title: 'O Diálogo dos Especialistas',
    titleItalic: 'Especialistas',
    pageTitle: 'O Diálogo dos Especialistas — Referências Teológicas e Acadêmicas',
    searchPlaceholder: 'Buscar por nome...',
    allLabel: 'Todos',
    clearFilters: '✕ Limpar filtros',
    counterShowing: 'Mostrando',
    counterOf: 'de',
    counterReferents: 'referências',
    viewProfile: 'Ver perfil →',
    close: 'Fechar',
    education: 'Formação',
    focus: 'Enfoque',
    affiliation: 'Afiliação',
    denomination: 'Denominação',
    books: 'Obras destacadas',
    videosAndChannel: '🎬 Vídeos e Canal',
    youtubeLabel: 'YouTube →',
    videoType: 'Vídeo do YouTube',
    footerText: 'Compilado com o propósito de fomentar o estudo e o diálogo teológico responsável. As posições aqui representadas não implicam adesão a todas as ideias de cada referência.',
    footerCredits: 'O Diálogo dos Especialistas © 2026',
    noResultsText: 'Nenhuma referência encontrada',
    noResultsHint: 'Tente outros filtros ou termos de busca',
    catRol: 'Função',
    catPosicion: 'Posição',
    catSoteriologia: 'Soteriologia',
    catEnfoque: 'Tema',
    tags: {
      academico: 'Acadêmico',
      pastor: 'Pastor / Pregador',
      filosofo: 'Filósofo',
      trinitario: 'Trinitário',
      unitario: 'Unitário Bíblico',
      musulman: 'Muçulmano',
      mormon: 'Mórmon',
      agnostico: 'Agnóstico',
      critico_secular: 'Crítico Secular',
      calvinista: 'Calvinista',
      molinista: 'Molinista',
      ex_calvinista: 'Ex-Calvinista',
      provisionista: 'Provisionista',
      cristianismo_primitivo: 'Cristianismo Primitivo',
      soteriologia: 'Soteriologia',
      critica_textual: 'Crítica Textual',
      ateismo: 'Ateísmo',
      ex_newage: 'Ex-New Age',
      griego: 'Grego / Hebraico',
      doctrina_dios: 'Doutrina de Deus',
    }
  }
};

// Current language (default: Spanish)
let currentLang = 'es';

function t(key) {
  return I18N[currentLang]?.[key] || I18N['es'][key] || key;
}

function tTag(tagKey) {
  return I18N[currentLang]?.tags?.[tagKey] || I18N['es'].tags[tagKey] || tagKey;
}

function tCategory(category) {
  const map = {
    'Rol': 'catRol',
    'Posición': 'catPosicion',
    'Soteriología': 'catSoteriologia',
    'Enfoque': 'catEnfoque',
  };
  return t(map[category] || category);
}

function tTagDescription(tagKey) {
  return TAG_CONFIG[tagKey]?.description || '';
}
