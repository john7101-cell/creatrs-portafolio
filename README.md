# Creatrs · Portafolio

🌐 **En línea:** https://john7101-cell.github.io/creatrs-portafolio/

Sitio web de **Creatrs**, agencia de diseño y desarrollo web para pymes en Colombia (Medellín).

## Páginas (index)

| Página | Archivo | Para qué sirve |
|---|---|---|
| Portafolio | [`index.html`](index.html) | Servicios y precios, qué incluye cada web, proceso, proyectos, auditoría gratis, preguntas frecuentes y contacto |
| Brief | [`brief.html`](brief.html) | Lista de lo que necesita el cliente (logo, textos, fotos, dominio, accesos, legal) y formulario que envía la solicitud por WhatsApp o correo |
| Demo: restaurante | [`proyectos/restaurante/index.html`](proyectos/restaurante/index.html) | La Cazuela de Mila: menú del día, carta, reservas y horarios |
| Demo: fábrica B2B | [`proyectos/fabrica/index.html`](proyectos/fabrica/index.html) | Telar Norte: líneas de producción, proceso y cotizador |
| Demo: clínica dental | [`proyectos/clinica/index.html`](proyectos/clinica/index.html) | Clínica Dental Alba: tratamientos, agenda de citas y preguntas |

> Los tres proyectos son **conceptuales**: los negocios son ficticios y fueron creados por Creatrs para mostrar su trabajo.

## Estructura

```
creatrs-portafolio/
├── index.html              # Portafolio principal
├── brief.html              # Brief y formulario de cotización
├── assets/
│   ├── css/estilos.css     # Estilos compartidos (colores en :root)
│   ├── js/main.js          # Menú móvil, formulario del brief y lista de verificación
│   └── img/                # Capturas de las demos, favicon e imagen para redes
└── proyectos/
    ├── restaurante/index.html
    ├── fabrica/index.html
    └── clinica/index.html
```

Es HTML, CSS y JavaScript puro: no necesita instalar nada ni compilar.

## Verlo en tu computador

Abre `index.html` con doble clic, o sirve la carpeta:

```bash
python -m http.server 8000
```

y entra a http://localhost:8000.

## Publicación

Se publica con **GitHub Pages** desde la rama `main` (carpeta raíz). El archivo `.nojekyll` evita que GitHub procese el sitio con Jekyll.

## Personalizar

- **Precios y planes:** sección `#servicios` de `index.html`.
- **WhatsApp y correo:** busca `573237962885` y `agencia.creatrsplus@gmail.com` en `index.html`, `brief.html` y `assets/js/main.js`.
- **Colores de la marca:** variables al inicio de `assets/css/estilos.css`.
- **Capturas de las demos:** si cambias una demo, vuelve a capturarla con Chrome:

```bash
chrome --headless=new --window-size=1440,990 --screenshot=assets/img/demo-fabrica.png proyectos/fabrica/index.html
```

---
© Creatrs · John Fredy Agudelo · Medellín, Colombia · WhatsApp +57 323 796 2885
