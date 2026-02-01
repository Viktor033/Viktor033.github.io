/*===================== icono de la barra de navegación ===================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*===================== Intersection Observer para Nav Activo ===================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

const observerOptions = {
    threshold: 0.3
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});



/*===================== Scroll Event Optimizado (Sticky Header & Menú) ===================*/
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 100);

    /* Mostrar botón volver arriba */
    let footerIconTop = document.querySelector('.footer-iconTop a');
    if (footerIconTop) {
        footerIconTop.classList.toggle('show', window.scrollY > 100);
    }

    /* Eliminar ícono y cerrar menú al hacer scroll */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
});

/*===================== Revelar al hacer scroll  ===================*/

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

/*===================== sTypeado JS  ===================*/

const typed = new Typed('.multiple-text', {
    strings: ['Desarrollador Java Web', 'Community Manager', 'Diseñador Gráfico'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});

/*===================== FORMULARIO ESTÁNDAR (Sin JS) ================*/
/* El formulario ahora se envía directamente por HTML a FormSubmit.co */

/*======================= Barra en Movimiento tecnologias ==========================*/


const slider = document.querySelector('.tecnologias-slider');
const clone = slider.innerHTML;
slider.innerHTML += clone; // Añadimos el clon para un scroll continuo

// Pausar animación cuando el mouse está sobre una imagen
const tecnologiaItems = document.querySelectorAll('.tecnologia-item');

tecnologiaItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        slider.style.animationPlayState = 'paused'; // Pausa la animación
        const descripcion = document.createElement('div');
        descripcion.className = 'descripcion';
        descripcion.textContent = item.getAttribute('data-descripcion');
        item.appendChild(descripcion);
    });

    item.addEventListener('mouseout', () => {
        slider.style.animationPlayState = 'running'; // Reanuda la animación
        const descripcion = item.querySelector('.descripcion');
        if (descripcion) {
            descripcion.remove(); // Elimina la descripción cuando el mouse sale
        }
    });
});


/*======================= Video Hover Effect ==========================*/
const portfolioBoxes = document.querySelectorAll('.Portfolio-box');

portfolioBoxes.forEach(box => {
    const video = box.querySelector('video');

    if (video) {
        box.addEventListener('mouseenter', () => {
            video.play().catch(error => {
                console.log("Video play unable to start:", error);
            });
        });

        box.addEventListener('mouseleave', () => {
            video.pause();
        });
    }
});

