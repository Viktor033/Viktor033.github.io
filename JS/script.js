/*===================== Traducciones ===================*/
const translations = {
    es: {
        nav: { home: "Inicio", about: "Sobre Mí", tech: "Tecnologías", projects: "Proyectos", contact: "Contacto" },
        hero: { greeting: "Hola!! mi nombre es", role: "Soy", description: "Java, Spring Boot, Angular, MySQL, Groq, Google Calendar API, IA Generativa (Agentes AI), Git." },
        about: { title: "Sobre", subtitle: "Desarrollador FullStack & Especialista en Soluciones con IA", text: "Soy Víctor Duarte, desarrollador FullStack de Argentina especializado en construir aplicaciones web escalables, arquitecturas <strong>SaaS multi-tenant</strong> y <strong>Agentes de IA conversacionales</strong> que automatizan procesos reales de negocio.<br><br>Desarrollo soluciones de punta a punta con <strong>Java, Spring Boot, Angular, React y Node.js</strong>, integrando LLMs (<strong>Gemini API, Groq, Function Calling</strong>), bots de <strong>WhatsApp</strong> y pagos en línea (<strong>Stripe, MercadoPago</strong>). Convivir con Esclerosis Múltiple forjó en mí una resiliencia, disciplina y capacidad de adaptación excepcionales: cualidades que aplico en cada línea de código para entregar software sólido, eficiente y orientado a resultados.<br><br>Estoy listo para sumar valor inmediato en equipos de desarrollo o liderar la arquitectura de tu próximo producto digital.", badge1: "+8 Proyectos Reales & SaaS", badge2: "FullStack: Java · Spring Boot · Angular · React", badge3: "IA Aplicada: Agentes · LLMs · WhatsApp Bots", cv: "Descargar CV" },
        tech: { 
            title: "Tecnologías que manejo",
            html: "Estructura web semántica y SEO (Ej: tags &lt;main&gt;, &lt;article&gt;)",
            css: "Diseño responsivo y animaciones modernas (Ej: Flexbox, Grid, Keyframes)",
            js: "Interactividad dinámica y APIS (Ej: Event listeners, Fetch API)",
            angular: "Framework para SPAs empresariales y escalables",
            ts: "Tipado estático para código robusto y mantenible",
            react: "Interfaces de usuario reactivas y componentes modernos",
            tailwind: "Estilizado moderno utility-first y diseño adaptable",
            java: "Lógica de servidor y robustez (Ej: POO, Colecciones, Streams)",
            springboot: "Microservicios y apps escalables (Ej: REST APIs, Security, JPA)",
            node: "Backend asíncrono, APIs REST y bots en tiempo real",
            mysql: "Bases de datos eficientes y seguras (Ej: Queries SQL, Relaciones, Joins)",
            sql: "Persistencia relacional multi-tenant y bases embebidas",
            security: "Autenticación stateless, control de roles y protección de APIs",
            ai: "Agentes Inteligentes, Gemini API, Groq, Spring AI y Function Calling",
            whatsapp: "Automatización conversacional (Baileys) y Google Calendar API",
            payments: "Integración de pasarelas de pago, Checkout y Webhooks",
            docker: "Contenedorización y despliegue en Easypanel y Netlify",
            git: "Control de versiones, flujos de ramas y colaboración"
        },
        projects: {
            shifty: {
                title: "Shifty SaaS - Agenda Multi-Consultorio",
                desc: "Plataforma SaaS multi-tenant para gestión de turnos con Bot de WhatsApp y pagos con Stripe.",
                fullDesc: "Plataforma web enterprise nivel SaaS Multi-Consultorio (multi-tenant) para la gestión integral de turnos, agendas clínicas interactivas, profesionales, servicios, pacientes y facturación. Incluye Bot conversacional de WhatsApp para agendar/cancelar turnos, recordatorios automáticos y pasarela de pagos con Stripe Checkout.",
                tech: ["Java 17", "Spring Boot 3", "React", "TypeScript", "MySQL", "Stripe API", "JWT"],
                features: ["Arquitectura Multi-Tenant con Spring AOP y Hibernate Filters", "Bot conversacional de WhatsApp para reserva y cancelación", "Pasarela de pagos integrada con Stripe Checkout y Webhooks", "Agenda clínica interactiva y 5 temas dinámicos Glassmorphism"]
            },
            agenteInmo: {
                title: "Agente IA Inmobiliario",
                desc: "Agente conversacional en WhatsApp con IA para calificación de leads, búsqueda de propiedades y agenda de visitas.",
                fullDesc: "Agente inteligente para el sector inmobiliario impulsado por Google Gemini API con Function Calling. Califica leads automáticamente, busca propiedades reales en la base de datos sin alucinar, coordina visitas y deriva a asesores humanos, integrando un simulador WhatsApp y panel de control comercial.",
                tech: ["Node.js", "Express", "Google Gemini API", "Baileys (WhatsApp)", "SQLite", "JavaScript"],
                features: ["Búsqueda estricta en base de datos mediante Function Calling", "Calificación automática de leads y agendamiento de visitas", "Integración con WhatsApp vía Baileys y simulador interactivo", "Panel comercial CRM para seguimiento de leads, propiedades y derivaciones"]
            },
            ecommerce: { 
                title: "E-commerce Viandas", 
                desc: "Plataforma completa de venta de alimentos.",
                fullDesc: "Sistema robusto para la venta de viandas con gestión de inventario y pedidos en tiempo real.",
                tech: ["Java", "Spring Boot", "MySQL", "JWT", "Thymeleaf"],
                features: ["Gestión de usuarios con roles", "Carrito de compras dinámico", "Panel administrativo completo", "Seguridad con JWT"]
            },
            dental: { 
                title: "Gestión Odontológica", 
                desc: "Sistema integral para clínicas dentales.",
                fullDesc: "Aplicación moderna para la gestión de turnos, historias clínicas y odontogramas interactivos desarrollada con una arquitectura desacoplada.",
                tech: ["React", "Spring Boot", "MySQL", "REST API", "Bootstrap"],
                features: ["Odontograma dinámico en React", "Gestión de historias clínicas", "Agenda de turnos inteligente", "Seguridad y roles de usuario"]
            },
            web: { 
                title: "Desarrollo Web", 
                desc: "Creación de un portfolio personal y servicios.",
                fullDesc: "Diseño y desarrollo de sitios web modernos y optimizados.",
                tech: ["HTML5", "CSS3", "JavaScript", "ScrollReveal", "Particles.js"],
                features: ["Diseño responsivo", "Animaciones avanzadas", "Optimización SEO", "Soporte multi-idioma"]
            },
            design: { 
                title: "Diseño Gráfico", 
                desc: "Creación de folleto publicitario de turismo.",
                fullDesc: "Diseño visual impactante para marcas y servicios regionales.",
                tech: ["Photoshop", "Illustrator", "Canva"],
                features: ["Composición visual", "Teoría del color", "Diseño para impresión", "Identidad de marca"]
            },
            desktop: { 
                title: "Aplicaciones de Escritorio", 
                desc: "Aplicaciones con Java, Swing, MySQL.",
                fullDesc: "Software de gestión local para diversos rubros comerciales.",
                tech: ["Java", "Swing", "MySQL", "JDBC"],
                features: ["Instaladores locales", "Base de datos persistente", "Interfaces amigables", "Control de stock"]
            },
            landing: { 
                title: "Landing Page", 
                desc: "Página para consultorio Kinesiológico.",
                fullDesc: "Página de aterrizaje optimizada para conversión de clientes locales.",
                tech: ["HTML5", "CSS3", "JavaScript", "Netlify"],
                features: ["Formulario de contacto", "Diseño Mobile-First", "Integración con WhatsApp", "Carga rápida"]
            },
            viewCode: "Ver Código",
            viewSite: "Ver Sitio",
            viewDetails: "Detalles"
        },
        contact: { title: "¡Contáctame!", name: "Nombre completo", email: "E-mail", phone: "Número de Teléfono", subject: "Asunto del Email", message: "Mensaje", send: "Enviar" },
        modal: { 
            title: "¡Mensaje Enviado!", 
            message: "Gracias por contactarme. Te responderé a la brevedad.", 
            close: "Cerrar",
            features: "Funcionalidades Clave",
            techStack: "Stack Tecnológico"
        },
        footer: { 
            text: "Copyright &copy; 2024 by VK_Dev_Web | All Rights Reserved.",
            role: "FullStack Developer & AI Specialist",
            links: "Enlaces Rápidos",
            contact: "Contacto"
        },
        typed: ['Desarrollador Web', 'Community Manager', 'Diseñador Gráfico']
    },
    en: {
        nav: { home: "Home", about: "About Me", tech: "Tech Stack", projects: "Projects", contact: "Contact" },
        hero: { greeting: "Hello!! my name is", role: "I am", description: "Java, Spring Boot, Angular, MySQL, Groq, Google Calendar API, Generative AI (AI Agents), Git." },
        about: { title: "About", subtitle: "FullStack Developer & AI Solutions Specialist", text: "I'm Víctor Duarte, a FullStack Developer from Argentina specializing in building scalable web applications, <strong>multi-tenant SaaS architectures</strong>, and <strong>conversational AI Agents</strong> that automate real business processes.<br><br>I build end-to-end solutions with <strong>Java, Spring Boot, Angular, React, and Node.js</strong>, integrating LLMs (<strong>Gemini API, Groq, Function Calling</strong>), <strong>WhatsApp</strong> bots, and online payments (<strong>Stripe, MercadoPago</strong>). Living with Multiple Sclerosis has forged exceptional resilience, discipline, and adaptability in me—qualities I apply to every line of code to deliver robust, efficient, and results-driven software.<br><br>I am ready to add immediate value to engineering teams or lead the architecture of your next digital product.", badge1: "+8 Real Projects & SaaS", badge2: "FullStack: Java · Spring Boot · Angular · React", badge3: "Applied AI: Agents · LLMs · WhatsApp Bots", cv: "Download CV" },
        tech: { 
            title: "Technologies I use",
            html: "Semantic structure and SEO (Eg: &lt;main&gt;, &lt;article&gt; tags)",
            css: "Responsive design and animations (Eg: Flexbox, Grid, Keyframes)",
            js: "Dynamic interactivity and APIs (Eg: Event listeners, Fetch API)",
            angular: "Framework for scalable enterprise SPAs",
            ts: "Static typing for robust and maintainable code",
            react: "Reactive user interfaces and modern components",
            tailwind: "Modern utility-first styling and adaptive design",
            java: "Server logic and robustness (Eg: OOP, Collections, Streams)",
            springboot: "Microservices and scalable apps (Eg: REST APIs, Security, JPA)",
            node: "Asynchronous backend, REST APIs, and real-time bots",
            mysql: "Efficient and secure databases (Eg: SQL Queries, Relations, Joins)",
            sql: "Multi-tenant relational persistence and embedded databases",
            security: "Stateless authentication, role-based access, and API protection",
            ai: "Intelligent Agents, Gemini API, Groq, Spring AI, and Function Calling",
            whatsapp: "Conversational automation (Baileys) and Google Calendar API",
            payments: "Payment gateway integration, Checkout, and Webhooks",
            docker: "Containerization and cloud deployment on Easypanel and Netlify",
            git: "Version control, branching workflows, and collaboration"
        },
        projects: {
            shifty: {
                title: "Shifty SaaS - Multi-Clinic Scheduler",
                desc: "Multi-tenant SaaS appointment management platform with WhatsApp Bot and Stripe payments.",
                fullDesc: "Enterprise-grade multi-clinic (multi-tenant) SaaS web platform for comprehensive management of appointments, interactive clinical schedules, professionals, services, patients, and billing. Includes a conversational WhatsApp Bot to book/cancel appointments, automated reminders, and Stripe Checkout payment integration.",
                tech: ["Java 17", "Spring Boot 3", "React", "TypeScript", "MySQL", "Stripe API", "JWT"],
                features: ["Multi-Tenant architecture with Spring AOP and Hibernate Filters", "Conversational WhatsApp Bot for booking and cancellation", "Integrated payment gateway with Stripe Checkout and Webhooks", "Interactive clinical schedule and 5 dynamic Glassmorphism themes"]
            },
            agenteInmo: {
                title: "Real Estate AI Agent",
                desc: "Conversational WhatsApp AI agent for lead qualification, property search, and visit scheduling.",
                fullDesc: "Intelligent agent for the real estate sector powered by Google Gemini API with Function Calling. Automatically qualifies leads, searches real properties in the database without hallucinating, coordinates visits, and escalates to human agents, integrating a WhatsApp simulator and commercial CRM dashboard.",
                tech: ["Node.js", "Express", "Google Gemini API", "Baileys (WhatsApp)", "SQLite", "JavaScript"],
                features: ["Strict database search via Function Calling", "Automated lead qualification and visit scheduling", "WhatsApp integration via Baileys and interactive simulator", "Commercial CRM panel for tracking leads, properties, and handoffs"]
            },
            ecommerce: { 
                title: "Food E-commerce", 
                desc: "Complete food sales platform.",
                fullDesc: "Robust system for food delivery sales with real-time inventory and order management.",
                tech: ["Java", "Spring Boot", "MySQL", "JWT", "Thymeleaf"],
                features: ["Role-based user management", "Dynamic shopping cart", "Full admin panel", "JWT Security"]
            },
            dental: { 
                title: "Dental Management", 
                desc: "Comprehensive system for dental clinics.",
                fullDesc: "Modern application for managing appointments, medical records, and interactive odontograms developed with a decoupled architecture.",
                tech: ["React", "Spring Boot", "MySQL", "REST API", "Bootstrap"],
                features: ["Dynamic React odontogram", "Medical history management", "Smart appointment scheduling", "Security and user roles"]
            },
            web: { 
                title: "Web Development", 
                desc: "Creation of a personal portfolio and services.",
                fullDesc: "Design and development of modern, optimized websites.",
                tech: ["HTML5", "CSS3", "JavaScript", "ScrollReveal", "Particles.js"],
                features: ["Responsive design", "Advanced animations", "SEO Optimization", "Multi-language support"]
            },
            design: { 
                title: "Graphic Design", 
                desc: "Regional tourism advertising brochure.",
                fullDesc: "Impactful visual design for regional brands and services.",
                tech: ["Photoshop", "Illustrator", "Canva"],
                features: ["Visual composition", "Color theory", "Print design", "Brand identity"]
            },
            desktop: { 
                title: "Desktop Applications", 
                desc: "Applications with Java, Swing, MySQL.",
                fullDesc: "Local management software for various commercial sectors.",
                tech: ["Java", "Swing", "MySQL", "JDBC"],
                features: ["Local installers", "Persistent database", "User-friendly interfaces", "Inventory control"]
            },
            landing: { 
                title: "Landing Page", 
                desc: "Kinesiology office landing page.",
                fullDesc: "Landing page optimized for local customer conversion.",
                tech: ["HTML5", "CSS3", "JavaScript", "Netlify"],
                features: ["Contact form", "Mobile-First design", "WhatsApp integration", "Fast loading"]
            },
            viewCode: "View Code",
            viewSite: "Live Demo",
            viewDetails: "Details"
        },
        contact: { title: "Contact Me!", name: "Full Name", email: "E-mail", phone: "Phone Number", subject: "Email Subject", message: "Message", send: "Send" },
        modal: { 
            title: "Message Sent!", 
            message: "Thanks for contacting me. I will reply shortly.", 
            close: "Close",
            features: "Key Features",
            techStack: "Tech Stack"
        },
        footer: { 
            text: "Copyright &copy; 2024 by VK_Dev_Web | All Rights Reserved.",
            role: "FullStack Developer & AI Specialist",
            links: "Quick Links",
            contact: "Contact"
        },
        typed: ['Web Developer', 'Community Manager', 'Graphic Designer']
    },
    de: {
        nav: { home: "Start", about: "Über Mich", tech: "Technologien", projects: "Projekte", contact: "Kontakt" },
        hero: { greeting: "Hallo!! mein Name ist", role: "Ich bin", description: "Java, Spring Boot, Angular, MySQL, Groq, Google Calendar API, Generative KI (KI-Agenten), Git." },
        about: { title: "Über", subtitle: "FullStack-Entwickler & Spezialist für KI-Lösungen", text: "Ich bin Víctor Duarte, ein FullStack-Entwickler aus Argentinien, spezialisiert auf die Entwicklung skalierbarer Webanwendungen, <strong>mandantenfähiger SaaS-Architekturen</strong> und <strong>konversationeller KI-Agenten</strong>, die reale Geschäftsprozesse automatisieren.<br><br>Ich entwickle End-to-End-Lösungen mit <strong>Java, Spring Boot, Angular, React und Node.js</strong> und integriere LLMs (<strong>Gemini API, Groq, Function Calling</strong>), <strong>WhatsApp</strong>-Bots sowie Online-Zahlungen (<strong>Stripe, MercadoPago</strong>). Das Leben mit Multipler Sklerose hat in mir eine außergewöhnliche Resilienz, Disziplin und Anpassungsfähigkeit geformt – Eigenschaften, die ich in jede Codezeile einbringe, um robuste, effiziente und ergebnisorientierte Software zu liefern.<br><br>Ich bin bereit, Entwicklungsteams sofortigen Mehrwert zu bieten oder die Architektur Ihres nächsten digitalen Produkts zu leiten.", badge1: "+8 Reale Projekte & SaaS", badge2: "FullStack: Java · Spring Boot · Angular · React", badge3: "Angewandte KI: Agenten · LLMs · WhatsApp-Bots", cv: "CV Herunterladen" },
        tech: { 
            title: "Meine Technologien",
            html: "Semantische Struktur und SEO (z.B. &lt;main&gt;, &lt;article&gt; Tags)",
            css: "Responsive Design und moderne Animationen (z.B. Flexbox, Grid, Keyframes)",
            js: "Dynamische Interaktivität und APIs (z.B. Event-Listener, Fetch-API)",
            angular: "Framework für skalierbare Enterprise-SPAs",
            ts: "Statische Typisierung für robusten und wartbaren Code",
            react: "Reaktive Benutzeroberflächen und moderne Komponenten",
            tailwind: "Modernes Utility-First-Styling und adaptives Design",
            java: "Server-Logik und Robustheit (z.B. OOP, Collections, Streams)",
            springboot: "Mikrodienste und skalierbare Apps (z.B. REST-APIs, Security, JPA)",
            node: "Asynchrones Backend, REST-APIs und Echtzeit-Bots",
            mysql: "Effiziente und sichere Datenbanken (z.B. SQL-Abfragen, Beziehungen, Joins)",
            sql: "Mandantenfähige relationale Persistenz und eingebettete Datenbanken",
            security: "Stateless-Authentifizierung, Rollenkontrolle und API-Schutz",
            ai: "Intelligente Agenten, Gemini API, Groq, Spring AI und Function Calling",
            whatsapp: "Konversationelle Automatisierung (Baileys) und Google Calendar API",
            payments: "Integration von Zahlungsgateways, Checkout und Webhooks",
            docker: "Containerisierung und Cloud-Deployment auf Easypanel und Netlify",
            git: "Versionskontrolle, Branch-Workflows und Zusammenarbeit"
        },
        projects: {
            shifty: {
                title: "Shifty SaaS - Multi-Praxis-Terminsystem",
                desc: "Mandantenfähige SaaS-Plattform zur Terminverwaltung mit WhatsApp-Bot und Stripe-Zahlungen.",
                fullDesc: "Mandantenfähige Enterprise-SaaS-Webplattform für die umfassende Verwaltung von Terminen, interaktiven Praxisplänen, Fachkräften, Dienstleistungen, Patienten und Abrechnungen. Enthält einen konversationellen WhatsApp-Bot zum Buchen/Stornieren von Terminen, automatische Erinnerungen und Stripe Checkout.",
                tech: ["Java 17", "Spring Boot 3", "React", "TypeScript", "MySQL", "Stripe API", "JWT"],
                features: ["Multi-Tenant-Architektur mit Spring AOP und Hibernate-Filtern", "Konversationeller WhatsApp-Bot für Buchung und Stornierung", "Integriertes Zahlungsgateway mit Stripe Checkout und Webhooks", "Interaktiver Praxisplan und 5 dynamische Glassmorphism-Themes"]
            },
            agenteInmo: {
                title: "KI-Immobilienagent",
                desc: "Konversationeller WhatsApp-KI-Agent zur Lead-Qualifizierung, Immobiliensuche und Besichtigungsplanung.",
                fullDesc: "Intelligenter Agent für den Immobiliensektor auf Basis der Google Gemini API mit Function Calling. Qualifiziert Leads automatisch, durchsucht reale Immobilien in der Datenbank ohne Halluzinationen, koordiniert Besichtigungen und leitet an menschliche Berater weiter, inklusive WhatsApp-Simulator und CRM-Dashboard.",
                tech: ["Node.js", "Express", "Google Gemini API", "Baileys (WhatsApp)", "SQLite", "JavaScript"],
                features: ["Strikte Datenbanksuche mittels Function Calling", "Automatische Lead-Qualifizierung und Besichtigungsplanung", "WhatsApp-Integration über Baileys und interaktiver Simulator", "Kommerzielles CRM-Panel zur Verfolgung von Leads und Immobilien"]
            },
            ecommerce: { 
                title: "E-Commerce Lebensmittel", 
                desc: "Komplette Verkaufsplattform.",
                fullDesc: "Robustes System für den Verkauf von Lebensmitteln mit Bestandsverwaltung und Bestellungen in Echtzeit.",
                tech: ["Java", "Spring Boot", "MySQL", "JWT", "Thymeleaf"],
                features: ["Rollenbasierte Benutzerverwaltung", "Dynamischer Warenkorb", "Komplettes Admin-Panel", "Sicherheit mit JWT"]
            },
            dental: { 
                title: "Zahnarztpraxis-Management", 
                desc: "Umfassendes System für Zahnkliniken.",
                fullDesc: "Moderne Anwendung zur Verwaltung von Terminen, digitalen Krankenakten und interaktiven Odontogrammen mit einer entkoppelten Architektur.",
                tech: ["React", "Spring Boot", "MySQL", "REST API", "Bootstrap"],
                features: ["Dynamisches Odontogramm in React", "Verwaltung von Krankenakten", "Intelligente Terminplanung", "Sicherheits- und Benutzerrollen"]
            },
            web: { 
                title: "Webentwicklung", 
                desc: "Erstellung eines persönlichen Portfolios und Dienstleistungen.",
                fullDesc: "Design und Entwicklung von modernen und optimierten Websites.",
                tech: ["HTML5", "CSS3", "JavaScript", "ScrollReveal", "Particles.js"],
                features: ["Responsive Design", "Fortgeschrittene Animationen", "SEO-Optimierung", "Mehrsprachige Unterstützung"]
            },
            design: { 
                title: "Grafikdesign", 
                desc: "Werbebroschüre für ein regionales Tourismusunternehmen.",
                fullDesc: "Beeindruckendes visuelles Design für regionale Marken und Dienstleistungen.",
                tech: ["Photoshop", "Illustrator", "Canva"],
                features: ["Visuelle Komposition", "Farblehre", "Print-Design", "Markenidentität"]
            },
            desktop: { 
                title: "Desktop-Anwendungen", 
                desc: "Desktop-Anwendungen mit Java, Swing, MySQL.",
                fullDesc: "Lokale Verwaltungssoftware für verschiedene kommerzielle Sektoren.",
                tech: ["Java", "Swing", "MySQL", "JDBC"],
                features: ["Lokale Installationsprogramme", "Persistente Datenbank", "Benutzerfreundliche Oberflächen", "Bestandsverwaltung"]
            },
            landing: { 
                title: "Landingpage", 
                desc: "Landingpage für eine Kinesiologie-Praxis.",
                fullDesc: "Optimierte Landingpage zur Gewinnung lokaler Kunden.",
                tech: ["HTML5", "CSS3", "JavaScript", "Netlify"],
                features: ["Kontaktformular", "Mobile-First-Design", "WhatsApp-Integration", "Schnelle Ladezeit"]
            },
            viewCode: "Code Ansehen",
            viewSite: "Live-Demo",
            viewDetails: "Details"
        },
        contact: { title: "Kontaktieren Sie mich!", name: "Vollständiger Name", email: "E-Mail", phone: "Telefonnummer", subject: "Betreff", message: "Nachricht", send: "Senden" },
        modal: { 
            title: "Nachricht Gesendet!", 
            message: "Danke für Ihre Nachricht. Ich werde mich in Kürze melden.", 
            close: "Schließen",
            features: "Wichtigste Funktionen",
            techStack: "Technologie-Stack"
        },
        footer: { 
            text: "Copyright &copy; 2024 by VK_Dev_Web | Alle Rechte vorbehalten.",
            role: "FullStack-Entwickler & KI-Spezialist",
            links: "Schnelllinks",
            contact: "Kontakt"
        },
        typed: ['Webentwickler', 'Community Manager', 'Grafikdesigner']
    },
    fr: {
        nav: { home: "Accueil", about: "À Propos", tech: "Technologies", projects: "Projets", contact: "Contact" },
        hero: { greeting: "Bonjour!! je m'appelle", role: "Je suis", description: "Java, Spring Boot, Angular, MySQL, Groq, Google Calendar API, IA Générative (Agents IA), Git." },
        about: { title: "À", subtitle: "Développeur FullStack & Spécialiste en Solutions IA", text: "Je suis Víctor Duarte, développeur FullStack d'Argentine spécialisé dans la création d'applications web évolutives, d'architectures <strong>SaaS multi-tenant</strong> et d'<strong>Agents IA conversationnels</strong> qui automatisent des processus métiers réels.<br><br>Je développe des solutions de bout en bout avec <strong>Java, Spring Boot, Angular, React et Node.js</strong>, en intégrant des LLMs (<strong>Gemini API, Groq, Function Calling</strong>), des bots <strong>WhatsApp</strong> et des paiements en ligne (<strong>Stripe, MercadoPago</strong>). Vivre avec la sclérose en plaques a forgé en moi une résilience, une discipline et une capacité d'adaptation exceptionnelles : des qualités que j'applique à chaque ligne de code pour livrer des logiciels solides, performants et orientés résultats.<br><br>Je suis prêt à apporter une valeur immédiate aux équipes de développement ou à diriger l'architecture de votre prochain produit numérique.", badge1: "+8 Projets Réels & SaaS", badge2: "FullStack: Java · Spring Boot · Angular · React", badge3: "IA Appliquée: Agents · LLMs · Bots WhatsApp", cv: "Télécharger CV" },
        tech: { 
            title: "Technologies",
            html: "Structure web sémantique et SEO (Ex: balises &lt;main&gt;, &lt;article&gt;)",
            css: "Design adaptatif et animations modernes (Ex: Flexbox, Grid, Keyframes)",
            js: "Interactivité dynamique et APIs (Ex: Event listeners, Fetch API)",
            angular: "Framework pour SPAs d'entreprise évolutives",
            ts: "Typage statique pour un code robuste et maintenable",
            react: "Interfaces utilisateur réactives et composants modernes",
            tailwind: "Stylisation moderne utility-first et design adaptatif",
            java: "Logique serveur et robustesse (Ex: POO, Collections, Streams)",
            springboot: "Microservices et applications évolutives (Ex: REST APIs, Security, JPA)",
            node: "Backend asynchrone, APIs REST et bots en temps réel",
            mysql: "Bases de données efficaces et sécurisées (Ex: Requêtes SQL, Relations, Joins)",
            sql: "Persistance relationnelle multi-tenant et bases embarquées",
            security: "Authentification stateless, contrôle des rôles et protection des APIs",
            ai: "Agents Intelligents, Gemini API, Groq, Spring AI et Function Calling",
            whatsapp: "Automatisation conversationnelle (Baileys) et Google Calendar API",
            payments: "Intégration de passerelles de paiement, Checkout et Webhooks",
            docker: "Conteneurisation et déploiement cloud sur Easypanel et Netlify",
            git: "Contrôle de version, flux de branches et collaboration"
        },
        projects: {
            shifty: {
                title: "Shifty SaaS - Agenda Multi-Clinique",
                desc: "Plateforme SaaS multi-tenant de gestion de rendez-vous avec Bot WhatsApp et paiements Stripe.",
                fullDesc: "Plateforme web SaaS multi-clinique (multi-tenant) pour la gestion complète des rendez-vous, agendas cliniques interactifs, professionnels, services, patients et facturation. Inclut un Bot conversationnel WhatsApp pour réserver/annuler des rendez-vous, des rappels automatiques et Stripe Checkout.",
                tech: ["Java 17", "Spring Boot 3", "React", "TypeScript", "MySQL", "Stripe API", "JWT"],
                features: ["Architecture Multi-Tenant avec Spring AOP et filtres Hibernate", "Bot conversationnel WhatsApp pour réservation et annulation", "Passerelle de paiement intégrée avec Stripe Checkout et Webhooks", "Agenda clinique interactif et 5 thèmes dynamiques Glassmorphism"]
            },
            agenteInmo: {
                title: "Agent IA Immobilier",
                desc: "Agent conversationnel WhatsApp avec IA pour la qualification de prospects, recherche de biens et prise de rendez-vous.",
                fullDesc: "Agent intelligent pour le secteur immobilier propulsé par l'API Google Gemini avec Function Calling. Qualifie automatiquement les prospects, recherche des biens réels dans la base de données sans halluciner, planifie des visites et transfère aux conseillers humains, avec simulateur WhatsApp et tableau de bord CRM.",
                tech: ["Node.js", "Express", "Google Gemini API", "Baileys (WhatsApp)", "SQLite", "JavaScript"],
                features: ["Recherche stricte en base de données via Function Calling", "Qualification automatique des prospects et planification de visites", "Intégration WhatsApp via Baileys et simulateur interactif", "Panneau CRM commercial pour le suivi des prospects et propriétés"]
            },
            ecommerce: { 
                title: "E-commerce Alimentaire", 
                desc: "Plateforme de vente de repas.",
                fullDesc: "Système robuste pour la vente de repas avec gestion des stocks et commandes en temps réel.",
                tech: ["Java", "Spring Boot", "MySQL", "JWT", "Thymeleaf"],
                features: ["Gestion des utilisateurs par rôles", "Panier d'achat dynamique", "Panneau d'administration complet", "Sécurité avec JWT"]
            },
            dental: { 
                title: "Gestion Dentaire", 
                desc: "Système complet pour cliniques dentaires.",
                fullDesc: "Application moderne pour la gestion des rendez-vous, des dossiers médicaux et des odontogrammes interactifs développée avec une architecture découplée.",
                tech: ["React", "Spring Boot", "MySQL", "REST API", "Bootstrap"],
                features: ["Odontogramme dynamique en React", "Gestion des dossiers médicaux", "Planification intelligente des rendez-vous", "Sécurité et rôles des utilisateurs"]
            },
            web: { 
                title: "Développement Web", 
                desc: "Création d'un portfolio personnel et services.",
                fullDesc: "Conception et développement de sites web modernes et optimisés.",
                tech: ["HTML5", "CSS3", "JavaScript", "ScrollReveal", "Particles.js"],
                features: ["Design adaptatif", "Animations avancées", "Optimisation SEO", "Support multilingue"]
            },
            design: { 
                title: "Design Graphique", 
                desc: "Brochure publicitaire touristique régionale.",
                fullDesc: "Conception visuelle percutante pour les marques et services régionaux.",
                tech: ["Photoshop", "Illustrator", "Canva"],
                features: ["Composition visuelle", "Théorie des couleurs", "Design pour impression", "Identité de marque"]
            },
            desktop: { 
                title: "Applications de Bureau", 
                desc: "Applications de bureau avec Java, Swing, MySQL.",
                fullDesc: "Logiciel de gestion locale pour différents secteurs commerciaux.",
                tech: ["Java", "Swing", "MySQL", "JDBC"],
                features: ["Installateurs locaux", "Base de données persistante", "Interfaces conviviales", "Contrôle des stocks"]
            },
            landing: { 
                title: "Landing Page", 
                desc: "Page d'atterrissage pour un cabinet de kinésithérapie.",
                fullDesc: "Page d'atterrissage optimisée pour la conversion de clients locaux.",
                tech: ["HTML5", "CSS3", "JavaScript", "Netlify"],
                features: ["Formulaire de contact", "Design Mobile-First", "Intégration WhatsApp", "Chargement rapide"]
            },
            viewCode: "Voir Code",
            viewSite: "Voir Site",
            viewDetails: "Détails"
        },
        contact: { title: "Contactez-moi !", name: "Nom complet", email: "E-mail", phone: "Numéro de téléphone", subject: "Sujet", message: "Message", send: "Envoyer" },
        modal: { 
            title: "Message Envoyé!", 
            message: "Merci de m'avoir contacté. Je vous répondrai sous peu.", 
            close: "Fermer",
            features: "Fonctionnalités Clés",
            techStack: "Technologies Utilisées"
        },
        footer: { 
            text: "Copyright &copy; 2024 by VK_Dev_Web | Tous droits réservés.",
            role: "Développeur FullStack & Spécialiste IA",
            links: "Liens Rapides",
            contact: "Contact"
        },
        typed: ['Développeur Web', 'Community Manager', 'Graphiste']
    }
};

