/*===================== Traducciones ===================*/
const translations = {
    es: {
        nav: { home: "Inicio", about: "Sobre Mí", tech: "Tecnologías", projects: "Proyectos", contact: "Contacto" },
        hero: { greeting: "Hola!! mi nombre es", role: "Soy", description: "HTML, CSS, Java, JavaScript, Swing, MySql, SpringBoot, Git, Photoshop, Canva" },
        about: { title: "Sobre", subtitle: "¡Desarrollador Web FullStack!", text: "\"Soy Víctor, un desarrollador web de Argentina, apasionado por aprender y adaptarme a nuevas tecnologías. A pesar de tener Esclerosis Múltiple, sigo enfocado en mi crecimiento profesional. Este portfolio refleja mi dedicación y habilidades, y estoy listo para nuevos desafíos y proyectos innovadores.\" Gracias por visitar mi portafolio y ser parte de mi viaje en la tecnología y el desarrollo web. No dudes en ponerte en contacto para discutir cómo podemos colaborar o explorar nuevas oportunidades.", cv: "Descargar CV" },
        tech: { title: "Tecnologías que manejo" },
        projects: {
            ecommerce: { title: "E-commerce Viandas", desc: "Plataforma completa de venta de alimentos desarrollada con Spring Boot y Java. Gestión de usuarios, carrito y panel administrativo." },
            dental: { title: "Gestión Odontológica", desc: "Sistema integral para clínicas dentales. Turnos, historia clínica digital y odontograma interactivo. (Java Web)." },
            web: { title: "Desarrollo Web", desc: "Creación de un portfolio personal, mostrando trabajos y servicios que realiza." },
            design: { title: "Diseño Gráfico", desc: "Creación de un folleto publicitario para una empresa de turismo regional." },
            desktop: { title: "Aplicaciones de Escritorio", desc: "Aplicaciones de escritorio utilizando las tecnologías de Java, Swing, MySQL." },
            landing: { title: "Landing Page", desc: "Página de Aterrizaje para consultorio Kinesiológico." },
            viewCode: "Ver Código",
            viewSite: "Ver Sitio"
        },
        contact: { title: "Contacta", name: "Nombre completo", email: "E-mail", phone: "Número de Teléfono", subject: "Asunto del Email", message: "Mensaje", send: "Enviar" },
        modal: { title: "¡Mensaje Enviado!", message: "Gracias por contactarme. Te responderé a la brevedad.", close: "Cerrar" },
        footer: { text: "Copyright &copy; 2024 by VK_Dev_Web | All Rights Reserved." },
        typed: ['Desarrollador Java Web', 'Community Manager', 'Diseñador Gráfico']
    },
    en: {
        nav: { home: "Home", about: "About Me", tech: "Tech Stack", projects: "Projects", contact: "Contact" },
        hero: { greeting: "Hello!! my name is", role: "I am", description: "HTML, CSS, Java, JavaScript, Swing, MySQL, SpringBoot, Git, Photoshop, Canva" },
        about: { title: "About", subtitle: "FullStack Web Developer!", text: "\"I'm Víctor, a web developer from Argentina, passionate about learning and adapting to new technologies. Despite having Multiple Sclerosis, I remain focused on my professional growth. This portfolio reflects my dedication and skills, and I am ready for new challenges and innovative projects.\" Thank you for visiting my portfolio and being part of my journey in technology and web development. Feel free to contact me to discuss how we can collaborate or explore new opportunities.", cv: "Download CV" },
        tech: { title: "Technologies I use" },
        projects: {
            ecommerce: { title: "Food E-commerce", desc: "Complete food sales platform developed with Spring Boot and Java. User management, cart, and admin panel." },
            dental: { title: "Dental Management", desc: "Comprehensive system for dental clinics. Appointments, digital medical records, and interactive odontogram. (Java Web)." },
            web: { title: "Web Development", desc: "Creation of a personal portfolio, showcasing work and services offered." },
            design: { title: "Graphic Design", desc: "Creation of an advertising brochure for a regional tourism company." },
            desktop: { title: "Desktop Applications", desc: "Desktop applications using Java, Swing, MySQL technologies." },
            landing: { title: "Landing Page", desc: "Landing Page for a Kinesiology office." },
            viewCode: "View Code",
            viewSite: "Live Demo"
        },
        contact: { title: "Contact", name: "Full Name", email: "E-mail", phone: "Phone Number", subject: "Email Subject", message: "Message", send: "Send" },
        modal: { title: "Message Sent!", message: "Thanks for contacting me. I will reply shortly.", close: "Close" },
        footer: { text: "Copyright &copy; 2024 by VK_Dev_Web | All Rights Reserved." },
        typed: ['Java Web Developer', 'Community Manager', 'Graphic Designer']
    },
    de: {
        nav: { home: "Start", about: "Über Mich", tech: "Technologien", projects: "Projekte", contact: "Kontakt" },
        hero: { greeting: "Hallo!! mein Name ist", role: "Ich bin", description: "HTML, CSS, Java, JavaScript, Swing, MySQL, SpringBoot, Git, Photoshop, Canva" },
        about: { title: "Über", subtitle: "FullStack Webentwickler!", text: "\"Ich bin Víctor, ein Webentwickler aus Argentinien, leidenschaftlich daran interessiert, neue Technologien zu lernen. Trotz Multipler Sklerose bleibe ich auf mein berufliches Wachstum konzentriert. Dieses Portfolio spiegelt mein Engagement und meine Fähigkeiten wider, und ich bin bereit für neue Herausforderungen.\" Danke, dass Sie mein Portfolio besuchen. Zögern Sie nicht, mich zu kontaktieren, um zu besprechen, wie wir zusammenarbeiten können.", cv: "CV Herunterladen" },
        tech: { title: "Meine Technologien" },
        projects: {
            ecommerce: { title: "E-Commerce Lebensmittel", desc: "Komplette Verkaufsplattform entwickelt mit Spring Boot und Java. Benutzerverwaltung, Warenkorb und Admin-Panel." },
            dental: { title: "Zahnarztpraxis Management", desc: "Umfassendes System für Zahnkliniken. Termine, digitale Krankenakten und interaktives Odontogramm." },
            web: { title: "Webentwicklung", desc: "Erstellung eines persönlichen Portfolios, das Arbeiten und Dienstleistungen zeigt." },
            design: { title: "Grafikdesign", desc: "Erstellung einer Werbebroschüre für ein regionales Tourismusunternehmen." },
            desktop: { title: "Desktop-Anwendungen", desc: "Desktop-Anwendungen mit Java, Swing, MySQL." },
            landing: { title: "Landing Page", desc: "Landing Page für eine Kinesiologie-Praxis." },
            viewCode: "Code Ansehen",
            viewSite: "Webseite"
        },
        contact: { title: "Kontaktieren", name: "Vollständiger Name", email: "E-Mail", phone: "Telefonnummer", subject: "Betreff", message: "Nachricht", send: "Senden" },
        modal: { title: "Nachricht Gesendet!", message: "Danke für Ihre Nachricht. Ich werde mich in Kürze melden.", close: "Schließen" },
        footer: { text: "Copyright &copy; 2024 by VK_Dev_Web | Alle Rechte vorbehalten." },
        typed: ['Java Webentwickler', 'Community Manager', 'Grafikdesigner']
    },
    fr: {
        nav: { home: "Accueil", about: "À Propos", tech: "Technologies", projects: "Projets", contact: "Contact" },
        hero: { greeting: "Bonjour!! je m'appelle", role: "Je suis", description: "HTML, CSS, Java, JavaScript, Swing, MySQL, SpringBoot, Git, Photoshop, Canva" },
        about: { title: "À", subtitle: "Développeur Web FullStack!", text: "\"Je suis Víctor, un développeur web d'Argentine, passionné par l'apprentissage de nouvelles technologies. Malgré la sclérose en plaques, je reste concentré sur ma croissance professionnelle. Ce portfolio reflète mon dévouement et mes compétences, et je suis prêt pour de nouveaux défis.\" Merci de visiter mon portfolio. N'hésitez pas à me contacter pour discuter de la façon dont nous pouvons collaborer.", cv: "Télécharger CV" },
        tech: { title: "Technologies" },
        projects: {
            ecommerce: { title: "E-commerce Alimentaire", desc: "Plateforme de vente complète développée avec Spring Boot et Java. Gestion utilisateurs, panier et panneau admin." },
            dental: { title: "Gestion Dentaire", desc: "Système complet pour cliniques dentaires. Rendez-vous, dossiers médicaux numériques et odontogramme interactif." },
            web: { title: "Développement Web", desc: "Création d'un portfolio personnel, présentant les travaux et services offerts." },
            design: { title: "Design Graphique", desc: "Création d'une brochure publicitaire pour une entreprise de tourisme régionale." },
            desktop: { title: "Applications de Bureau", desc: "Applications de bureau utilisant les technologies Java, Swing, MySQL." },
            landing: { title: "Landing Page", desc: "Page d'atterrissage pour un cabinet de kinésiologie." },
            viewCode: "Voir Code",
            viewSite: "Voir Site"
        },
        contact: { title: "Contactez", name: "Nom complet", email: "E-mail", phone: "Numéro de téléphone", subject: "Sujet", message: "Message", send: "Envoyer" },
        modal: { title: "Message Envoyé!", message: "Merci de m'avoir contacté. Je vous répondrai sous peu.", close: "Fermer" },
        footer: { text: "Copyright &copy; 2024 by VK_Dev_Web | Tous droits réservés." },
        typed: ['Développeur Java Web', 'Community Manager', 'Graphiste']
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

    /* 5. Tecnologías Slider y Video Hover (Lógica visual extra) */
    const slider = document.querySelector('.tecnologias-slider');
    if (slider) {
        const clone = slider.innerHTML;
        slider.innerHTML += clone;

        const tecnologiaItems = document.querySelectorAll('.tecnologia-item');
        tecnologiaItems.forEach(item => {
            item.addEventListener('mouseover', () => {
                slider.style.animationPlayState = 'paused';
                const descripcion = document.createElement('div');
                descripcion.className = 'descripcion';
                descripcion.textContent = item.getAttribute('data-descripcion');
                item.appendChild(descripcion);
            });

            item.addEventListener('mouseout', () => {
                slider.style.animationPlayState = 'running';
                const descripcion = item.querySelector('.descripcion');
                if (descripcion) descripcion.remove();
            });
        });
    }

    const portfolioBoxes = document.querySelectorAll('.Portfolio-box');
    portfolioBoxes.forEach(box => {
        const video = box.querySelector('video');
        if (video) {
            box.addEventListener('mouseenter', () => video.play().catch(e => console.log("Autoplay error", e)));
            box.addEventListener('mouseleave', () => video.pause());
        }
    });



    /* 6. Fondo de Partículas (Ajustado para mayor visibilidad) */
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
                    "value": 0.6, /* Increased opacity */
                    "random": false,
                    "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false }
                },
                "size": {
                    "value": 5, /* Increased size */
                    "random": true,
                    "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#00d2ff",
                    "opacity": 0.5, /* Increased line opacity */
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
