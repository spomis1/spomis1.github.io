// ============================================================
// STATE
// ============================================================
const state = {
  theme: localStorage.getItem('theme') || 'dark',
  lang:  localStorage.getItem('lang')  || 'es',
};

// ============================================================
// i18n DATA
// ============================================================
const i18n = {
  es: {
    'nav.about':      'Sobre mí',
    'nav.experience': 'Experiencia',
    'nav.projects':   'Proyectos',
    'nav.skills':     'Skills',
    'nav.contact':    'Contacto',
    'nav.cv':         'Descargar CV',

    'hero.greeting': 'Hola, soy',
    'hero.tagline':  'Transformo datos en decisiones y procesos en flujos automáticos.',
    'hero.cta.projects': 'Ver Proyectos',
    'hero.cta.cv':    'Descargar CV',
    'hero.scroll':    'Deslizá para explorar',

    'about.heading':         'Sobre mí',
    'about.p1': 'Soy Licenciado en Administración con una especialización en Data Science y un perfil híbrido entre Data Engineering, Análisis de Datos y Automatización. Construyo pipelines robustos, transformo datos complejos en información clara y accionable para la toma de decisiones, e integro IA generativa de forma nativa en proyectos reales: desde agentes conversacionales hasta automatizaciones con MCP.',
    'about.p2': 'Viví casi tres años en Madrid, donde completé mi especialización en Data Science y trabajé en entornos corporativos europeos — una experiencia que reforzó mi adaptabilidad y mi visión de los datos como herramienta de negocio. Hoy trabajo como Data & Automation Analyst en Accenture asignado a Mercado Pago, combinando ingeniería de datos, análisis de negocio y automatización inteligente.',
    'about.p3': 'Me interesa sumarme a equipos y empresas que pongan la tecnología y los datos en el centro — entornos donde construir, automatizar y decidir con datos sea parte del día a día.',
    'about.card.location':  'Ubicación',
    'about.card.current':   'Empresa actual',
    'about.card.education': 'Educación',
    'about.card.languages': 'Idiomas',
    'about.card.available': 'Open to',

    'exp.heading':   'Experiencia',
    'exp.present':   'Presente',
    'exp.education': 'Educación',
    'courses.heading': 'Cursos complementarios',

    'projects.heading':  'Proyectos',
    'projects.subtitle': 'Lo que he construido',
    'projects.github':   'Ver en GitHub',
    'projects.demo':     'Ver demo',

    'skills.heading':      'Skills',
    'skills.group.data':   'Datos & Cloud',
    'skills.group.sql':    'SQL',
    'skills.group.python': 'Python',
    'skills.group.auto':   'IA & Automatización',
    'skills.group.ml':     'ML & Visualización',
    'skills.group.tools':  'Herramientas',

    'hobbies.heading':    'Pasatiempos',
    'hobbies.ai.label':   'IA Agéntica',
    'hobbies.ai.desc':    'Trabajo con IA agéntica para construir proyectos de mi interés. Es mi principal área de exploración.',
    'hobbies.read.label': 'Lectura',
    'hobbies.read.desc':  'El Kindle va a todos lados. Novelas, ciencia ficción, ensayo, historia.',
    'hobbies.run.label':  'Running',
    'hobbies.run.desc':   'Buenos Aires en zapatillas. Mejor forma de despejar la cabeza.',
    'hobbies.pena.label': 'Fútbol',
    'hobbies.pena.desc':  'Hincha de Peñarol. Siempre carbonero.',
    'hobbies.music.label': 'Música',
    'hobbies.music.desc':  'Me gusta la música y entender cómo funciona su industria. De ahí nació SoundCad.',

    'contact.heading': '¿Hablamos?',
    'contact.sub':     'Estoy abierto a oportunidades en Data Engineering, DataOps y proyectos interesantes. Escribime directamente.',

    'footer.copy': 'Diseñado y construido por Sebastián Pomi',
  },
  en: {
    'nav.about':      'About',
    'nav.experience': 'Experience',
    'nav.projects':   'Projects',
    'nav.skills':     'Skills',
    'nav.contact':    'Contact',
    'nav.cv':         'Download CV',

    'hero.greeting': "Hi, I'm",
    'hero.tagline':  'I turn data into decisions and processes into automated flows.',
    'hero.cta.projects': 'See Projects',
    'hero.cta.cv':    'Download CV',
    'hero.scroll':    'Scroll to explore',

    'about.heading':         'About me',
    'about.p1': "My background combines Business Administration and Data Science, with a hybrid profile across Data Engineering, Data Analysis, and Automation. I build robust pipelines, turn complex data into clear and actionable insights for decision-making, and natively integrate generative AI into real projects: from conversational agents to MCP-powered automations.",
    'about.p2': 'I spent nearly three years in Madrid, where I completed my specialization in Data Science and worked in European corporate environments — an experience that strengthened my adaptability and my view of data as a core business tool. Today I work as Data & Automation Analyst at Accenture assigned to Mercado Pago, combining data engineering, business analysis, and intelligent automation.',
    'about.p3': "I'm looking to join teams and companies that put technology and data at the center — environments where building, automating, and deciding with data is part of everyday work.",
    'about.card.location':  'Location',
    'about.card.current':   'Current company',
    'about.card.education': 'Education',
    'about.card.languages': 'Languages',
    'about.card.available': 'Open to',

    'exp.heading':   'Experience',
    'exp.present':   'Present',
    'exp.education': 'Education',
    'courses.heading': 'Complementary courses',

    'projects.heading':  'Projects',
    'projects.subtitle': "What I've built",
    'projects.github':   'View on GitHub',
    'projects.demo':     'See demo',

    'skills.heading':      'Skills',
    'skills.group.data':   'Data & Cloud',
    'skills.group.sql':    'SQL',
    'skills.group.python': 'Python',
    'skills.group.auto':   'AI & Automation',
    'skills.group.ml':     'ML & Visualization',
    'skills.group.tools':  'Tools',

    'hobbies.heading':    'Hobbies',
    'hobbies.ai.label':   'Agentic AI',
    'hobbies.ai.desc':    'I use agentic AI to build projects that interest me. My main area of exploration.',
    'hobbies.read.label': 'Reading',
    'hobbies.read.desc':  'Kindle goes everywhere. Novels, sci-fi, essays, history.',
    'hobbies.run.label':  'Running',
    'hobbies.run.desc':   'Buenos Aires on foot. Best way to clear my head.',
    'hobbies.pena.label': 'Football',
    'hobbies.pena.desc':  'Peñarol fan. Carbonero forever.',
    'hobbies.music.label': 'Music',
    'hobbies.music.desc':  'I love music and understanding how the industry works. That\'s where SoundCad came from.',

    'contact.heading': "Let's talk",
    'contact.sub':     "I'm open to opportunities in Data Engineering, DataOps, and interesting projects. Reach out directly.",

    'footer.copy': 'Designed and built by Sebastián Pomi',
  },
};

