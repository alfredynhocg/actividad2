# NovaBuild — Landing Page

Sitio web estático de una sola página para la empresa NovaBuild. Desarrollado con HTML, CSS y JavaScript vanilla, sin dependencias externas.

## Estructura

```text
dev/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   └── fonts/
└── readme.md
```

## Secciones

- **Hero** — título principal, subtítulo y estadísticas
- **Servicios** — grilla de 6 tarjetas
- **Nosotros** — descripción del equipo y valores
- **Testimonios** — 3 reseñas de clientes
- **Contacto** — formulario y datos de contacto
- **Footer** — links y legal

## Cómo correrlo

No requiere instalación ni servidor. Abre `index.html` directamente en el navegador.

Si prefieres un servidor local:

```bash
# Python
python -m http.server 3000

# Node
npx serve .
```

Luego entra a `http://localhost:3000`.

## Personalización

Las variables de color, tipografía y espaciado están centralizadas al inicio de `css/styles.css` dentro de `:root`. Cambiar esas variables afecta todo el sitio.

```css
:root {
  --color-primary: #2563eb;
  --color-text:    #1e293b;
  --max-width:     1200px;
}
```

## Equipo

| Nombre             | Rol                          |
| ------------------ | ---------------------------- |
| Alfredo Callizaya  | Co-fundador & Tech Lead      |
| Rolando Cahuasiri  | Co-fundador & Lead Designer  |
| Nataly Casana      | Growth & Marketing           |
