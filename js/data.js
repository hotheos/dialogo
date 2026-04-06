// ============================================================
// EL FORO DE LAS IDEAS — Datos de Referentes
// ============================================================
// Para agregar una nueva persona, copia un bloque del array
// SCHOLARS y modifica los campos. Los tags disponibles están
// definidos en TAG_CONFIG.
//
// ESTRUCTURA DE VIDEOS:
// - channel: { name, url } → Enlace al canal de YouTube
// - videos: [ { title, url, type:"video" } ] → Videos individuales (máx 3)
//   Los thumbnails se generan automáticamente desde el ID del video.
// ============================================================

const TAG_CONFIG = {
  // ── Rol ──────────────────────────────────────────────
  academico:     { label: "Académico",             color: "#059669", icon: "🎓", category: "Rol" },
  pastor:        { label: "Pastor / Predicador",   color: "#7C3AED", icon: "⛪", category: "Rol" },
  filosofo:      { label: "Filósofo",              color: "#9333EA", icon: "🧠", category: "Rol" },

  // ── Posición Teológica ───────────────────────────────
  trinitario:      { label: "Trinitario",          color: "#1D4ED8", icon: "🔺", category: "Posición" },
  unitario:        { label: "Unitario Bíblico",    color: "#EA580C", icon: "1️⃣",  category: "Posición" },
  musulman:        { label: "Musulmán",            color: "#15803D", icon: "☪️",  category: "Posición" },
  mormon:          { label: "Mormón",              color: "#0E7490", icon: "📘", category: "Posición" },
  agnostico:       { label: "Agnóstico",           color: "#6B7280", icon: "❓", category: "Posición" },
  critico_secular: { label: "Crítico Secular",     color: "#78716C", icon: "🔬", category: "Posición" },

  // ── Enfoque Temático ──────────────────────────────────
  cristianismo_primitivo: { label: "Cristianismo Primitivo", color: "#92400E", icon: "⛪", category: "Enfoque" },
  soteriologia:           { label: "Soteriología",          color: "#7C3AED", icon: "✝️",  category: "Enfoque" },
  critica_textual:        { label: "Crítica Textual",       color: "#0F766E", icon: "📜", category: "Enfoque" },
  ateismo:                { label: "Ateísmo",               color: "#DC2626", icon: "⚡", category: "Enfoque" },
  nueva_era:              { label: "Nueva Era",             color: "#A855F7", icon: "🔮", category: "Enfoque" },
  griego:                 { label: "Griego / Hebreo",       color: "#0369A1", icon: "📖", category: "Enfoque" },
  doctrina_dios:          { label: "Doctrina de Dios",      color: "#B45309", icon: "👑", category: "Enfoque" },

};

// ── Orden de preferencia personal ─────────────────────────
const PREFERENCE_ORDER = [
  "dustin-smith",
  "metaphysics-mike",
  "james-tabor",
  "joel-marcus",
  "juanjo-fantoso",
  "preguntale-a-dann",
  "dale-tuggy",
  "dan-mcclellan",
  "leighton-flowers",
  "joel-korytko",
  "jordan-hatfield",
  "antonio-pinero",
  "melissa-dougherty",
  "sean-mcdowell",
  "frank-turek",
  "stuart-cliff-knechtle",
  "wesley-huff",
  "william-lane-craig",
  "mike-winger",
  "john-lennox",
  "cj-cornthwaite",
  "bart-ehrman",
  "cs-lewis",
  "paul-williams",
  "paul-washer",
  "edgar-escobar"
];