// ============================================================
// EXPERIENCE DATA
// ============================================================
const experience = [
  {
    id: 'accenture',
    period: '10/2024',
    endEs: 'Presente', endEn: 'Present',
    company: 'Accenture | Mercado Pago TMO',
    location: 'Buenos Aires, Argentina',
    roleEs: 'Data & Automation Analyst',
    roleEn: 'Data & Automation Analyst',
    current: true,
    bulletsEs: [
      'Participación en el diseño e implementación de pipelines de conciliación financiera automatizados sobre GCP.',
      'Desarrollo de scripts Python y workflows n8n para procesamiento de archivos SFTP/GCS, validaciones de datos y alertas operativas por Slack.',
      'Construcción del AI Support Agent (Claude API + n8n + Slack + Jira + BigQuery + MCP): clasifica consultas, gestiona tickets automáticamente y genera logs para mejora continua.',
      'SQL avanzado en BigQuery — CTEs, MERGE, Window Functions, deduplicación — para debugging de ETLs y análisis de diferencias entre fuentes.',
      'Automatización de controles de calidad de datos y generación de reportes HTML operativos.',
    ],
    bulletsEn: [
      'Participated in the design and implementation of automated financial reconciliation pipelines on GCP.',
      'Developed Python scripts and n8n workflows for SFTP/GCS file processing, data validations, and Slack operational alerts.',
      'Built the AI Support Agent (Claude API + n8n + Slack + Jira + BigQuery + MCP): classifies queries, automatically manages tickets, and generates logs for continuous improvement.',
      'Advanced SQL in BigQuery — CTEs, MERGE, Window Functions, deduplication — for ETL debugging and source-to-table difference analysis.',
      'Automated data quality controls and generation of HTML operational reports.',
    ],
    tags: ['Python', 'BigQuery', 'GCP', 'n8n', 'Claude API', 'SQL', 'Slack', 'Jira', 'MCP'],
  },
  {
    id: 'chep',
    period: '01/2024',
    endEs: '06/2024', endEn: '06/2024',
    company: 'CHEP (Brambles Group)',
    location: 'Madrid, España',
    roleEs: 'Data Quality Analyst',
    roleEn: 'Data Quality Analyst',
    current: false,
    bulletsEs: [
      'Limpieza y mejora de calidad de datos de geolocalización con Python (pandas) y Power BI.',
      'Análisis y reporting de métricas operativas para seguimiento y toma de decisiones.',
      'Colaboración con equipos de datos e innovación para identificar mejoras en la calidad de la información.',
    ],
    bulletsEn: [
      'Data quality improvement and cleaning of geolocation data using Python (pandas) and Power BI.',
      'Analysis and reporting of operational metrics for tracking and decision-making.',
      'Collaboration with data and innovation teams to identify data quality improvements.',
    ],
    tags: ['Python', 'Pandas', 'Power BI', 'Data Quality', 'SQL'],
  },
  {
    id: 'intrum',
    period: '12/2021',
    endEs: '12/2023', endEn: '12/2023',
    company: 'Intrum',
    location: 'Madrid, España',
    roleEs: 'Analista de Operaciones y Finanzas',
    roleEn: 'Finance & Operations Analyst',
    current: false,
    bulletsEs: [
      'Gestión integral de compras, servicios generales y proveedores en entorno corporativo europeo.',
      'Control, conciliación y aprobación de facturas e informes de gastos.',
      'Seguimiento y control presupuestario con reporte periódico a dirección.',
    ],
    bulletsEn: [
      'Comprehensive management of procurement, general services, and suppliers in a European corporate environment.',
      'Control, reconciliation, and approval of invoices and expense reports.',
      'Budget tracking and control with periodic reporting to management.',
    ],
    tags: ['Finance', 'Excel', 'Reporting', 'Process Management'],
  },
  {
    id: 'macrofar',
    period: '07/2015',
    endEs: '08/2021', endEn: '08/2021',
    company: 'Droguería Macrofar',
    location: 'Buenos Aires, Argentina',
    roleEs: 'Encargado de Administración y Finanzas',
    roleEn: 'Finance & Administration Manager',
    current: false,
    bulletsEs: [
      'Supervisión de analista responsable de facturación, ejecución de pagos y control de documentación.',
      'Conciliación y gestión de cuentas con proveedores, clientes y bancos.',
      'Aprobación de pagos y elaboración de reportes financieros para dirección.',
      'Gestión de nóminas, presupuestos y flujos de pago.',
    ],
    bulletsEn: [
      'Supervision of analyst responsible for billing, payment execution, and documentation control.',
      'Account reconciliation and management with suppliers, clients, and banks.',
      'Payment approval and financial report preparation for management.',
      'Payroll, budget, and cash flow management.',
    ],
    tags: ['Finance', 'Excel', 'Reporting', 'Team Management'],
  },
];

