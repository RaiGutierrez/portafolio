/**
 * Rainil Gutierrez — Portfolio
 * script.js
 */

document.addEventListener('DOMContentLoaded', () => {
  const STORAGE_KEYS = {
    theme: 'rainil-theme',
    language: 'rainil-language'
  };

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const root = document.documentElement;
  const body = document.body;

  const elements = {
    menuToggle: document.getElementById('menu-toggle'),
    navPanel: document.getElementById('nav-panel'),
    themeToggle: document.getElementById('theme-toggle'),
    langToggle: document.getElementById('lang-toggle'),
    langLabel: document.querySelector('[data-lang-label]'),
    navLinks: document.querySelectorAll('.nav-links a'),
    allAnchorLinks: document.querySelectorAll('a[href^="#"]'),
    tiltCards: document.querySelectorAll(
      '.project-card--tilt, .photo-card, .metric-card, .solution-card, .architecture-card, .service-card, .process-step, .skill'
    ),
    revealItems: document.querySelectorAll(
      '.hero-text, .photo-card, .metric-card, .solution-card, .project-card, .architecture-card, .about-card, .skill, .philosophy-card, .service-card, .process-step, .contact-card'
    ),
    contactForm: document.getElementById('contact-form'),
    formStatus: document.getElementById('form-status')
  };

  const translations = {
    en: {
      navProjects: 'Projects',
      navAbout: 'About',
      navSolutions: 'Solutions',
      navSkills: 'Skills',
      navApproach: 'Approach',
      navContact: 'Contact',
      navHireMe: 'Hire Me',

      heroKicker: 'Full Stack Developer • Business Applications',
      heroTitle: 'Building enterprise-focused digital products with business and product thinking.',
      heroText:
        'I build modern applications focused on enterprise software, SaaS platforms, dashboards, operational systems and internal tools. My goal is to create digital products that feel clear, scalable, production-ready and valuable for real organizations.',
      heroBtnProjects: 'View Projects',
      heroBtnContact: 'Contact',
      heroBadgeOne: 'Business Software',
      heroBadgeTwo: 'Enterprise Dashboards',
      heroBadgeThree: 'Product-Focused UI',
      heroBadgeFour: 'Mendix / Low-Code',

      metricOneLabel: 'Projects Built',
      metricTwoLabel: 'Core Focus',
      metricTwoValue: 'Enterprise Apps',
      metricThreeLabel: 'Primary Stack',
      metricFourLabel: 'Additional Focus',
      metricFourValue: 'Mendix & SaaS UI',

      solutionsKicker: 'Enterprise Solutions',
      solutionsTitle: 'Software solutions for modern companies',
      solutionsIntro:
        'I design and build digital systems that help organizations improve operations, automation and decision-making. My work focuses on practical business software, scalable architecture and professional user experience.',
      solutionOneTitle: 'Business Web Applications',
      solutionOneText:
        'Internal tools, dashboards and operational platforms designed to improve workflows and data visibility inside organizations.',
      solutionTwoTitle: 'SaaS Platforms',
      solutionTwoText:
        'Development of modern SaaS-style interfaces including analytics, management dashboards and scalable product architecture.',
      solutionThreeTitle: 'Industrial Systems',
      solutionThreeText:
        'Software for maintenance management, asset tracking and operational monitoring used in industrial environments.',
      solutionFourTitle: 'Low-Code Platforms',
      solutionFourText:
        'Experience working with enterprise platforms such as Mendix for rapid development of scalable business applications.',

      projectsKicker: 'Selected Work',
      projectsTitle: 'Featured Projects',
      projectsText:
        'A selection of software products designed to feel like real enterprise tools, with product structure, business logic and professional UI presentation.',
      projectStatus: 'Live Project',
      maintixType: 'Industrial Software',
      inventoryType: 'Business Operations',
      saasType: 'SaaS / Analytics',
      maintixText:
        'Industrial maintenance management system designed for machine monitoring, work order execution, preventive maintenance planning and plant operations visibility.',
      inventoryText:
        'Inventory platform for managing stock levels, suppliers, warehouse visibility and operational control with a structure designed to resemble business software.',
      saasText:
        'Executive-style analytics dashboard focused on performance metrics, activity tracking, business monitoring and premium product presentation.',
      viewDemo: 'View Demo',
      viewCode: 'View Code',

      architectureKicker: 'Engineering Focus',
      architectureTitle: 'A product and engineering mindset for real business software',
      architectureText:
        'My work is not centered on isolated visuals alone. I approach projects with product thinking, architecture awareness, business logic clarity and long-term maintainability in mind, aiming to create software that can evolve like a real product.',
      architectureOneTitle: 'Scalable UI Systems',
      architectureOneText:
        'Interfaces designed with consistency, hierarchy and reuse in mind.',
      architectureTwoTitle: 'Business Logic Thinking',
      architectureTwoText:
        'Software structure focused on operational clarity and practical workflows.',
      architectureThreeTitle: 'Product-Oriented UX',
      architectureThreeText:
        'Clear, useful and polished digital experiences for real usage scenarios.',
      architectureFourTitle: 'Enterprise Readiness',
      architectureFourText:
        'Systems and interfaces designed to look credible in professional environments.',

      aboutKicker: 'About Me',
      aboutTitle: 'I design and build software with a product mindset.',
      aboutText:
        'I am a Full Stack Developer focused on creating applications that look and feel like real production software. I enjoy combining interface design, business logic and product structure to build digital experiences that are useful, clear and professional.',
      aboutPointOneTitle: 'Business-oriented software',
      aboutPointOneText:
        'I enjoy building dashboards, operational systems and management tools with a real enterprise feel.',
      aboutPointTwoTitle: 'Clean product presentation',
      aboutPointTwoText:
        'I focus on visual clarity, interface quality and interactions that make software feel polished.',
      aboutPointThreeTitle: 'Scalable thinking',
      aboutPointThreeText:
        'I approach projects as products, thinking about structure, future growth and maintainability.',

      buildKicker: 'What I Build',
      buildTitle: 'Software that feels useful, modern and real.',
      buildTextOne:
        'My portfolio is centered on software categories that companies actually use: maintenance systems, inventory tools, SaaS dashboards and internal business platforms.',
      buildTextTwo:
        'I aim to create projects that communicate more than coding ability. They should demonstrate product thinking, interface design, structure and the ability to turn ideas into software experiences with real professional value.',

      skillsKicker: 'Capabilities',
      skillsTitle: 'Skills & Focus Areas',
      levelAdvanced: 'Advanced',
      levelStrong: 'Strong',
      levelCore: 'Core Focus',
      productThinking: 'Product Thinking',
      businessApps: 'Business Web Apps',
      enterpriseDashboards: 'Enterprise Dashboards',

      philosophyOneTitle: 'Real Product Feel',
      philosophyOneText:
        'I build interfaces that aim to feel like actual software products, not just exercises or static templates.',
      philosophyTwoTitle: 'Clean Structure',
      philosophyTwoText:
        'I care about readable code, organized components and building projects with a structure that can evolve.',
      philosophyThreeTitle: 'User Clarity',
      philosophyThreeText:
        'Good software should be easy to understand visually. I focus on hierarchy, spacing, interactions and usability.',

      servicesKicker: 'Services',
      servicesTitle: 'What I can build for companies',
      serviceOneTitle: 'Custom Web Applications',
      serviceOneText:
        'Development of tailored web applications for internal management, dashboards and operational platforms.',
      serviceTwoTitle: 'SaaS Interfaces',
      serviceTwoText:
        'Creation of modern SaaS-style interfaces focused on usability, performance and scalable product design.',
      serviceThreeTitle: 'Enterprise Dashboards',
      serviceThreeText:
        'Analytics dashboards and monitoring tools for business intelligence and operational visibility.',
      serviceFourTitle: 'Low-Code Solutions',
      serviceFourText:
        'Development using platforms like Mendix to accelerate enterprise application delivery.',

      processKicker: 'Work Process',
      processTitle: 'How I approach software projects',
      processOneTitle: 'Discovery',
      processOneText:
        'Understanding business needs, workflows and software goals before building.',
      processTwoTitle: 'Structure',
      processTwoText:
        'Defining layout, flows, components and product logic for a scalable foundation.',
      processThreeTitle: 'Build',
      processThreeText:
        'Developing interfaces and logic with clarity, maintainability and product quality in mind.',
      processFourTitle: 'Refine',
      processFourText:
        'Improving usability, polish and overall presentation so the result feels production-ready.',

      contactKicker: 'Let’s Connect',
      contactTitle: 'Interested in working together or discussing a project?',
      contactText:
        'I focus on modern business applications, dashboards, internal systems and product-quality software experiences. If you want to collaborate, hire me or connect professionally, send me a message through the form.',
      contactPanelAvailabilityLabel: 'Availability',
      contactPanelAvailabilityValue:
        'Open to freelance, collaborations and business software projects',
      contactLinkedInCta: 'View professional profile',
      contactMiniNote:
        'Best for enterprise software, dashboards, internal tools and custom web solutions.',
      contactFormPrivacy: 'Your message is sent privately through the form.',

      formNameLabel: 'Full Name',
      formEmailLabel: 'Email',
      formCompanyLabel: 'Company',
      formProjectTypeLabel: 'Project Type',
      formProjectTypePlaceholder: 'Select an option',

      formOptionWebApp: 'Business Web Application',
      formOptionSaas: 'SaaS Dashboard',
      formOptionEnterprise: 'Enterprise System',
      formOptionMendix: 'Mendix / Low-Code Solution',
      formOptionWebsite: 'Website / Landing Page',
      formOptionOther: 'Other',

      formBudgetLabel: 'Budget Range',
      formBudgetPlaceholder: 'Select a range',
      formBudgetSmall: 'Under $500',
      formBudgetMedium: '$500 – $1,500',
      formBudgetLarge: '$1,500 – $5,000',
      formBudgetEnterprise: '$5,000+',

      formTimelineLabel: 'Timeline',
      formMessageLabel: 'Project Details',
      formSubmit: 'Send Inquiry',

      formStatusSending: 'Sending your message...',
      formStatusSuccess: 'Message sent successfully. I will get back to you soon.',
      formStatusError: 'Something went wrong. Please try again in a moment.',

      footerText: '© 2026 Rainil Gutierrez — Full Stack Developer focused on Business Applications'
    },

    es: {
      navProjects: 'Proyectos',
      navAbout: 'Sobre mí',
      navSolutions: 'Soluciones',
      navSkills: 'Habilidades',
      navApproach: 'Enfoque',
      navContact: 'Contacto',
      navHireMe: 'Contrátame',

      heroKicker: 'Desarrollador Full Stack • Aplicaciones de Negocio',
      heroTitle: 'Construyendo productos digitales con enfoque empresarial, técnico y de producto.',
      heroText:
        'Desarrollo aplicaciones modernas enfocadas en software empresarial, plataformas SaaS, dashboards, sistemas operativos y herramientas internas. Mi objetivo es crear productos digitales que se sientan claros, escalables, listos para producción y valiosos para organizaciones reales.',
      heroBtnProjects: 'Ver proyectos',
      heroBtnContact: 'Contacto',
      heroBadgeOne: 'Software Empresarial',
      heroBadgeTwo: 'Dashboards Empresariales',
      heroBadgeThree: 'UI Enfocada en Producto',
      heroBadgeFour: 'Mendix / Low-Code',

      metricOneLabel: 'Proyectos construidos',
      metricTwoLabel: 'Enfoque principal',
      metricTwoValue: 'Apps empresariales',
      metricThreeLabel: 'Stack principal',
      metricFourLabel: 'Enfoque adicional',
      metricFourValue: 'Mendix y UI SaaS',

      solutionsKicker: 'Soluciones Empresariales',
      solutionsTitle: 'Soluciones de software para compañías modernas',
      solutionsIntro:
        'Diseño y construyo sistemas digitales que ayudan a las organizaciones a mejorar operaciones, automatización y toma de decisiones. Mi trabajo se enfoca en software empresarial práctico, arquitectura escalable y experiencia de usuario profesional.',
      solutionOneTitle: 'Aplicaciones Web de Negocio',
      solutionOneText:
        'Herramientas internas, dashboards y plataformas operativas diseñadas para mejorar flujos de trabajo y visibilidad de datos dentro de las organizaciones.',
      solutionTwoTitle: 'Plataformas SaaS',
      solutionTwoText:
        'Desarrollo de interfaces modernas tipo SaaS, incluyendo analítica, dashboards de gestión y arquitectura de producto escalable.',
      solutionThreeTitle: 'Sistemas Industriales',
      solutionThreeText:
        'Software para gestión de mantenimiento, trazabilidad de activos y monitoreo operativo usado en entornos industriales.',
      solutionFourTitle: 'Plataformas Low-Code',
      solutionFourText:
        'Experiencia trabajando con plataformas empresariales como Mendix para acelerar el desarrollo de aplicaciones escalables.',

      projectsKicker: 'Trabajo seleccionado',
      projectsTitle: 'Proyectos destacados',
      projectsText:
        'Una selección de productos de software diseñados para sentirse como herramientas empresariales reales, con estructura de producto, lógica de negocio y presentación profesional.',
      projectStatus: 'Proyecto en vivo',
      maintixType: 'Software Industrial',
      inventoryType: 'Operaciones de Negocio',
      saasType: 'SaaS / Analítica',
      maintixText:
        'Sistema de gestión de mantenimiento industrial diseñado para monitoreo de máquinas, ejecución de órdenes de trabajo, planificación preventiva y visibilidad operativa de planta.',
      inventoryText:
        'Plataforma de inventario para gestionar niveles de stock, proveedores, visibilidad de almacén y control operativo con estructura de software empresarial.',
      saasText:
        'Dashboard analítico estilo ejecutivo enfocado en métricas de rendimiento, seguimiento de actividad, monitoreo de negocio y presentación premium de producto.',
      viewDemo: 'Ver demo',
      viewCode: 'Ver código',

      architectureKicker: 'Enfoque de Ingeniería',
      architectureTitle: 'Mentalidad de producto e ingeniería para software empresarial real',
      architectureText:
        'Mi trabajo no se centra solo en lo visual. Abordo los proyectos con pensamiento de producto, visión de arquitectura, claridad en la lógica de negocio y mantenibilidad a largo plazo, buscando crear software que pueda evolucionar como un producto real.',
      architectureOneTitle: 'Sistemas UI Escalables',
      architectureOneText:
        'Interfaces diseñadas con consistencia, jerarquía y reutilización en mente.',
      architectureTwoTitle: 'Pensamiento de Lógica de Negocio',
      architectureTwoText:
        'Estructura de software enfocada en claridad operativa y flujos de trabajo prácticos.',
      architectureThreeTitle: 'UX Orientada a Producto',
      architectureThreeText:
        'Experiencias digitales claras, útiles y pulidas para escenarios reales de uso.',
      architectureFourTitle: 'Preparación Empresarial',
      architectureFourText:
        'Sistemas e interfaces diseñados para verse creíbles en entornos profesionales.',

      aboutKicker: 'Sobre mí',
      aboutTitle: 'Diseño y construyo software con mentalidad de producto.',
      aboutText:
        'Soy un Desarrollador Full Stack enfocado en crear aplicaciones que se vean y se sientan como software real de producción. Disfruto combinar diseño de interfaz, lógica de negocio y estructura de producto para construir experiencias digitales útiles, claras y profesionales.',
      aboutPointOneTitle: 'Software orientado al negocio',
      aboutPointOneText:
        'Me gusta construir dashboards, sistemas operativos y herramientas de gestión con una sensación empresarial real.',
      aboutPointTwoTitle: 'Presentación limpia de producto',
      aboutPointTwoText:
        'Me enfoco en claridad visual, calidad de interfaz e interacciones que hagan que el software se sienta pulido.',
      aboutPointThreeTitle: 'Pensamiento escalable',
      aboutPointThreeText:
        'Abordo los proyectos como productos, pensando en estructura, crecimiento futuro y mantenibilidad.',

      buildKicker: 'Lo que construyo',
      buildTitle: 'Software que se siente útil, moderno y real.',
      buildTextOne:
        'Mi portafolio está centrado en categorías de software que las empresas realmente usan: sistemas de mantenimiento, herramientas de inventario, dashboards SaaS y plataformas internas de negocio.',
      buildTextTwo:
        'Busco crear proyectos que comuniquen más que habilidad para programar. Deben demostrar pensamiento de producto, diseño de interfaz, estructura y capacidad para convertir ideas en experiencias de software con valor profesional real.',

      skillsKicker: 'Capacidades',
      skillsTitle: 'Habilidades y áreas de enfoque',
      levelAdvanced: 'Avanzado',
      levelStrong: 'Fuerte',
      levelCore: 'Enfoque principal',
      productThinking: 'Pensamiento de producto',
      businessApps: 'Apps web de negocio',
      enterpriseDashboards: 'Dashboards empresariales',

      philosophyOneTitle: 'Sensación de producto real',
      philosophyOneText:
        'Construyo interfaces que buscan sentirse como productos de software reales, no solo ejercicios o plantillas estáticas.',
      philosophyTwoTitle: 'Estructura limpia',
      philosophyTwoText:
        'Me importa el código legible, la organización y construir proyectos con una estructura que pueda evolucionar.',
      philosophyThreeTitle: 'Claridad para el usuario',
      philosophyThreeText:
        'Un buen software debe ser fácil de entender visualmente. Me enfoco en jerarquía, espaciado, interacción y usabilidad.',

      servicesKicker: 'Servicios',
      servicesTitle: 'Lo que puedo construir para empresas',
      serviceOneTitle: 'Aplicaciones Web a Medida',
      serviceOneText:
        'Desarrollo de aplicaciones web personalizadas para gestión interna, dashboards y plataformas operativas.',
      serviceTwoTitle: 'Interfaces SaaS',
      serviceTwoText:
        'Creación de interfaces modernas tipo SaaS enfocadas en usabilidad, rendimiento y diseño de producto escalable.',
      serviceThreeTitle: 'Dashboards Empresariales',
      serviceThreeText:
        'Dashboards analíticos y herramientas de monitoreo para inteligencia de negocio y visibilidad operativa.',
      serviceFourTitle: 'Soluciones Low-Code',
      serviceFourText:
        'Desarrollo usando plataformas como Mendix para acelerar la entrega de aplicaciones empresariales.',

      processKicker: 'Proceso de Trabajo',
      processTitle: 'Cómo abordo proyectos de software',
      processOneTitle: 'Descubrimiento',
      processOneText:
        'Entender necesidades del negocio, flujos de trabajo y objetivos del software antes de construir.',
      processTwoTitle: 'Estructura',
      processTwoText:
        'Definir layout, flujos, componentes y lógica de producto para una base escalable.',
      processThreeTitle: 'Construcción',
      processThreeText:
        'Desarrollar interfaces y lógica con claridad, mantenibilidad y calidad de producto en mente.',
      processFourTitle: 'Refinamiento',
      processFourText:
        'Mejorar usabilidad, pulido visual y presentación general para que el resultado se sienta listo para producción.',

      contactKicker: 'Conectemos',
      contactTitle: '¿Te interesa trabajar conmigo o hablar de un proyecto?',
      contactText:
        'Estoy enfocado en aplicaciones empresariales modernas, dashboards, sistemas internos y experiencias de software con calidad de producto. Si quieres colaborar, contratarme o conectar profesionalmente, puedes escribirme mediante el formulario.',
      contactPanelAvailabilityLabel: 'Disponibilidad',
      contactPanelAvailabilityValue:
        'Disponible para freelance, colaboraciones y proyectos de software empresarial',
      contactLinkedInCta: 'Ver perfil profesional',
      contactMiniNote:
        'Ideal para software empresarial, dashboards, herramientas internas y soluciones web a medida.',
      contactFormPrivacy: 'Tu mensaje se envía de forma privada mediante el formulario.',

      formNameLabel: 'Nombre completo',
      formEmailLabel: 'Correo electrónico',
      formCompanyLabel: 'Empresa',
      formProjectTypeLabel: 'Tipo de proyecto',
      formProjectTypePlaceholder: 'Selecciona una opción',

      formOptionWebApp: 'Aplicación web de negocio',
      formOptionSaas: 'Dashboard SaaS',
      formOptionEnterprise: 'Sistema empresarial',
      formOptionMendix: 'Solución Mendix / Low-Code',
      formOptionWebsite: 'Sitio web / Landing page',
      formOptionOther: 'Otro',

      formBudgetLabel: 'Rango de presupuesto',
      formBudgetPlaceholder: 'Selecciona un rango',
      formBudgetSmall: 'Menos de $500',
      formBudgetMedium: '$500 – $1,500',
      formBudgetLarge: '$1,500 – $5,000',
      formBudgetEnterprise: '$5,000+',

      formTimelineLabel: 'Plazo',
      formMessageLabel: 'Detalles del proyecto',
      formSubmit: 'Enviar consulta',

      formStatusSending: 'Enviando tu mensaje...',
      formStatusSuccess: 'Mensaje enviado correctamente. Te responderé pronto.',
      formStatusError: 'Ocurrió un problema. Inténtalo nuevamente en un momento.',

      footerText: '© 2026 Rainil Gutierrez — Desarrollador Full Stack enfocado en Aplicaciones de Negocio'
    }
  };

  function getSavedTheme() {
    return localStorage.getItem(STORAGE_KEYS.theme);
  }

  function getSavedLanguage() {
    return localStorage.getItem(STORAGE_KEYS.language);
  }

  function getCurrentLanguage() {
    return root.getAttribute('data-lang') || getSavedLanguage() || 'en';
  }

  function t(key) {
    const language = getCurrentLanguage();
    return translations[language]?.[key] || translations.en[key] || key;
  }

  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEYS.theme, theme);
  }

  function toggleTheme() {
    const currentTheme = root.getAttribute('data-theme') || 'dark';
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  }

  function setLanguage(language) {
    const dictionary = translations[language];
    if (!dictionary) return;

    root.setAttribute('data-lang', language);
    localStorage.setItem(STORAGE_KEYS.language, language);

    document.documentElement.lang = language === 'es' ? 'es' : 'en';
    document.title =
      language === 'es'
        ? 'Rainil Gutierrez | Desarrollador Full Stack enfocado en Aplicaciones de Negocio'
        : 'Rainil Gutierrez | Full Stack Developer focused on Business Applications';

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.dataset.i18n;
      if (dictionary[key]) {
        element.textContent = dictionary[key];
      }
    });

    if (elements.langLabel) {
      elements.langLabel.textContent = language === 'en' ? 'ES' : 'EN';
    }
  }

  function toggleLanguage() {
    const currentLanguage = root.getAttribute('data-lang') || 'en';
    setLanguage(currentLanguage === 'en' ? 'es' : 'en');
  }

  function openMobileMenu() {
    if (!elements.navPanel || !elements.menuToggle) return;
    elements.navPanel.classList.add('is-open');
    elements.menuToggle.classList.add('is-open');
    elements.menuToggle.setAttribute('aria-expanded', 'true');
    body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (!elements.navPanel || !elements.menuToggle) return;
    elements.navPanel.classList.remove('is-open');
    elements.menuToggle.classList.remove('is-open');
    elements.menuToggle.setAttribute('aria-expanded', 'false');
    body.style.overflow = '';
  }

  function toggleMobileMenu() {
    if (!elements.navPanel) return;
    elements.navPanel.classList.contains('is-open') ? closeMobileMenu() : openMobileMenu();
  }

  function initRevealOnScroll() {
    if (!elements.revealItems.length) return;

    elements.revealItems.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(26px)';
      item.style.transition = prefersReducedMotion
        ? 'opacity 0.25s ease'
        : `opacity 0.65s ease ${index * 0.03}s, transform 0.65s ease ${index * 0.03}s`;
    });

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.12 }
    );

    elements.revealItems.forEach((item) => observer.observe(item));
  }

  function initParallaxGlow() {
    if (prefersReducedMotion) return;

    const hero = document.querySelector('.hero');
    const orbOne = document.querySelector('.glow-orb.one');
    const orbTwo = document.querySelector('.glow-orb.two');
    const orbThree = document.querySelector('.glow-orb.three');

    if (!hero || !orbOne || !orbTwo || !orbThree) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const animate = () => {
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;

      orbOne.style.transform = `translate(${currentX * 0.018}px, ${currentY * 0.018}px)`;
      orbTwo.style.transform = `translate(${currentX * -0.014}px, ${currentY * -0.014}px)`;
      orbThree.style.transform = `translate(${currentX * 0.01}px, ${currentY * -0.01}px)`;

      requestAnimationFrame(animate);
    };

    hero.addEventListener('mousemove', (event) => {
      const rect = hero.getBoundingClientRect();
      mouseX = event.clientX - rect.left - rect.width / 2;
      mouseY = event.clientY - rect.top - rect.height / 2;
    });

    hero.addEventListener('mouseleave', () => {
      mouseX = 0;
      mouseY = 0;
    });

    animate();
  }

  function getBaseTransform(card) {
    if (card.classList.contains('photo-card')) {
      return window.innerWidth > 1160 ? 'rotateY(-13deg) rotateX(7deg) translateZ(0)' : 'none';
    }

    if (card.classList.contains('project-card')) {
      return 'translateZ(0)';
    }

    return '';
  }

  function getTiltStrength(card) {
    if (card.classList.contains('photo-card')) {
      return { rotateX: 8, rotateY: 10, lift: 10, scale: 1.01 };
    }

    if (card.classList.contains('project-card')) {
      return { rotateX: 7, rotateY: 8, lift: 10, scale: 1.01 };
    }

    if (card.classList.contains('metric-card')) {
      return { rotateX: 5, rotateY: 6, lift: 8, scale: 1.008 };
    }

    return { rotateX: 4, rotateY: 5, lift: 7, scale: 1.006 };
  }

  function buildTransform(card, rotateX, rotateY, lift, scale) {
    if (card.classList.contains('photo-card')) {
      const baseY = window.innerWidth > 1160 ? -13 : 0;
      const baseX = window.innerWidth > 1160 ? 7 : 0;
      return `perspective(1800px) rotateY(${baseY + rotateY}deg) rotateX(${baseX + rotateX}deg) translateY(${-lift}px) scale(${scale})`;
    }

    if (card.classList.contains('project-card')) {
      return `perspective(1800px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateY(${-lift}px) scale(${scale})`;
    }

    return `perspective(1400px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateY(${-lift}px) scale(${scale})`;
  }

  function resetTilt(card) {
    card.style.transform = getBaseTransform(card);
    card.style.setProperty('--pointer-x', '50%');
    card.style.setProperty('--pointer-y', '50%');
  }

  function initTiltCards() {
    if (prefersReducedMotion || !elements.tiltCards.length) return;

    elements.tiltCards.forEach((card) => {
      resetTilt(card);

      card.addEventListener('mousemove', (event) => {
        if (window.innerWidth <= 760) return;

        const rect = card.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width;
        const py = (event.clientY - rect.top) / rect.height;

        const strength = getTiltStrength(card);
        const rotateY = (px - 0.5) * strength.rotateY;
        const rotateX = (0.5 - py) * strength.rotateX;

        card.style.transform = buildTransform(
          card,
          rotateX,
          rotateY,
          strength.lift,
          strength.scale
        );

        card.style.setProperty('--pointer-x', `${px * 100}%`);
        card.style.setProperty('--pointer-y', `${py * 100}%`);
      });

      card.addEventListener('mouseleave', () => {
        resetTilt(card);
      });
    });

    window.addEventListener('resize', () => {
      elements.tiltCards.forEach((card) => resetTilt(card));
    });
  }

  function initNavbarActiveState() {
    const sections = document.querySelectorAll('section[id]');
    if (!sections.length || !elements.navLinks.length) return;

    const setActive = () => {
      let currentSection = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 140;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id');
        }
      });

      elements.navLinks.forEach((link) => {
        link.classList.remove('is-active');
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('is-active');
        }
      });
    };

    setActive();
    window.addEventListener('scroll', setActive, { passive: true });
  }

  function initSmoothAnchorOffset() {
    if (!elements.allAnchorLinks.length) return;

    elements.allAnchorLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        const targetId = link.getAttribute('href');
        if (!targetId || targetId === '#') return;

        const target = document.querySelector(targetId);
        if (!target) return;

        event.preventDefault();

        const navbar = document.querySelector('.navbar');
        const offset = navbar ? navbar.offsetHeight + 18 : 90;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
          top,
          behavior: prefersReducedMotion ? 'auto' : 'smooth'
        });

        if (window.innerWidth <= 920) {
          closeMobileMenu();
        }
      });
    });
  }

  function initHoverPulse() {
    const interactiveLinks = document.querySelectorAll(
      '.project-link, .btn-primary, .btn-secondary, .contact-link, .nav-action-btn, .nav-cta'
    );

    interactiveLinks.forEach((link) => {
      link.addEventListener('mouseenter', () => {
        if (prefersReducedMotion) return;
        link.style.transform = 'translateY(-2px) scale(1.01)';
      });

      link.addEventListener('mouseleave', () => {
        link.style.transform = '';
      });
    });
  }

  function initProjectCardClickPriority() {
    const actionLinks = document.querySelectorAll('.project-actions a');

    actionLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.stopPropagation();
      });
    });
  }

  function initMenuEvents() {
    if (elements.menuToggle) {
      elements.menuToggle.addEventListener('click', toggleMobileMenu);
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth > 920) {
        closeMobileMenu();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeMobileMenu();
      }
    });

    document.addEventListener('click', (event) => {
      if (
        window.innerWidth <= 920 &&
        elements.navPanel &&
        elements.menuToggle &&
        elements.navPanel.classList.contains('is-open') &&
        !elements.navPanel.contains(event.target) &&
        !elements.menuToggle.contains(event.target)
      ) {
        closeMobileMenu();
      }
    });
  }

  function initPreferenceControls() {
    const initialTheme = getSavedTheme() || getSystemTheme();
    const initialLanguage = getSavedLanguage() || 'en';

    setTheme(initialTheme);
    setLanguage(initialLanguage);

    if (elements.themeToggle) {
      elements.themeToggle.addEventListener('click', toggleTheme);
    }

    if (elements.langToggle) {
      elements.langToggle.addEventListener('click', toggleLanguage);
    }
  }

  function setFormStatus(messageKey, state = '') {
    if (!elements.formStatus) return;

    elements.formStatus.textContent = t(messageKey);
    elements.formStatus.dataset.state = state;
  }

  function initContactForm() {
    if (!elements.contactForm) return;

    const form = elements.contactForm;
    const submitButton = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const action = form.getAttribute('action');
      if (!action || action.includes('TU_FORM_ID')) {
        setFormStatus('formStatusError', 'error');
        console.warn('Debes reemplazar TU_FORM_ID por tu endpoint real de Formspree.');
        return;
      }

      const honeypot = form.querySelector('input[name="_gotcha"]');
      if (honeypot && honeypot.value.trim() !== '') {
        return;
      }

      const formData = new FormData(form);

      try {
        if (submitButton) {
          submitButton.disabled = true;
        }

        setFormStatus('formStatusSending', 'sending');

        const response = await fetch(action, {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Form submission failed');
        }

        form.reset();
        setFormStatus('formStatusSuccess', 'success');
      } catch (error) {
        console.error(error);
        setFormStatus('formStatusError', 'error');
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
        }
      }
    });
  }

  initPreferenceControls();
  initMenuEvents();
  initRevealOnScroll();
  initParallaxGlow();
  initTiltCards();
  initNavbarActiveState();
  initSmoothAnchorOffset();
  initHoverPulse();
  initProjectCardClickPriority();
  initContactForm();
});