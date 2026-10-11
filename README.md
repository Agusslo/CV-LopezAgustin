# agus.dev — Portfolio de Agustín Nicolás López

Portfolio personal bilingüe (español / inglés) hecho a mano con HTML, CSS y JavaScript, sin frameworks.

## Funcionalidades
- **Español / Inglés**: botón ES · EN en la barra. Detecta el idioma del navegador la primera vez y recuerda la elección en `localStorage`.
- **CV en los dos idiomas**: el botón principal descarga el CV del idioma activo, y el botón chico al lado descarga el otro. En Contacto están las dos opciones.
- **Tema claro / oscuro** con persistencia y sin parpadeo al cargar.
- **Responsive** con menú mobile.
- Animaciones de entrada con `IntersectionObserver` (se desactivan si el usuario pide menos movimiento).
- Mini mapa de butacas animado que simula el tiempo real de Hollownest Cinema.

## Cómo agregar o cambiar un texto
1. En `index.html`, el texto en español va directo en el HTML con un `data-i18n="clave"` (o `data-i18n-html` si lleva negritas o etiquetas).
2. En `main.js`, se agrega la misma clave con la traducción al inglés en el objeto `EN`.

## Estructura
```text
├── index.html
├── styles.css
├── main.js
├── Agustin_Lopez_CV.pdf      (CV en español)
└── Agustin_Lopez_CV_EN.pdf   (CV en inglés)
```