const education = [
  {
    title: 'Licenciatura en Administración',
    institution: 'Universidad de Buenos Aires (UBA)',
    period: '2013 – 2020',
    flag: '🇦🇷',
    badgeType: 'done',
    badgeEs: 'Carrera de Grado',
    badgeEn: 'Bachelor\'s Degree',
  },
  {
    title: 'Data Science & Data Analytics',
    institution: 'The Bridge Digital Talent Accelerator',
    period: '2023 · Madrid, España',
    flag: '🇪🇸',
    badgeType: 'bootcamp',
    badgeEs: 'Especialización',
    badgeEn: 'Specialization',
  },
];

const courses = [
  {
    title: 'Data Science I',
    institution: 'Coderhouse',
    period: '2025',
    flag: '🇦🇷',
    badgeType: 'done',
    badgeEs: 'Completado',
    badgeEn: 'Completed',
  },
  {
    title: 'Power BI: Análisis de Datos y Business Intelligence',
    institution: 'Udemy · Datadata Cursos',
    period: '2024',
    flag: '🌐',
    badgeType: 'done',
    badgeEs: 'Completado',
    badgeEn: 'Completed',
  },
  {
    title: 'Data Mining & Business Intelligence',
    institution: 'Femxa',
    period: '2023',
    flag: '🌐',
    badgeType: 'done',
    badgeEs: 'Completado',
    badgeEn: 'Completed',
  },
];