const SCHOLARS = [
  // ────────────────────────────────────────────────────
  // 1. Sean McDowell
  // ────────────────────────────────────────────────────
  {
    id: "sean-mcdowell",
    name: "Sean McDowell",
    shortDesc: "Cosmovisión · Evidencias",
    country: "🇺🇸",
    photo: "img/sean-mcdowell.png",
    tags: ["trinitario", "ateismo"],
    bio: {
      description: "Apologista cristiano, autor y orador reconocido internacionalmente. Hijo del famoso apologista Josh McDowell. Se enfoca en equipar a jóvenes y adultos para defender la fe cristiana con razón y evidencia.",
      education: [
        "Magíster en Teología y Filosofía",
        "Doctor en Apologética y Estudios de Cosmovisión"
      ],
      focus: "Apologética cristiana, cosmovisión, cultura juvenil, evidencias históricas",
      affiliation: "Profesor de Apologética en Talbot School of Theology, Biola University",
      denomination: "Protestante evangélico"
    },
    channel: { name: "Sean McDowell", url: "https://www.youtube.com/@SeanMcDowell" },
    videos: [
      { title: "Sean McDowell vs Bart Ehrman: The Moral Argument", url: "https://www.youtube.com/watch?v=Cz57BuQOCmQ", type: "video" },
      { title: "Evangelicals vs. Catholics: The Best Argument for God", url: "https://www.youtube.com/watch?v=jQXgh6Yzb_g", type: "video" },
      { title: "The Real Story of How the Apostles Died", url: "https://www.youtube.com/watch?v=nIBrHrqZdTM", type: "video" }
    ]
  },

  // ────────────────────────────────────────────────────
  // 2. William Lane Craig
  // ────────────────────────────────────────────────────
  {
    id: "william-lane-craig",
    name: "William Lane Craig",
    shortDesc: "Filósofo · Trinitario",
    country: "🇺🇸",
    photo: "img/william-lane-craig.avif",
    tags: ["filosofo", "trinitario", "ateismo", "doctrina_dios"],
    bio: {
      description: "Considerado uno de los filósofos de la religión más influyentes del mundo contemporáneo. Conocido por sus debates públicos con ateos prominentes y por su defensa del argumento cosmológico Kalam.",
      education: [
        "Magíster en Filosofía de la Religión e Historia del Cristianismo",
        "Doctor en Filosofía — Universidad de Birmingham",
        "Doctor en Teología — Universidad de Múnich"
      ],
      focus: "Filosofía de la religión, cosmología teísta, resurrección histórica de Jesús",
      affiliation: "Fundador de Reasonable Faith, Profesor en Houston Christian University",
      denomination: "Protestante evangélico"
    },
    channel: { name: "Reasonable Faith", url: "https://www.youtube.com/@ReasonableFaithOrg" },
    videos: [
      { title: "Does God Exist? — William Lane Craig vs. Christopher Hitchens", url: "https://www.youtube.com/watch?v=0tYm41hb48o", type: "video" },
      { title: "Is God Necessary for Morality? — Craig vs. Shelly Kagan", url: "https://www.youtube.com/watch?v=SiJnCQuPiuo", type: "video" },
      { title: "The Kalam Cosmological Argument Explained", url: "https://www.youtube.com/watch?v=6CulBuMCLg0", type: "video" }
    ]
  },

  // ────────────────────────────────────────────────────
  // 3. John Lennox
  // ────────────────────────────────────────────────────
  {
    id: "john-lennox",
    name: "John Lennox",
    shortDesc: "Matemático · Ciencia y Fe",
    country: "🇬🇧",
    photo: "img/john-lennox.jpg",
    tags: ["filosofo", "trinitario", "ateismo"],
    bio: {
      description: "Matemático, filósofo de la ciencia y apologista cristiano de renombre mundial. Conocido por sus debates con Richard Dawkins y Christopher Hitchens sobre la existencia de Dios y la relación entre ciencia y fe.",
      education: [
        "Doctor en Matemáticas — Universidad de Oxford",
        "Máster en Bioética"
      ],
      focus: "Relación entre ciencia y fe, filosofía de la ciencia, apologética",
      affiliation: "Profesor Emérito de Matemáticas en la Universidad de Oxford",
      denomination: "Protestante"
    },
    channel: null,
    videos: [
      { title: "¿Es Irracional la Creencia en lo Sobrenatural?", url: "https://www.youtube.com/watch?v=1ildx1dZ-dw", type: "video" },
      { title: "Why This Oxford Mathematician is Confident God Exists", url: "https://www.youtube.com/watch?v=3gKCwldMZS8", type: "video" },
      { title: "Why Math Points to God — Professor John Lennox", url: "https://www.youtube.com/watch?v=CklAhwO6QuI", type: "video" }
    ]
  },

  // ────────────────────────────────────────────────────
  // 4. Frank Turek
  // ────────────────────────────────────────────────────
  {
    id: "frank-turek",
    name: "Frank Turek",
    shortDesc: "Orador · Existencia de Dios",
    country: "🇺🇸",
    photo: "img/frank-turek.jpg",
    tags: ["trinitario", "ateismo"],
    bio: {
      description: "Apologista cristiano, orador y presentador de radio estadounidense. Autor de 'I Don't Have Enough Faith to Be an Atheist'. Conocido por sus presentaciones dinámicas en universidades de todo Estados Unidos.",
      education: [
        "Doctor en Apologética — Southern Evangelical Seminary"
      ],
      focus: "Apologética cristiana, existencia de Dios, moralidad objetiva",
      affiliation: "Fundador y presidente de CrossExamined.org",
      denomination: "Protestante evangélico"
    },
    channel: { name: "Cross Examined", url: "https://www.youtube.com/@CrossExamined" },
    videos: [
      { title: "I Don't Have Enough Faith to Be an Atheist — Full Talk", url: "https://www.youtube.com/watch?v=ybjG3tdArE0", type: "video" },
      { title: "Does Science and Christianity Conflict?", url: "https://www.youtube.com/watch?v=WnMNsnmrYwk", type: "video" },
      { title: "Does God Exist? — Dr. Frank Turek", url: "https://www.youtube.com/watch?v=Wo_EeK7uF7c", type: "video" }
    ]
  },

  // ────────────────────────────────────────────────────
  // 5. Paul Washer
  // ────────────────────────────────────────────────────
  {
    id: "paul-washer",
    name: "Paul Washer",
    shortDesc: "Pastor · Trinitario",
    country: "🇺🇸",
    photo: "img/paul-washer.jpg",
    tags: ["pastor", "trinitario", "soteriologia"],
    bio: {
      description: "Pastor, misionero y escritor estadounidense. Reconocido predicador itinerante conocido por su sermón 'Shocking Youth Message'. Fundó HeartCry Missionary Society para apoyar misioneros nativos en todo el mundo.",
      education: [
        "Estudios en el Southwestern Baptist Theological Seminary"
      ],
      focus: "Predicación expositiva, misiones, santidad y arrepentimiento",
      affiliation: "Fundador y director de HeartCry Missionary Society",
      denomination: "Bautista — Convención Bautista del Sur"
    },
    channel: { name: "HeartCry Global", url: "https://www.youtube.com/@heartcryglobal" },
    videos: [
      { title: "¿Cómo luce una vida transformada por el evangelio?", url: "https://www.youtube.com/watch?v=HGVq3O6_oNU", type: "video" },
      { title: "True Source of Strength — Paul Washer", url: "https://www.youtube.com/watch?v=5dXA1pPNs3Q", type: "video" },
      { title: "Paul Washer — Ongoing Sin", url: "https://www.youtube.com/watch?v=t76o8Y7AA7M", type: "video" }
    ]
  },

  // ────────────────────────────────────────────────────
  // 6. Leighton Flowers
  // ────────────────────────────────────────────────────
  {
    id: "leighton-flowers",
    name: "Leighton Flowers",
    shortDesc: "Teólogo · Soteriólogo",
    country: "🇺🇸",
    photo: "img/leighton-flowers.jpg",
    tags: ["pastor", "academico", "trinitario", "soteriologia"],
    bio: {
      description: "Teólogo y profesor especializado en soteriología. Es el principal exponente del 'Provisionismo', una posición soteriológica que se opone al calvinismo desde una perspectiva no arminiana.",
      education: [
        "Maestría en Divinidad — Seminario Teológico Bautista del Sudoeste",
        "Doctorado en Filosofía (Evangelismo) — Seminario Teológico Bautista del Sudoeste"
      ],
      focus: "Soteriología, debate calvinismo vs. provisionismo, teología bíblica",
      affiliation: "Director de Ministerios Evangelísticos, Convención Bautista de Texas",
      denomination: "Bautista"
    },
    channel: { name: "Soteriology 101", url: "https://www.youtube.com/@Soteriology101" },
    videos: [
      { title: "Imputed Guilt in Romans 5?", url: "https://www.youtube.com/watch?v=zbrPIGI9oAQ", type: "video" },
      { title: "Oxford PhD Exposes The Source of Deterministic Calvinism", url: "https://www.youtube.com/watch?v=VWvJBRVpM4w", type: "video" },
      { title: "The 5 Points that Led Me Out of Calvinism", url: "https://www.youtube.com/watch?v=jgmJmY0-XdM", type: "video" }
    ]
  },

  // ────────────────────────────────────────────────────
  // 7. Melissa Dougherty
  // ────────────────────────────────────────────────────
  {
    id: "melissa-dougherty",
    name: "Melissa Dougherty",
    shortDesc: "Ex New Age · Discernimiento",
    country: "🇺🇸",
    photo: "img/melissa-dougherty.webp",
    tags: ["trinitario", "nueva_era"],
    bio: {
      description: "Apologista cristiana y ex practicante de New Age. Su experiencia personal le da una perspectiva única para analizar y refutar movimientos de espiritualidad alternativa desde una perspectiva bíblica.",
      education: [
        "CrossExamined Instructor Academy",
        "Autoestudio intensivo en teología sistemática y filosofía"
      ],
      focus: "Crítica al New Age y espiritualidad alternativa, posmodernismo, apologética cultural",
      affiliation: "Creadora de contenido apologético independiente",
      denomination: "Protestante evangélica"
    },
    channel: { name: "Melissa Dougherty", url: "https://www.youtube.com/@MelissaDougherty" },
    videos: [
      { title: "What Is Gnosticism? A Christian Scholar Explains", url: "https://www.youtube.com/watch?v=8p9Kgibnhc8", type: "video" },
      { title: "Is 'New Thought' A Cause for Concern?", url: "https://www.youtube.com/watch?v=4d5j7Zj4JWo", type: "video" },
      { title: "Napoleon Hill Unmasked: Lies, Scams, Cults, and Occult Beliefs", url: "https://www.youtube.com/watch?v=3t-ZGDUg8Bo", type: "video" }
    ]
  },

  // ────────────────────────────────────────────────────
  // 8. Mike Winger
  // ────────────────────────────────────────────────────
  {
    id: "mike-winger",
    name: "Mike Winger",
    shortDesc: "Pastor · Maestro Bíblico",
    country: "🇺🇸",
    photo: "img/mike-winger.jpg",
    tags: ["pastor", "trinitario", "critica_textual", "doctrina_dios"],
    bio: {
      description: "Pastor y maestro bíblico conocido por su enseñanza expositiva detallada y su biblioteca digital con más de 5,000 horas de estudios bíblicos gratuitos. Referente en crítica a teologías no ortodoxas.",
      education: [
        "Maestría en Divinidad"
      ],
      focus: "Enseñanza bíblica expositiva, crítica textual, análisis de hipercarismatismo y progresismo cristiano",
      affiliation: "Pastor y maestro bíblico independiente",
      denomination: "Protestante evangélico"
    },
    channel: { name: "Mike Winger", url: "https://www.youtube.com/@MikeWinger" },
    videos: [
      { title: "The Fakest Prophet: Drugs, Women, and Terror", url: "https://www.youtube.com/watch?v=R_yK0ZYPAMA", type: "video" },
      { title: "Why I Think Calvinism Is Unbiblical", url: "https://www.youtube.com/watch?v=oxakEl8BYBE", type: "video" },
      { title: "The Top 5 Principles of Proper Biblical Interpretation", url: "https://www.youtube.com/watch?v=KAcw8R3sOkw", type: "video" }
    ]
  },

  // ────────────────────────────────────────────────────
  // 9. Stuart & Cliff Knechtle
  // ────────────────────────────────────────────────────
  {
    id: "stuart-cliff-knechtle",
    name: "Stuart & Cliff Knechtle",
    shortDesc: "Evangelismo Universitario",
    country: "🇺🇸",
    photo: "img/cliffe-knechtle.webp",
    tags: ["trinitario", "ateismo"],
    bio: {
      description: "Padre e hijo dedicados a la evangelización y apologética en campus universitarios. Conocidos por sus diálogos callejeros en más de 150 universidades estadounidenses, respondiendo preguntas difíciles sobre la fe cristiana.",
      education: [
        "Licenciado en Filosofía",
        "Maestro en Divinidad"
      ],
      focus: "Diálogos universitarios: existencia de Dios, problema del mal, historicidad de Jesús",
      affiliation: "Ministerio Give Me An Answer",
      denomination: "Protestante evangélico"
    },
    channel: { name: "Give Me An Answer", url: "https://www.youtube.com/@givemeananswer" },
    videos: [
      { title: "1 HOUR of Cliffe Knechtle's Most VIRAL Debates!", url: "https://www.youtube.com/watch?v=Y6CyS-WKz1M", type: "video" },
      { title: "Wrestling With Christianity's Toughest Questions", url: "https://www.youtube.com/watch?v=bWoYbTTTIFk", type: "video" },
      { title: "Cliffe Knechtle Proves The Existence Of God To Logan Paul", url: "https://www.youtube.com/watch?v=fA0gtOFsi88", type: "video" }
    ]
  },

  // ────────────────────────────────────────────────────
  // 10. C.S. Lewis
  // ────────────────────────────────────────────────────
  {
    id: "cs-lewis",
    name: "C.S. Lewis",
    shortDesc: "Escritor · Filósofo",
    country: "🇬🇧",
    photo: "img/cs-lewis.webp",
    tags: ["filosofo", "trinitario", "ateismo", "doctrina_dios"],
    bio: {
      description: "Considerado el apologeta cristiano más influyente del siglo XX en el mundo angloparlante. Ex ateo convertido al cristianismo, cuyas obras literarias y apologéticas han impactado a millones de personas en todo el mundo.",
      education: [
        "Licenciado en Literatura Clásica y Filosofía — Universidad de Oxford"
      ],
      focus: "Apologética literaria, filosofía moral, teología accesible",
      affiliation: "Profesor en las Universidades de Oxford y Cambridge",
      denomination: "Anglicano",
      books: "Mero Cristianismo, Las Crónicas de Narnia, Cartas del Diablo a su Sobrino, El Gran Divorcio, El Problema del Dolor"
    },
    channel: null,
    videos: [
      { title: "¿Podemos ser buenos sin creer en Cristo? — C.S. Lewis", url: "https://www.youtube.com/watch?v=UJILIaF7HAE", type: "video" },
      { title: "C.S. Lewis — The Most Reluctant Convert (Documentary)", url: "https://www.youtube.com/watch?v=Zgk8UdV7GQ0", type: "video" },
      { title: "Por Qué Los Calvinistas Y Arminianos Odian Este Capítulo de Lewis", url: "https://www.youtube.com/watch?v=PHT-WIhZXWY", type: "video" }
    ]
  },

  // ────────────────────────────────────────────────────
  // 11. Joel Korytko
  // ────────────────────────────────────────────────────
  {
    id: "joel-korytko",
    name: "Joel Korytko",
    shortDesc: "Académico · Septuaginta",
    country: "🇨🇦",
    photo: "img/joel-korytko.jpg",
    tags: ["academico", "griego", "critica_textual"],
    bio: {
      description: "Erudito bíblico especializado en la Septuaginta (traducción griega del Antiguo Testamento). Su investigación se centra en cómo el traductor del Éxodo griego adaptó las leyes hebreas al contexto cultural greco-egipcio.",
      education: [
        "Doctor en Filosofía en Estudios Orientales (Septuaginta) — Oxford"
      ],
      focus: "Septuaginta, estudios bíblicos del Antiguo Testamento, crítica textual, ley bíblica",
      affiliation: "Profesor Adjunto de Estudios Bíblicos — Northwest College & Seminary",
      denomination: "—"
    },
    channel: { name: "Joel Korytko", url: "https://www.youtube.com/@JoelKorytko" },
    videos: [
      { title: "How Romans 9 Doesn't Support Calvinism", url: "https://www.youtube.com/watch?v=QPTUvKiiPNI", type: "video" },
      { title: "Answering Objections to my Romans 9 Video", url: "https://www.youtube.com/watch?v=-3bZ_-JEEPo", type: "video" },
      { title: "A Scholar Corrects James White on John 6", url: "https://www.youtube.com/watch?v=W_YSq4PP-nc", type: "video" }
    ]
  },

  // ────────────────────────────────────────────────────
  // 12. Jordan M. Hatfield
  // ────────────────────────────────────────────────────
  {
    id: "jordan-hatfield",
    name: "Jordan M. Hatfield",
    shortDesc: "Exégeta · Discernimiento",
    country: "🇺🇸",
    photo: "img/jordan-hatfield.jpg",
    tags: ["trinitario", "doctrina_dios"],
    bio: {
      description: "Creador de contenido cristiano enfocado en apologética, exégesis bíblica y discernimiento doctrinal. Su canal Great Light Studios es conocido por sus recursos sobre la Iglesia de Dios Sociedad Misionera Mundial y crítica al calvinismo.",
      education: [
        "Estudios independientes en apologética y exégesis"
      ],
      focus: "Apologética, exégesis bíblica, discernimiento doctrinal, crítica a movimientos heterodoxos",
      affiliation: "Fundador de Great Light Studios",
      denomination: "Cristiano evangélico"
    },
    channel: { name: "Great Light Studios", url: "https://www.youtube.com/@GreatLightStudios" },
    videos: [
      { title: "Calvinism, Total Depravity, Infant Damnation — A Conversation", url: "https://www.youtube.com/watch?v=zPSQZLkaK_E", type: "video" },
      { title: "Rethinking Hell: Is Hell Eternal Conscious Torment?", url: "https://www.youtube.com/watch?v=apFg1C5WzvQ", type: "video" },
      { title: "Does Regeneration Precede Faith? — Answering Calvinism", url: "https://www.youtube.com/watch?v=pVbuKpp99LU", type: "video" }
    ]
  },

  // ────────────────────────────────────────────────────
  // 13. Edgar Escobar
  // ────────────────────────────────────────────────────
  {
    id: "edgar-escobar",
    name: "Edgar Escobar",
    shortDesc: "Pastor · Enseñanza Bíblica",
    country: "🇨🇴",
    photo: "img/edgar-escobar.jpg",
    tags: ["pastor", "trinitario", "doctrina_dios"],
    bio: {
      description: "Ministro protestante, locutor y productor de radio y televisión colombiano. Dedicado a la comunicación bíblica en español, haciendo accesible el estudio de las Escrituras a la audiencia hispana.",
      education: [
        "Licenciado en Filosofía y Ciencias Sociales — Universidad Distrital Francisco José de Caldas",
        "Graduado del Centro de Liderazgo Bíblico de Colombia"
      ],
      focus: "Comunicación bíblica, producción de medios cristianos, enseñanza bíblica en español",
      affiliation: "Creador de Biblia Libre",
      denomination: "Protestante"
    },
    channel: { name: "Biblia Libre", url: "https://www.youtube.com/@BibliaLibre" },
    videos: [
      { title: "Apóstol Cash Luna, Eduardo Cañas — ¡Fábrica De Ateos!", url: "https://www.youtube.com/watch?v=0ka3xdb84RM", type: "video" },
      { title: "Misterioso origen del G12 — Lo que no sabías", url: "https://www.youtube.com/watch?v=FU8O0D8XvvY", type: "video" },
      { title: "Las peores iglesias de Latinoamérica — ¡Sus Herejías!", url: "https://www.youtube.com/watch?v=YFMDs-KvqwY", type: "video" }
    ]
  },

  // ────────────────────────────────────────────────────
  // 14. Dan McClellan
  // ────────────────────────────────────────────────────
  {
    id: "dan-mcclellan",
    name: "Dan McClellan",
    shortDesc: "Académico · Mormón",
    country: "🇺🇸",
    photo: "img/dan-mcclellan.jpg",
    tags: ["academico", "mormon", "critico_secular", "critica_textual", "griego"],
    bio: {
      description: "Erudito de las Escrituras y experto en lenguas bíblicas. Trabaja como traductor y analista de datos para La Iglesia de Jesucristo de los Santos de los Últimos Días, pero su enfoque académico es predominantemente crítico-histórico.",
      education: [
        "Doctorado en Teología y Religión — Universidad de Exeter"
      ],
      focus: "Crítica textual, lenguas bíblicas (griego y hebreo), hermenéutica, desmitificación bíblica",
      affiliation: "Traductor y analista de datos para la Iglesia SUD",
      denomination: "Mormón (Santos de los Últimos Días)"
    },
    channel: { name: "Dan McClellan", url: "https://www.youtube.com/@maklelan" },
    videos: [
      { title: "There Are Multiple Gods in the Bible, Not Just One", url: "https://www.youtube.com/watch?v=HIrW5ic1G1I", type: "video" },
      { title: "No, you don't believe everything the Bible says", url: "https://www.youtube.com/watch?v=DVp8dzyjXik", type: "video" },
      { title: "Dead Sea Scrolls, Ancient Drugs & Jesus Christ", url: "https://www.youtube.com/watch?v=mNghN4vMQ_A", type: "video" }
    ]
  },

  // ────────────────────────────────────────────────────
  // 15. Wesley Huff
  // ────────────────────────────────────────────────────
  {
    id: "wesley-huff",
    name: "Wesley Huff",
    shortDesc: "Manuscritos · NT",
    country: "🇨🇦",
    photo: "img/wesley-huff.webp",
    tags: ["trinitario", "critica_textual", "cristianismo_primitivo"],
    bio: {
      description: "Apologista cristiano canadiense con más de diez años de experiencia en conferencias y diálogos interreligiosos, especialmente entre cristianismo e islam, en universidades de Norteamérica.",
      education: [
        "Licenciatura en Sociología",
        "Maestría en Estudios Teológicos",
        "Candidato a PhD en Estudios del Nuevo Testamento"
      ],
      focus: "Diálogo interreligioso (cristianismo-islam), apologética, manuscritos del Nuevo Testamento",
      affiliation: "Director de Apologética en Canadá Central",
      denomination: "Protestante evangélico"
    },
    channel: { name: "Wes Huff", url: "https://www.youtube.com/@WesHuff" },
    videos: [
      { title: "Rapid Fire Apologetics: 10 Tough Questions About the Bible", url: "https://www.youtube.com/watch?v=jdKhbBzZOmg", type: "video" },
      { title: "How to Talk About Jesus Without Sounding Like an Idiot", url: "https://www.youtube.com/watch?v=P4d23yKp5QU", type: "video" },
      { title: "Ancient Language Expert on Banned Bible, Book of Enoch & Jesus Origins", url: "https://www.youtube.com/watch?v=CUkZfgE-L_k", type: "video" }
    ]
  },

  // ────────────────────────────────────────────────────
  // 16. Joel Marcus
  // ────────────────────────────────────────────────────
  {
    id: "joel-marcus",
    name: "Joel Marcus",
    shortDesc: "Académico · Nuevo Testamento",
    country: "🇺🇸",
    photo: "img/joel-marcus.jpg",
    tags: ["academico", "cristianismo_primitivo", "griego"],
    bio: {
      description: "Destacado erudito del Nuevo Testamento. Ha enseñado en la Universidad de Glasgow y el Seminario Teológico de Princeton. Autor de obras importantes sobre el Evangelio de Marcos y la cristología del Antiguo Testamento.",
      education: [
        "Doctorado en Estudios del Nuevo Testamento"
      ],
      focus: "Nuevo Testamento, orígenes del cristianismo, exégesis cristológica del AT",
      affiliation: "Profesor de NT y Orígenes del Cristianismo — Universidad de Duke",
      denomination: "—",
      books: "The Way of the Lord, The Mystery of the Kingdom of God, Jesus and the Holocaust"
    },
    channel: null,
    videos: [
      { title: "Mark's Use of the Old Testament — Dr. Joel Marcus", url: "https://www.youtube.com/watch?v=pJvnvqgd2fo", type: "video" },
      { title: "What Kind of a Jew Was Jesus? — Dr. Joel Marcus on Jesus and the Law", url: "https://www.youtube.com/watch?v=bXKZQ08xmhk", type: "video" },
      { title: "You DON'T KNOW John the Baptist — Professor Joel Marcus", url: "https://www.youtube.com/watch?v=hMMiK0D99sw", type: "video" }
    ]
  },

  // ────────────────────────────────────────────────────
  // 17. Dustin R. Smith
  // ────────────────────────────────────────────────────
  {
    id: "dustin-smith",
    name: "Dustin R. Smith",
    shortDesc: "Académico · Unitario Bíblico",
    country: "🇺🇸",
    photo: "img/dustin-smith.png",
    tags: ["academico", "unitario", "doctrina_dios", "cristianismo_primitivo", "griego", "critica_textual"],
    bio: {
      description: "Erudito del Nuevo Testamento y principal voz académica del unitarismo bíblico contemporáneo. Autor de nueve libros y conductor del podcast Biblical Unitarian. Su trabajo se centra en la cristología de la sabiduría y la teología de la iglesia primitiva. Ha enseñado griego bíblico a nivel de pregrado y posgrado por más de una década.",
      education: [
        "Doctor en Filosofía — Bethany Theological Seminary (ética paradójica en Apocalipsis)",
        "Profesor de Griego Bíblico (pregrado y posgrado) — Spartanburg Methodist College"
      ],
      focus: "Cristología, unitarismo bíblico, teología sistemática de la iglesia primitiva, griego bíblico",
      affiliation: "Investigador y Profesor en Spartanburg Methodist College",
      denomination: "Unitario bíblico",
      books: "A Systematic Theology of the Early Church (2025), Wisdom Christology in the Gospel of John (2024), The AI Critical New Testament (co-autor), The Son of God: Three Views (2014)"
    },
    channel: { name: "Biblical Unitarian Podcast", url: "https://www.youtube.com/@BiblicalUnitarianPodcast" },
    videos: [
      { title: "Does the Bible Teach the Trinity? — Smith vs. James White", url: "https://www.youtube.com/watch?v=xNohJq87mO8", type: "video" },
      { title: "A Systematic Theology of the Early Church", url: "https://www.youtube.com/watch?v=daEbfnv4aWg", type: "video" },
      { title: "Inspiring Philosophy's 'The Trinity Explained' — Refuted", url: "https://www.youtube.com/watch?v=zLNsh1tGP6A", type: "video" }
    ]
  },

  // ────────────────────────────────────────────────────
  // 18. James Tabor
  // ────────────────────────────────────────────────────
  {
    id: "james-tabor",
    name: "James Tabor",
    shortDesc: "Académico · Judaísmo Antiguo",
    country: "🇺🇸",
    photo: "img/james-tabor.webp",
    tags: ["academico", "critico_secular", "cristianismo_primitivo"],
    bio: {
      description: "Erudito bíblico estadounidense y profesor jubilado especializado en judaísmo antiguo y cristianismo primitivo. Reconocido por su enfoque crítico-histórico y arqueológico en el estudio de los orígenes del cristianismo.",
      education: [
        "Doctorado en Estudios Bíblicos — Universidad de Chicago"
      ],
      focus: "Judaísmo antiguo, cristianismo primitivo, arqueología bíblica, Jesús histórico",
      affiliation: "Profesor Jubilado — Universidad de Carolina del Norte en Charlotte (1989–2022)",
      denomination: "—"
    },
    channel: { name: "James Tabor", url: "https://www.youtube.com/@JamesTaborVideos" },
    videos: [
      { title: "My View of Biblical Faith After 45 Years of Academic Study", url: "https://www.youtube.com/watch?v=X9UwV7huI4Q", type: "video" },
      { title: "The Forgotten Ebionites — Found at Last!", url: "https://www.youtube.com/watch?v=Ac_Z7VCfsS4", type: "video" },
      { title: "Why You Probably Have Never Heard of Bishop Theophilus of Antioch!", url: "https://www.youtube.com/watch?v=KCdNzQcZN5s", type: "video" }
    ]
  },

  // ────────────────────────────────────────────────────
  // 19. C.J. Cornthwaite
  // ────────────────────────────────────────────────────
  {
    id: "cj-cornthwaite",
    name: "C.J. Cornthwaite",
    shortDesc: "Académico · Anti-fundamentalista",
    country: "🇺🇸",
    photo: "img/cj-cornthwaite.jpeg",
    tags: ["academico", "agnostico", "cristianismo_primitivo"],
    bio: {
      description: "Académico de orígenes cristianos, conductor del podcast Footnote Famous. Se describe a sí mismo como 'cristiano, a menudo agnóstico, ocasionalmente ateo, anti-fundamentalista'. Comprometido con la evidencia por encima de la apologética.",
      education: [
        "Maestría en Divinidad (MDiv)",
        "Maestría en Teología (MA)",
        "Doctorado en Orígenes del Cristianismo (Estudios Religiosos)"
      ],
      focus: "Biblia, orígenes del cristianismo, entrevistas con académicos, deconstrucción de fe",
      affiliation: "Conductor del podcast Footnote Famous",
      denomination: "Cristiano no confesional / Anti-fundamentalista"
    },
    channel: { name: "C.J. Cornthwaite", url: "https://www.youtube.com/@cjcornthwaite" },
    videos: [
      { title: "After Everything I've Learned — I'm STILL Christian", url: "https://www.youtube.com/watch?v=seDzbHEur0Q", type: "video" },
      { title: "What Seminary REALLY Teaches About the Bible", url: "https://www.youtube.com/watch?v=I3v_eXawx4s", type: "video" },
      { title: "What 'Son of Man' ACTUALLY Means", url: "https://www.youtube.com/watch?v=SOCuATJRI5Y", type: "video" }
    ]
  },

  // ────────────────────────────────────────────────────
  // 20. Antonio Piñero
  // ────────────────────────────────────────────────────
  {
    id: "antonio-pinero",
    name: "Antonio Piñero",
    shortDesc: "Académico · Filólogo",
    country: "🇪🇸",
    photo: "img/antonio-pinero.jpg",
    tags: ["academico", "critico_secular", "cristianismo_primitivo", "griego"],
    bio: {
      description: "Filólogo, historiador y académico español, una de las máximas autoridades en lengua hispana sobre el Jesús histórico y el cristianismo primitivo. Analiza los textos bíblicos desde una perspectiva estrictamente científica y filológica.",
      education: [
        "Licenciado y Doctor en Filología Clásica — Universidad Complutense de Madrid"
      ],
      focus: "Jesús histórico, judaísmo del Segundo Templo, cristianismo primitivo, filología bíblica",
      affiliation: "Catedrático Emérito — Universidad Complutense de Madrid",
      denomination: "Académico secular"
    },
    channel: null,
    videos: [
      { title: "¿Quién fue realmente Jesús de Nazaret? — Ft. Antonio Piñero", url: "https://www.youtube.com/watch?v=BXnHAx5AnXQ", type: "video" },
      { title: "Jesús Histórico explicado — Antonio Piñero", url: "https://www.youtube.com/watch?v=wiw2ZZvVGHw", type: "video" },
      { title: "Guía para entender a Pablo de Tarso — Antonio Piñero", url: "https://www.youtube.com/watch?v=N7vTo7tw92Y", type: "video" }
    ]
  },

  // ────────────────────────────────────────────────────
  // 21. Bart Ehrman
  // ────────────────────────────────────────────────────
  {
    id: "bart-ehrman",
    name: "Bart Ehrman",
    shortDesc: "Académico · Agnóstico",
    country: "🇺🇸",
    photo: "img/bart-ehrman.jpg",
    tags: ["academico", "agnostico", "critica_textual", "cristianismo_primitivo"],
    bio: {
      description: "Uno de los eruditos del Nuevo Testamento más reconocidos y leídos del mundo. Ex cristiano evangélico convertido en agnóstico. Sus libros de divulgación han vendido millones de copias y han generado intensos debates sobre la fiabilidad de los textos bíblicos.",
      education: [
        "Licenciatura — Wheaton College",
        "Maestría en Divinidad y Doctorado — Princeton Theological Seminary"
      ],
      focus: "Nuevo Testamento, paleocristianismo, crítica textual, manuscritos bíblicos",
      affiliation: "Jefe del Departamento de Estudios Religiosos — Universidad de Carolina del Norte en Chapel Hill",
      denomination: "Agnóstico (ex evangélico)"
    },
    channel: null,
    videos: [
      { title: "How Jesus Became God — UCC Lecture Part 1", url: "https://www.youtube.com/watch?v=7IPAKsGbqcg", type: "video" },
      { title: "Misquoting Jesus — Bart Ehrman Full Lecture", url: "https://www.youtube.com/watch?v=pfheSAcCsrE", type: "video" },
      { title: "Did Jesus Really Exist? — Ehrman vs. Price Debate", url: "https://www.youtube.com/watch?v=GzjYmpwbHEA", type: "video" }
    ]
  },

  // ────────────────────────────────────────────────────
  // 22. Paul Williams
  // ────────────────────────────────────────────────────
  {
    id: "paul-williams",
    name: "Paul Williams",
    shortDesc: "Teología Comparada · Musulmán",
    country: "🇬🇧",
    photo: "img/paul-williams.webp",
    tags: ["academico", "musulman", "doctrina_dios"],
    bio: {
      description: "Ex cristiano convertido al islam. Fundador de Blogging Theology, una de las plataformas de teología comparada más reconocidas en el mundo angloparlante, donde reúne a teólogos y académicos de diversas tradiciones religiosas.",
      education: [
        "Estudios en Filosofía y Teología — Universidad de Londres"
      ],
      focus: "Teología comparada, diálogo interreligioso, cristianismo e islam",
      affiliation: "Fundador de Blogging Theology",
      denomination: "Musulmán (converso del cristianismo)"
    },
    channel: { name: "Blogging Theology", url: "https://www.youtube.com/@BloggingTheology" },
    videos: [
      { title: "The Jewish Messiah: Was He Ever Meant to Be God? — Dr. James Tabor", url: "https://www.youtube.com/watch?v=bJ1sW0SfrCE", type: "video" },
      { title: "Why I Left Christianity for Islam — Paul Williams", url: "https://www.youtube.com/watch?v=ifllgTA2pmY", type: "video" },
      { title: "What Do Biblical Scholars Really Think? — Interview", url: "https://www.youtube.com/watch?v=5cQoGNEcc5Q", type: "video" }
    ]
  },

  // ────────────────────────────────────────────────────
  // 23. Dale Tuggy
  // ────────────────────────────────────────────────────
  {
    id: "dale-tuggy",
    name: "Dale Tuggy",
    shortDesc: "Filósofo · Unitario Bíblico",
    country: "🇺🇸",
    photo: "img/dale-tuggy.jpg",
    tags: ["filosofo", "academico", "unitario", "doctrina_dios"],
    bio: {
      description: "Filósofo analítico especializado en filosofía de la religión y teología analítica. Es una de las voces académicas más prominentes del unitarismo bíblico contemporáneo. Autor de la entrada sobre la Trinidad en la Stanford Encyclopedia of Philosophy.",
      education: [
        "Licenciatura en Filosofía — Biola University",
        "Maestría en Filosofía — Claremont Graduate University",
        "Doctorado en Filosofía — Brown University"
      ],
      focus: "Filosofía de la religión, teología analítica, crítica filosófica de la Trinidad, metafísica",
      affiliation: "Ex Profesor de Filosofía — SUNY Fredonia (2000–2018). Presidente de la Unitarian Christian Alliance",
      denomination: "Unitario bíblico",
      books: "What is the Trinity? Thinking about the Father, Son, and Holy Spirit"
    },
    channel: { name: "Trinities", url: "https://www.youtube.com/@trinaborton3926" },
    videos: [
      { title: "Is the Trinity True? — Tuggy vs. Glover Debate", url: "https://www.youtube.com/watch?v=oKrc790qyQI", type: "video" },
      { title: "Rabbi Singer & Christian Scholar Dr. Dale Tuggy Discuss Christianity", url: "https://www.youtube.com/watch?v=6LU8B00sckQ", type: "video" },
      { title: "Is Jesus YHWH? — Dale Tuggy and James White Debate", url: "https://www.youtube.com/watch?v=ky2SaHscSIo", type: "video" }
    ]
  },

  // ────────────────────────────────────────────────────
  // 24. Metaphysics Mike
  // ────────────────────────────────────────────────────
  {
    id: "metaphysics-mike",
    name: "Metaphysics Mike",
    shortDesc: "Teólogo · Unitario Bíblico",
    country: "🇺🇸",
    photo: "img/metaphysics-mike.jpg",
    tags: ["unitario", "doctrina_dios", "cristianismo_primitivo"],
    bio: {
      description: "Michael Temperato, conocido como Metaphysics Mike, es un creador de contenido teológico enfocado en cuestionar la doctrina de la Trinidad desde una perspectiva bíblica e histórica. Hijo de misioneros evangélicos en África, su travesía personal lo llevó del cristianismo tradicional al unitarismo bíblico y la observancia de la Torá.",
      education: [
        "Formación autodidacta en teología, filosofía y estudios bíblicos"
      ],
      focus: "Crítica a la doctrina de la Trinidad, historia de la iglesia primitiva, unitarismo bíblico, observancia de la Torá",
      affiliation: "Creador de contenido independiente — Metaphysics Mike",
      denomination: "Unitario bíblico / Observante de la Torá"
    },
    channel: { name: "Metaphysics Mike", url: "https://www.youtube.com/@MetaphysicsMike" },
    videos: [
      { title: "3 Biblical Arguments For The Trinity — Debunked", url: "https://www.youtube.com/watch?v=GYUzcLZ3xVE", type: "video" },
      { title: "Gospel of Mark Calls Jesus God In Every Chapter — Debunked", url: "https://www.youtube.com/watch?v=WFhWr_vQo2Q", type: "video" },
      { title: "The Problem of Trinitarian Language — Full Debunk", url: "https://www.youtube.com/watch?v=ghHseZfuuz4", type: "video" }
    ]
  },

  // ────────────────────────────────────────────────────
  // 25. Juanjo Fantoso
  // ────────────────────────────────────────────────────
  {
    id: "juanjo-fantoso",
    name: "Juanjo Fantoso",
    shortDesc: "Griego Bíblico · Koiné",
    country: "🇪🇸",
    photo: "img/juanjo-fantoso.jpeg",
    tags: ["griego", "critica_textual"],
    bio: {
      description: "Divulgador y educador de griego moderno y bíblico (koiné) para hispanohablantes. Fundador de la Academia Egeo. Actualmente trabaja en su propia traducción del Nuevo Testamento y libros apócrifos desde el griego original al español, buscando una interpretación literal y neutral.",
      education: [
        "Formación autodidacta en griego moderno y koiné",
        "Estudios en Telecomunicaciones e Informática"
      ],
      focus: "Enseñanza del griego bíblico (koiné), traducción del Nuevo Testamento, análisis lingüístico de textos bíblicos",
      affiliation: "Fundador de Academia Egeo",
      denomination: "—"
    },
    channel: { name: "Juanjo Fantoso", url: "https://www.youtube.com/@juanjofantoso" },
    videos: [
      { title: "La fórmula \"trinitaria\" de Mateo", url: "https://www.youtube.com/watch?v=3SdszNQK6Ow", type: "video" },
      { title: "Lo que Jesús dijo (y no dijo) en la cruz", url: "https://www.youtube.com/watch?v=XuRI3L3-irE", type: "video" },
      { title: "Divorce according to the Bible — Biblical Greek Course", url: "https://www.youtube.com/watch?v=red724mGcgg", type: "video" }
    ]
  },

  // ────────────────────────────────────────────────────
  // 26. Pregúntale a Dann
  // ────────────────────────────────────────────────────
  {
    id: "preguntale-a-dann",
    name: "Pregúntale a Dann",
    shortDesc: "Teología · Divulgación",
    country: "🇲🇽",
    photo: "img/preguntale-a-dann.jpeg",
    tags: ["academico", "cristianismo_primitivo", "doctrina_dios"],
    bio: {
      description: "Creador de contenido dedicado a la divulgación del estudio teológico desde todas sus perspectivas y matices. Doctor en Teología (Th.D.) con enfoque en eclesiología, historia de la iglesia y teología comparada. Su canal aborda temas de angelología, historia bíblica, arqueología y análisis de distintas tradiciones cristianas.",
      education: [
        "Doctor en Teología (Th.D.)"
      ],
      focus: "Divulgación teológica, eclesiología, historia de la iglesia, teología comparada, angelología",
      affiliation: "Creador de Pregúntale a Dann / Pop Theology Dojo",
      denomination: "—"
    },
    channel: { name: "Pregúntale a Dann", url: "https://www.youtube.com/@PreguntaleaDann" },
    videos: [
      { title: "Angels, Technology, and the Origin of Evil: Why was the Book of Enoch hidden?", url: "https://www.youtube.com/watch?v=cC-h4Ps7qX4", type: "video" },
      { title: "Catholic vs. Protestant vs. Ethiopian: A Comprehensive Dissection of Biblical Editions", url: "https://www.youtube.com/watch?v=NRD9whRKOAc", type: "video" },
      { title: "Why You Don't Believe in God (and Why You Might Want To)", url: "https://www.youtube.com/watch?v=HHEtYDAdAeg", type: "video" }
    ]
  }
];