/*===================== Lógica de Idioma ===================*/
let typedInstance;

function changeLanguage(lang) {
    // Actualizar textos simples
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let text = translations[lang];
        keys.forEach(k => { if (text) text = text[k]; });

        if (text) element.innerHTML = text; // innerHTML para permitir etiquetas como <span>
    });

    // Actualizar placeholders e inputs
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const keys = key.split('.');
        let text = translations[lang];
        keys.forEach(k => { if (text) text = text[k]; });
        if (text) element.placeholder = text;
    });

    document.querySelectorAll('[data-i18n-value]').forEach(element => {
        const key = element.getAttribute('data-i18n-value');
        const keys = key.split('.');
        let text = translations[lang];
        keys.forEach(k => { if (text) text = text[k]; });
        if (text) element.value = text;
    });

    // Actualizar Botones
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.lang-btn[onclick="changeLanguage('${lang}')"]`).classList.add('active');

    // Actualizar Typed.js
    if (typedInstance) {
        typedInstance.destroy();
    }
    typedInstance = new Typed('.multiple-text', {
        strings: translations[lang].typed,
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
    });

    // Guardar preferencia
    localStorage.setItem('language', lang);
}

/*===================== Inicialización y Eventos ===================*/
document.addEventListener('DOMContentLoaded', () => {
    /* 0. Preloader */
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.classList.add('hide');
        });
        // Fallback por si load tarda mucho (ej: videos pesados)
        setTimeout(() => {
            if (!preloader.classList.contains('hide')) {
                preloader.classList.add('hide');
            }
        }, 3000);
    }

    /* 1. Cargar Idioma */
    const savedLang = localStorage.getItem('language') || 'es';
    changeLanguage(savedLang);

    /* 2. Navegación e Interfaz */
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    // Cerrar menú al hacer click en un link (para móvil)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        });
    });

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    let activeLink = document.querySelector('header nav a[href*=' + id + ']');
                    if (activeLink) activeLink.classList.add('active');
                });
            }
        });

        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);

        let footerIconTop = document.querySelector('.footer-iconTop a');
        if (footerIconTop) {
            footerIconTop.classList.toggle('show', window.scrollY > 100);
        }
    };

    /* 3. Scroll Reveal */
    ScrollReveal({
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200,
    });

    ScrollReveal().reveal('.inicio-contenedor, .heading', { origin: 'top' });
    ScrollReveal().reveal('.inicio-img, .Servicios-contenedor, .Portfolio-box, .Contacto form', { origin: 'bottom' });
    ScrollReveal().reveal('.inicio-contenedor h1, .SobreMi-img', { origin: 'left' });
    ScrollReveal().reveal('.inicio-contenedor p, .SobreMi-Contenedor', { origin: 'right' });


    /* 4. Formulario de Contacto (AJAX) */
    const contactForm = document.getElementById('contactForm');
    const modalSuccess = document.getElementById('modal-success');
    const closeModalBtn = document.getElementById('close-modal');

    if (contactForm) {
        console.log("Formulario encontrado, adjuntando listener");
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Evita el redireccionamiento ESTRICTAMENTE
            console.log("Submit interceptado");

            const formData = new FormData(this);

            fetch(this.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
                .then(response => {
                    if (response.ok) {
                        modalSuccess.classList.add('show'); // Muestra el modal
                        contactForm.reset(); // Limpia el formulario
                    } else {
                        alert('Hubo un error al enviar el mensaje. Inténtalo nuevamente.');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Hubo un error al enviar el mensaje.');
                });
        });
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            modalSuccess.classList.remove('show');
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target == modalSuccess) {
            modalSuccess.classList.remove('show');
        }
    });

    /* 5. Tecnologías (Efectos sutiles si se desea, por ahora manejado por CSS) */
    // La cuadrícula bento es estática y usa hover de CSS para efectos premium.


    const portfolioBoxes = document.querySelectorAll('.Portfolio-box');
    portfolioBoxes.forEach(box => {
        const video = box.querySelector('video');
        if (video) {
            // Pausar al entrar (hover)
            box.addEventListener('mouseenter', () => video.pause());
            // Reanudar al salir
            box.addEventListener('mouseleave', () => video.play().catch(e => console.log("Play error", e)));
        }
    });




    /* 7. Modal de Proyectos */
    const projectModal = document.getElementById('project-modal');
    const closeProjectModal = document.querySelector('.close-project-modal');

    window.openProjectModal = function(projectId) {
        const lang = localStorage.getItem('language') || 'es';
        const project = translations[lang].projects[projectId];
        
        if (!project) return;

        // Título y Descripción
        document.getElementById('modal-title').innerText = project.title;
        document.getElementById('modal-description').innerText = project.fullDesc;

        // Tech Stack
        const techContainer = document.getElementById('modal-tech');
        techContainer.innerHTML = '';
        project.tech.forEach(tech => {
            const span = document.createElement('span');
            span.className = 'tech-tag';
            span.innerText = tech;
            techContainer.appendChild(span);
        });

        // Features
        const featuresList = document.getElementById('modal-features-list');
        featuresList.innerHTML = '';
        project.features.forEach(feature => {
            const li = document.createElement('li');
            li.innerHTML = `<i class='bx bx-check-circle'></i> ${feature}`;
            featuresList.appendChild(li);
        });

        // Media (Clonar el video/imagen del portfolio box correspondiente)
        const mediaContainer = document.getElementById('modal-media-container');
        const originalBox = document.querySelector(`.Portfolio-box[data-project="${projectId}"]`);
        if (originalBox) {
            const media = originalBox.querySelector('video, img').cloneNode(true);
            if (media.tagName === 'VIDEO') {
                media.controls = true; // Activar controles en el modal si es video
                media.autoplay = false;
            } else {
                media.removeAttribute('controls');
                media.removeAttribute('autoplay');
                media.removeAttribute('loop');
                media.removeAttribute('muted');
            }
            mediaContainer.innerHTML = '';
            mediaContainer.appendChild(media);
        }

        projectModal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Evitar scroll de fondo
    };

    if (closeProjectModal) {
        closeProjectModal.onclick = () => {
            projectModal.classList.remove('show');
            document.body.style.overflow = 'auto';
        };
    }

    window.onclick = (event) => {
        if (event.target == projectModal) {
            projectModal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    };

    /* 8. Fondo de Partículas (Restaurado) */
    if (document.getElementById('particles-js')) {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#00d2ff" },
                "shape": {
                    "type": "circle",
                    "stroke": { "width": 0, "color": "#000000" },
                    "polygon": { "nb_sides": 5 }
                },
                "opacity": {
                    "value": 0.6,
                    "random": false,
                    "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false }
                },
                "size": {
                    "value": 5,
                    "random": true,
                    "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#00d2ff",
                    "opacity": 0.5,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 3,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": { "enable": true, "mode": "grab" },
                    "onclick": { "enable": true, "mode": "push" },
                    "resize": true
                },
                "modes": {
                    "grab": { "distance": 140, "line_linked": { "opacity": 1 } },
                    "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 },
                    "repulse": { "distance": 200, "duration": 0.4 },
                    "push": { "particles_nb": 4 },
                    "remove": { "particles_nb": 2 }
                }
            },
            "retina_detect": true
        });
    }
});