// ============================================================
// PROJECT DATA
// ============================================================
const projects = [
  {
    id: 'soundcad',
    icon: '🎧',
    statusEs: 'Beta pública',
    statusEn: 'Public Beta',
    statusColor: 'green',
    titleEs: 'SoundCad Music',
    titleEn: 'SoundCad Music',
    descEs: 'Plataforma de inteligencia musical que consolida datos en tiempo real de 8 APIs (Spotify, Last.fm, YouTube, Wikipedia, MusicBrainz, Setlist.fm, Deezer, Apple Music). Genera perfiles de artistas con "Momentum Score" propio, análisis de canciones con "Sample DNA" y tendencias de mercado. Alternativa open-source a Chartmetric ($150/mes) y Soundcharts.',
    descEn: 'Music intelligence platform consolidating real-time data from 8 APIs (Spotify, Last.fm, YouTube, Wikipedia, MusicBrainz, Setlist.fm, Deezer, Apple Music). Generates artist profiles with a custom "Momentum Score", song analysis with "Sample DNA", and market trends. Open-source alternative to Chartmetric ($150/mo) and Soundcharts.',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Vanilla JS', 'Spotify API', 'Last.fm', 'YouTube API', 'REST APIs'],
    github: 'https://github.com/spomis1/soundcad-music',
    demo: 'https://spomis1.github.io/soundcad-music/',
  },
  {
    id: 'ai-agent',
    icon: '🤖',
    statusEs: 'En producción',
    statusEn: 'Live',
    statusColor: 'green',
    titleEs: 'AI Support Agent',
    titleEn: 'AI Support Agent',
    descEs: 'Agente de IA en producción real. Conecta Claude API con n8n, Slack y Jira para clasificar consultas automáticamente: resuelve las simples y gestiona tickets para las complejas. Primer proyecto end-to-end usando MCP (Model Context Protocol). Logs estructurados en BigQuery para mejora continua.',
    descEn: 'AI agent running in real production. Connects Claude API with n8n, Slack and Jira to automatically classify queries: resolves simple ones, creates tickets for complex ones. First end-to-end project using MCP (Model Context Protocol). Structured BigQuery logs for continuous improvement.',
    tags: ['Claude API', 'MCP', 'n8n', 'Slack', 'Jira', 'BigQuery', 'Python'],
    github: null,
    demo: null,
    internal: true,
  },
  {
    id: 'house-price',
    icon: '🏠',
    statusEs: 'Completado',
    statusEn: 'Completed',
    statusColor: 'blue',
    titleEs: 'House Price Prediction — Madrid',
    titleEn: 'House Price Prediction — Madrid',
    descEs: 'Modelo ML para predecir precios de viviendas en Madrid. EDA profundo sobre datos del mercado inmobiliario, feature engineering, y comparativa Random Forest vs XGBoost. Incluye red neuronal con Keras. App interactiva deployada en Streamlit donde podés ingresar características de un piso y obtener una estimación al instante.',
    descEn: 'ML model for predicting housing prices in Madrid. In-depth EDA on real estate market data, feature engineering, and Random Forest vs XGBoost benchmark. Includes a Keras neural network. Interactive app deployed on Streamlit — enter apartment features and get an instant price estimate.',
    tags: ['Python', 'Scikit-Learn', 'XGBoost', 'Keras', 'Streamlit', 'EDA', 'Feature Engineering'],
    github: 'https://github.com/spomis1/House_Price_Prediction_Madrid',
    demo: 'https://house-price-predictor-spomi.streamlit.app/',
  },
  {
    id: 'music-eda',
    icon: '🎵',
    statusEs: 'Completado',
    statusEn: 'Completed',
    statusColor: 'blue',
    titleEs: 'Spotify & YouTube Music Analytics',
    titleEn: 'Spotify & YouTube Music Analytics',
    descEs: 'Análisis exploratorio de la distribución digital de música en las dos plataformas líderes. Pipeline ETL completo con Python, análisis de tendencias por géneros, artistas top y correlaciones entre métricas de engagement. Resultados visualizados en un dashboard interactivo de Power BI.',
    descEn: 'Exploratory analysis of digital music distribution across the two leading streaming platforms. Full ETL pipeline in Python, genre trend analysis, top artists, and engagement metric correlations. Results visualized in an interactive Power BI dashboard.',
    tags: ['Python', 'Pandas', 'Power BI', 'ETL', 'EDA', 'Matplotlib', 'Seaborn'],
    github: 'https://github.com/spomis1/Music_EDA',
    demo: 'https://spomis1.github.io/Music_EDA',
  },
  {
    id: 'future-1',
    icon: '+',
    statusEs: 'Próximamente',
    statusEn: 'Coming Soon',
    statusColor: 'gray',
    titleEs: 'Próximo Proyecto',
    titleEn: 'Next Project',
    descEs: 'Nuevos proyectos en camino — pipeline en tiempo real, MLOps o automatización avanzada con IA. Stay tuned.',
    descEn: 'New projects on the way — real-time pipeline, MLOps, or advanced AI automation. Stay tuned.',
    tags: ['TBD'],
    github: null,
    demo: null,
    placeholder: true,
  },
];

