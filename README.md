# 💻 Víctor Duarte — Portfolio Profesional (Full-Stack & AI Solutions)

<p align="center">
  <strong>Sitio web portfolio interactivo, multi-idioma (ES · EN · DE · FR) y orientado a arquitectura de software, plataformas SaaS multi-tenant y Agentes de IA Generativa.</strong><br/>
  🌐 <strong>Demo en vivo:</strong> <a href="https://viktor033.github.io/" target="_blank">https://viktor033.github.io/</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript_ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/i18n-ES_|_EN_|_DE_|_FR-00d2ff?style=for-the-badge" alt="Multi-Language" />
  <img src="https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white" alt="GitHub Pages" />
</p>

---

## 📋 Tabla de Contenidos

- [Descripción General](#-descripción-general)
- [Características Principales](#-características-principales)
- [Filosofía de Diseño y Experiencia de Usuario (UX/UI)](#-filosofía-de-diseño-y-experiencia-de-usuario-uxui)
- [Sistema de Internacionalización (i18n) y Descarga Dinámica de CV](#-sistema-de-internacionalización-i18n-y-descarga-dinámica-de-cv)
- [Proyectos Destacados en el Portfolio](#-proyectos-destacados-en-el-portfolio)
- [Ecosistema Tecnológico Presentado](#-ecosistema-tecnológico-presentado)
- [Arquitectura y Estructura del Proyecto](#-arquitectura-y-estructura-del-proyecto)
- [Instalación y Ejecución Local](#-instalación-y-ejecución-local)
- [Contacto](#-contacto)

---

## 🎯 Descripción General

Este repositorio aloja el código fuente de mi **Portfolio Profesional** desplegado en **GitHub Pages** ([viktor033.github.io](https://viktor033.github.io/)). Fue diseñado desde cero sin dependencias pesadas para ofrecer tiempos de carga instantáneos, máxima puntuación SEO y una experiencia visual inmersiva que refleja mi perfil como **Desarrollador Web Full-Stack & Especialista en Soluciones con Inteligencia Artificial**.

El sitio centraliza mis desarrollos más recientes —desde plataformas **SaaS multi-tenant** con **Java y Spring Boot** hasta **Agentes Conversacionales con IA en WhatsApp** y sistemas **E-commerce en producción**—, permitiendo explorar demos en video, mockups interactivos, modales de arquitectura técnica y descargar mi **Currículum Vitae optimizado para ATS** automáticamente en el idioma elegido por el visitante.

---

## ✨ Características Principales

| Funcionalidad | Descripción Técnica |
|---|---|
| 🌍 **Motor Multi-Idioma (i18n) en Tiempo Real** | Traducción instantánea sin recarga de página en **4 idiomas**: Español (`ES`), Inglés (`EN`), Alemán (`DE`) y Francés (`FR`), con persistencia en `localStorage`. |
| 📄 **Descarga Inteligente de CV por Idioma** | El botón **Descargar CV** detecta el idioma activo de la interfaz y entrega automáticamente el PDF ATS de 1 página en ese idioma (`ES`, `EN`, `DE` o `FR`). |
| 🪟 **Estética Dark Glassmorphism** | Tarjetas translúcidas con `backdrop-filter: blur(10px)`, bordes luminosos cian/magenta y micro-interacciones fluidas. |
| 🎬 **Galería Interactiva & Modales de Proyecto** | Tarjetas con reproducción inteligente de video (`autoplay` / pausa en `hover`) y ventana modal dinámica con stack tecnológico y funcionalidades clave. |
| 🌌 **Fondo Dinámico de Partículas** | Red interactiva renderizada en `<canvas>` con `Particles.js` que responde al movimiento y clic del cursor. |
| ⌨️ **Efecto de Escritura Dinámica & ScrollReveal** | Títulos animados con `Typed.js` que se reinicializan al cambiar de idioma y animaciones de entrada progresivas con `ScrollReveal`. |
| 📬 **Formulario de Contacto Asíncrono (AJAX)** | Integración con `FormSubmit` vía `Fetch API` para envío de correos sin abandonar la página y confirmación mediante modal personalizado. |

---

## 🎨 Filosofía de Diseño y Experiencia de Usuario (UX/UI)

- **Paleta Cyber-Dark & Cyan Glow:** Basada en tonos oscuros profundos (`#1e1f28`, `#282a36`) combinados con acentos de alto contraste en cian eléctrico (`#00d2ff`) para ingeniería Full-Stack y magenta neón (`#f403e8`) para la categoría de **IA & Innovación**.
- **Sección "Sobre Mí" con KPIs de Alto Impacto:** Presentación ejecutiva acompañada de 3 insignias rápidas (*+8 Proyectos Reales & SaaS*, *FullStack: Java · Spring Boot · Angular · React* e *IA Aplicada: Agentes · LLMs · WhatsApp Bots*).
- **Estandarización Visual del Tech Stack:** Contenedores `.tech-icon-box` de `90x90px` con efecto Glassmorphism, saturación adaptativa y realce cromático en `hover`.
- **100% Responsive & Mobile-First:** Menú hamburguesa adaptable, grillas CSS (`auto-fit` / `minmax`) y controles optimizados para pantallas táctiles.

---

## 🌍 Sistema de Internacionalización (i18n) y Descarga Dinámica de CV

El archivo [`JS/script.js`](JS/script.js) implementa un diccionario estructurado (`translations`) que actualiza dinámicamente:
1. Todos los nodos del DOM con atributo `data-i18n`.
2. Los `placeholder` e inputs del formulario de contacto (`data-i18n-placeholder` y `data-i18n-value`).
3. Las cadenas animadas de `Typed.js` en la sección Hero.
4. El contenido completo de los **modales de detalle de cada proyecto** (descripción extendida, etiquetas de stack y lista de *features*).
5. El archivo PDF vinculado al botón `#cv-download-btn`:

| Idioma Activo | Archivo PDF Descargado | Formato |
|---|---|---|
| 🇪🇸 **Español (`ES`)** | [`CV_Victor_Duarte.pdf`](CV_Victor_Duarte.pdf) | 1 Página A4 · Optimizado para ATS |
| 🇺🇸 **Inglés (`EN`)** | [`CV_Victor_Duarte_EN.pdf`](CV_Victor_Duarte_EN.pdf) | 1 Página A4 · Optimizado para ATS |
| 🇩🇪 **Alemán (`DE`)** | [`CV_Victor_Duarte_DE.pdf`](CV_Victor_Duarte_DE.pdf) | 1 Página A4 · Optimizado para ATS |
| 🇫🇷 **Francés (`FR`)** | [`CV_Victor_Duarte_FR.pdf`](CV_Victor_Duarte_FR.pdf) | 1 Página A4 · Optimizado para ATS |

---

## 🚀 Proyectos Destacados en el Portfolio

| Proyecto | Stack Principal | Descripción | Repositorio |
|---|---|---|---|
| 🏥 **Shifty SaaS — Agenda Multi-Consultorio** | `Java 17` · `Spring Boot 3` · `React` · `TypeScript` · `MySQL` · `Stripe API` · `JWT` | Plataforma SaaS multi-tenant con aislamiento de datos (Spring AOP + Hibernate Filters), agenda clínica interactiva, Bot conversacional de WhatsApp, recordatorios automáticos y pagos con Stripe Checkout. | [Viktor033/Agenda-Virtual](https://github.com/Viktor033/Agenda-Virtual) |
| 🤖 **Agente IA Inmobiliario (WhatsApp & CRM)** | `Node.js` · `Express` · `Google Gemini API` · `Baileys` · `SQLite` · `JavaScript` | Agente conversacional en WhatsApp con *Function Calling* que califica leads, busca propiedades estrictamente en base de datos sin alucinar, agenda visitas e incluye simulador web y panel CRM comercial. | [Viktor033/Agente-IA-ws](https://github.com/Viktor033/Agente-IA-ws) |
| 🍱 **E-commerce Viandas (Manoplas)** | `Java 17` · `Spring Boot 3` · `Angular 19` · `TypeScript` · `MySQL` · `MercadoPago SDK` | Plataforma integral de venta de alimentos con carrito dinámico, seguridad por roles, pasarela MercadoPago y dashboard de cocina en tiempo real (**+40% eficiencia operativa**). | [Viktor033/viandas](https://github.com/Viktor033/viandas) |
| 🦷 **Gestión Odontológica** | `React` · `Spring Boot` · `MySQL` · `REST API` · `Bootstrap` | Sistema integral para clínicas dentales con agenda de turnos, historia clínica digital y odontograma interactivo en React. | [Viktor033/ConsultorioOdonto](https://github.com/Viktor033/ConsultorioOdonto) |
| 🌐 **Landing Page Kinesiología** | `HTML5` · `CSS3` · `JavaScript` · `Netlify` | Landing page Mobile-First optimizada para posicionamiento local y conversión directa vía WhatsApp. | [Demo en Vivo](https://daialvarezkine.netlify.app/) |
| 🖥️ **Peluquería Canina (Desktop)** | `Java` · `Swing` · `MySQL` · `JDBC` | Aplicación de escritorio con arquitectura en capas y persistencia relacional para gestión de turnos y clientes. | [Viktor033/PeluqueriaCanina](https://github.com/Viktor033/PeluqueriaCanina) |

---

## 🛠️ Ecosistema Tecnológico Presentado

El portfolio organiza mis competencias técnicas en tres bloques estratégicos:

- **Frontend:** `HTML5 Semántico`, `CSS3`, `JavaScript (ES6+)`, `Angular`, `TypeScript`, `React.js`, `Tailwind CSS & Bootstrap`.
- **Backend & DB:** `Java (17/21)`, `Spring Boot 3`, `Node.js & Express`, `MySQL`, `PostgreSQL & SQLite`, `Spring Security & JWT`.
- **AI & Innovation:** `IA Generativa & LLMs (Gemini API, Groq, Spring AI, Function Calling)`, `WhatsApp Bots (Baileys) & Google Calendar API`, `Stripe & MercadoPago (Checkout & Webhooks)`, `Docker & Cloud Deploy (Easypanel, Netlify)`, `Git & GitHub`.

---

## 📂 Arquitectura y Estructura del Proyecto

```text
Viktor033.github.io/
├── index.html                   # Estructura principal semántica, metadatos SEO, Open Graph y tarjetas
├── CSS/
│   └── Style.css                # Sistema de diseño Glassmorphism, variables CSS, animaciones y media queries
├── JS/
│   └── script.js                # Motor i18n (ES/EN/DE/FR), modales dinámicos, descarga de CV, AJAX y Particles.js
├── IMG/
│   ├── shifty_saas_project.png  # Mockup de portada para Shifty SaaS Multi-Consultorio
│   ├── agente_inmo_project.png  # Mockup de portada para Agente IA Inmobiliario
│   ├── ecommerce_project.png    # Mockup de portada para E-commerce Viandas
│   ├── dental_project.png       # Mockup de portada para Gestión Odontológica
│   ├── Foto_Victor_New.jpg      # Fotografía profesional de perfil
│   └── ...                      # Iconos de tecnologías y recursos gráficos
├── VIDEOS/
│   ├── ecommerce_project.mp4    # Demo en video del E-commerce de Viandas
│   ├── dental_project.mp4       # Demo en video del Sistema Odontológico
│   └── desarrollo_web.mp4       # Demo en video del Portfolio Web
├── CV_Victor_Duarte.pdf         # CV ATS 1 página en Español
├── CV_Victor_Duarte_EN.pdf      # CV ATS 1 página en Inglés
├── CV_Victor_Duarte_DE.pdf      # CV ATS 1 página en Alemán
├── CV_Victor_Duarte_FR.pdf      # CV ATS 1 página en Francés
└── README.md                    # Documentación técnica del repositorio
```

---

## ⚡ Instalación y Ejecución Local

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Viktor033/Viktor033.github.io.git
   cd Viktor033.github.io
   ```

2. **Ejecutar con un servidor local** (por ejemplo, con *Live Server* en VS Code o Python):
   ```bash
   python -m http.server 8080
   ```

3. **Abrir en el navegador:**
   ```text
   http://localhost:8080
   ```

---

## 📬 Contacto

- **Autor:** Víctor Arnaldo Duarte
- **Rol:** Full-Stack Web Developer & AI Solutions Specialist
- **Ubicación:** Corrientes, Argentina (Disponible 100% Remoto Global)
- **Portfolio Web:** [https://viktor033.github.io/](https://viktor033.github.io/)
- **LinkedIn:** [linkedin.com/in/victor-duarte-04a1b1261](https://www.linkedin.com/in/victor-duarte-04a1b1261)
- **GitHub:** [github.com/Viktor033](https://github.com/Viktor033)
- **Email:** [viktor.duarte.033@gmail.com](mailto:viktor.duarte.033@gmail.com)