// ============================================================
// SKILLS DATA
// ============================================================
const skills = [
  {
    groupKey: 'skills.group.auto',
    color: '#10b981',
    pills: ['Claude API', 'Claude Code', 'MCP', 'Agentic AI', 'Anthropic API', 'Prompt Engineering', 'n8n', 'Agentic Workflows', 'Multi-agent Systems', 'Google Apps Script', 'REST APIs', 'Webhooks'],
  },
  {
    groupKey: 'skills.group.data',
    color: '#00d4ff',
    pills: ['BigQuery', 'GCP', 'Google Cloud Storage', 'ETL/ELT', 'Data Warehousing', 'Data Quality', 'SFTP'],
  },
  {
    groupKey: 'skills.group.sql',
    color: '#a855f7',
    pills: ['CTEs', 'Window Functions', 'MERGE', 'Deduplicación', 'SAFE_CAST', 'UPDATE/INSERT', 'BigQuery SQL'],
  },
  {
    groupKey: 'skills.group.python',
    color: '#f59e0b',
    pills: ['pandas', 'numpy', 'FastAPI', 'Streamlit', 'DuckDB', 'Dask', 'google-cloud-bigquery', 'slack_sdk', 'paramiko', 'openpyxl'],
  },
  {
    groupKey: 'skills.group.ml',
    color: '#ec4899',
    pills: ['Scikit-learn', 'XGBoost', 'Keras', 'Feature Engineering', 'EDA', 'Power BI', 'Tableau', 'Plotly', 'Seaborn', 'Matplotlib'],
  },
  {
    groupKey: 'skills.group.tools',
    color: '#64748b',
    pills: ['GitHub', 'Jira', 'VS Code', 'Cursor', 'Jupyter Notebook', 'Slack', 'Excel'],
  },
];

// ============================================================
// HOBBIES DATA
// ============================================================
const hobbies = [
  { icon: '🤖', labelKey: 'hobbies.ai.label',    descKey: 'hobbies.ai.desc' },
  { icon: '🎵', labelKey: 'hobbies.music.label', descKey: 'hobbies.music.desc' },
  { icon: '📚', labelKey: 'hobbies.read.label',  descKey: 'hobbies.read.desc' },
  { icon: '🏃', labelKey: 'hobbies.run.label',   descKey: 'hobbies.run.desc' },
];

// ============================================================
// THEME MODULE
// ============================================================
const ThemeModule = {
  sunSVG: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
  moonSVG: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,

  init() {
    document.documentElement.setAttribute('data-theme', state.theme);
    this.updateIcon();
  },

  toggle() {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', state.theme);
    localStorage.setItem('theme', state.theme);
    this.updateIcon();
  },

  updateIcon() {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.innerHTML = state.theme === 'dark' ? this.sunSVG : this.moonSVG;
    btn.setAttribute('aria-label', state.theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
  },
};

// ============================================================
// LANGUAGE MODULE
// ============================================================
const LangModule = {
  init() {
    this.apply(state.lang);
    this.updateButton();
    this.updateCVLinks();
  },

  toggle() {
    state.lang = state.lang === 'es' ? 'en' : 'es';
    localStorage.setItem('lang', state.lang);
    document.documentElement.lang = state.lang;
    this.apply(state.lang);
    this.updateButton();
    this.updateCVLinks();
    ExperienceRenderer.render(state.lang);
    CoursesRenderer.render(state.lang);
    ProjectRenderer.render(state.lang);
    SkillsRenderer.render(state.lang);
    HobbiesRenderer.render(state.lang);
    TypingModule.reset();
  },

  apply(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (i18n[lang] && i18n[lang][key] !== undefined) {
        el.textContent = i18n[lang][key];
      }
    });
  },

  updateButton() {
    const btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = state.lang === 'es' ? 'EN' : 'ES';
  },

  updateCVLinks() {
    const attr = `data-href-${state.lang}`;
    document.querySelectorAll('[data-href-es]').forEach(el => {
      const href = el.getAttribute(attr) || el.getAttribute('data-href-es');
      if (href) el.href = href;
    });
  },
};

// ============================================================
// PARTICLES MODULE
// ============================================================
const ParticlesModule = {
  canvas: null,
  ctx: null,
  particles: [],
  animId: null,

  init() {
    this.canvas = document.getElementById('particles-canvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.resize();
    this.spawn(65);
    this.loop();
    window.addEventListener('resize', () => this.resize());
  },

  resize() {
    this.canvas.width  = window.innerWidth;
    this.canvas.height = window.innerHeight;
  },

  spawn(n) {
    for (let i = 0; i < n; i++) {
      this.particles.push({
        x:  Math.random() * this.canvas.width,
        y:  Math.random() * this.canvas.height,
        r:  Math.random() * 1.4 + 0.4,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        a:  Math.random() * 0.45 + 0.08,
      });
    }
  },

  loop() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    const isDark = state.theme === 'dark';
    const color = isDark ? '0,212,255' : '0,160,200';

    this.particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = this.canvas.width;
      if (p.x > this.canvas.width) p.x = 0;
      if (p.y < 0) p.y = this.canvas.height;
      if (p.y > this.canvas.height) p.y = 0;

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(${color},${p.a})`;
      this.ctx.fill();
    });

    this.animId = requestAnimationFrame(() => this.loop());
  },
};

// ============================================================
// TYPING ANIMATION
// ============================================================
const TypingModule = {
  strings: {
    es: ['Data & Automation', 'Data Engineer', 'Builder de Pipelines', 'Builder de Agentes con IA', 'DataOps & Automatización'],
    en: ['Data & Automation', 'Data Engineer', 'Pipeline Builder', 'AI Agent Builder', 'DataOps & Automation'],
  },
  el: null,
  current: 0,
  charIdx: 0,
  isDeleting: false,
  timer: null,

  init() {
    this.el = document.getElementById('typing-text');
    if (!this.el) return;
    this.tick();
  },

  reset() {
    clearTimeout(this.timer);
    this.current = 0;
    this.charIdx = 0;
    this.isDeleting = false;
    if (this.el) this.el.textContent = '';
    this.tick();
  },

  tick() {
    if (!this.el) return;
    const arr = this.strings[state.lang];
    const full = arr[this.current % arr.length];
    const shown = this.isDeleting
      ? full.slice(0, --this.charIdx)
      : full.slice(0, ++this.charIdx);

    this.el.textContent = shown;

    let delay = this.isDeleting ? 45 : 95;
    if (!this.isDeleting && shown === full) {
      delay = 2200;
      this.isDeleting = true;
    } else if (this.isDeleting && shown === '') {
      this.isDeleting = false;
      this.current = (this.current + 1) % arr.length;
      delay = 350;
    }
    this.timer = setTimeout(() => this.tick(), delay);
  },
};

// ============================================================
// NAV MODULE
// ============================================================
const NavModule = {
  init() {
    const nav       = document.getElementById('main-nav');
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');

    // Scroll → sticky glassmorphism
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Hamburger
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      mobileMenu.setAttribute('aria-hidden', String(!isOpen));
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
      });
    });

    // Active section via IntersectionObserver
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          navLinks.forEach(l => l.classList.remove('active'));
          const active = document.querySelector(`.nav-link[href="#${e.target.id}"]`);
          if (active) active.classList.add('active');
        }
      });
    }, { rootMargin: '-45% 0px -45% 0px' });

    sections.forEach(s => io.observe(s));
  },
};

// ============================================================
// SCROLL REVEAL
// ============================================================
const ScrollReveal = {
  init() {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  },

  observe(el) {
    // rAF ensures the browser paints opacity:0 before the observer fires,
    // giving the CSS transition something to animate from.
    requestAnimationFrame(() => {
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.06, rootMargin: '0px 0px 40px 0px' });
      io.observe(el);
    });
  },

  // Force-reveal all elements currently in the viewport (used after JS renders)
  revealInViewport(container) {
    requestAnimationFrame(() => {
      container.querySelectorAll('[class*="card"], .skill-group, .hobby-card, .timeline-item, .edu-card').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 100 && rect.bottom > -100) {
          el.classList.add('visible');
        }
      });
    });
  },
};

// ============================================================
// EXPERIENCE RENDERER
// ============================================================
const ExperienceRenderer = {
  render(lang) {
    this.renderTimeline(lang);
    this.renderEducation(lang);
  },

  renderTimeline(lang) {
    const container = document.getElementById('timeline-container');
    if (!container) return;

    container.innerHTML = experience.map((job, i) => {
      const role   = lang === 'es' ? job.roleEs   : job.roleEn;
      const end    = lang === 'es' ? job.endEs     : job.endEn;
      const bullets = lang === 'es' ? job.bulletsEs : job.bulletsEn;
      const period = `${job.period} → ${end}`;

      return `
        <div class="timeline-item" style="transition-delay:${i * 0.08}s">
          <div class="timeline-node"></div>
          <div class="timeline-content">
            <div class="timeline-header">
              <span class="timeline-role">${role}</span>
              ${job.current ? `<span class="timeline-badge">${lang === 'es' ? 'Actual' : 'Current'}</span>` : ''}
            </div>
            <div class="timeline-company">${job.company}</div>
            <div class="timeline-meta">${period} · ${job.location}</div>
            <ul class="timeline-bullets">
              ${bullets.map(b => `<li>${b}</li>`).join('')}
            </ul>
            <div class="tag-row">
              ${job.tags.map(t => `<span class="tag">${t}</span>`).join('')}
            </div>
          </div>
        </div>`;
    }).join('');

    container.querySelectorAll('.timeline-item').forEach(el => ScrollReveal.observe(el));
    ScrollReveal.revealInViewport(container);
  },

  renderEducation(lang) {
    const container = document.getElementById('education-container');
    if (!container) return;

    container.innerHTML = education.map((edu, i) => {
      const badge = lang === 'es' ? edu.badgeEs : edu.badgeEn;
      return `
        <div class="edu-card" style="transition-delay:${i * 0.1}s">
          <div>
            <div class="edu-title">${edu.title}</div>
            <div class="edu-institution">${edu.institution}</div>
            <div class="edu-period">${edu.period}</div>
            <span class="edu-badge ${edu.badgeType}">${badge}</span>
          </div>
        </div>`;
    }).join('');

    container.querySelectorAll('.edu-card').forEach(el => ScrollReveal.observe(el));
    ScrollReveal.revealInViewport(container);
  },
};

// ============================================================
// COURSES RENDERER
// ============================================================
const CoursesRenderer = {
  render(lang) {
    const container = document.getElementById('courses-container');
    if (!container) return;

    container.innerHTML = courses.map((c, i) => {
      const badge = lang === 'es' ? c.badgeEs : c.badgeEn;
      return `
        <div class="edu-card" style="transition-delay:${i * 0.08}s">
          <div>
            <div class="edu-title">${c.title}</div>
            <div class="edu-institution">${c.institution}</div>
            <div class="edu-period">${c.period}</div>
            <span class="edu-badge ${c.badgeType}">${badge}</span>
          </div>
        </div>`;
    }).join('');

    container.querySelectorAll('.edu-card').forEach(el => ScrollReveal.observe(el));
    ScrollReveal.revealInViewport(container);
  },
};

// ============================================================
// PROJECT RENDERER
// ============================================================
const ProjectRenderer = {
  render(lang) {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    grid.innerHTML = projects.map((p, i) => {
      const title  = lang === 'es' ? p.titleEs  : p.titleEn;
      const desc   = lang === 'es' ? p.descEs   : p.descEn;
      const status = lang === 'es' ? p.statusEs : p.statusEn;
      const ghLabel = i18n[lang]['projects.github'];
      const demoLabel = i18n[lang]['projects.demo'];

      const iconHtml = p.icon === '+'
        ? `<div class="card-icon-plus">+</div>`
        : `<span class="card-icon">${p.icon}</span>`;

      const internalNote = p.internal
        ? `<span class="internal-note">${lang === 'es' ? '🔒 Proyecto interno' : '🔒 Internal project'}</span>`
        : '';

      const linksHtml = (!p.internal && (p.github || p.demo)) ? `
        <div class="card-links">
          ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener noreferrer" class="link-btn">${ghLabel} →</a>` : ''}
          ${p.demo   ? `<a href="${p.demo}"   target="_blank" rel="noopener noreferrer" class="link-btn demo">${demoLabel} →</a>` : ''}
        </div>` : '';

      return `
        <article class="project-card ${p.placeholder ? 'placeholder' : ''}"
                 style="transition-delay:${i * 0.1}s"
                 ${p.placeholder ? 'aria-hidden="true"' : ''}>
          <div class="card-header">
            ${iconHtml}
            <span class="status-badge status-${p.statusColor}">${status}</span>
          </div>
          <h3 class="project-title">${title}</h3>
          <p class="project-desc">${desc}</p>
          <div class="tag-row">
            ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
          </div>
          ${internalNote}
          ${linksHtml}
        </article>`;
    }).join('');

    grid.querySelectorAll('.project-card').forEach(el => ScrollReveal.observe(el));
    ScrollReveal.revealInViewport(grid);
  },
};

// ============================================================
// SKILLS RENDERER
// ============================================================
const SkillsRenderer = {
  render(lang) {
    const container = document.getElementById('skills-container');
    if (!container) return;

    container.innerHTML = skills.map((group, i) => {
      const title = i18n[lang][group.groupKey] || group.groupKey;
      return `
        <div class="skill-group" style="transition-delay:${i * 0.07}s">
          <div class="skill-group-title" style="color:${group.color};border-color:${group.color}">${title}</div>
          <div class="skills-pills">
            ${group.pills.map(pill =>
              `<span class="skill-pill" style="--color:${group.color}">${pill}</span>`
            ).join('')}
          </div>
        </div>`;
    }).join('');

    container.querySelectorAll('.skill-group').forEach(el => ScrollReveal.observe(el));
    ScrollReveal.revealInViewport(container);
  },
};

// ============================================================
// HOBBIES RENDERER
// ============================================================
const HobbiesRenderer = {
  render(lang) {
    const container = document.getElementById('hobbies-container');
    if (!container) return;

    container.innerHTML = hobbies.map((h, i) => {
      const label = i18n[lang][h.labelKey] || '';
      const desc  = i18n[lang][h.descKey]  || '';
      return `
        <div class="hobby-card" style="transition-delay:${i * 0.08}s">
          <span class="hobby-emoji" aria-hidden="true">${h.icon}</span>
          <div class="hobby-label">${label}</div>
          <div class="hobby-desc">${desc}</div>
        </div>`;
    }).join('');

    container.querySelectorAll('.hobby-card').forEach(el => ScrollReveal.observe(el));
    ScrollReveal.revealInViewport(container);
  },
};

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  // Modules init
  ThemeModule.init();
  LangModule.init();

  // Render JS sections
  ExperienceRenderer.render(state.lang);
  CoursesRenderer.render(state.lang);
  ProjectRenderer.render(state.lang);
  SkillsRenderer.render(state.lang);
  HobbiesRenderer.render(state.lang);

  // Animations
  ParticlesModule.init();
  TypingModule.init();
  NavModule.init();
  ScrollReveal.init();

  // Button events
  document.getElementById('theme-toggle').addEventListener('click', () => {
    ThemeModule.toggle();
  });

  document.getElementById('lang-toggle').addEventListener('click', () => {
    LangModule.toggle();
  });
});
