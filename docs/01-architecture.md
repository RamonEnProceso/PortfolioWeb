# Arquitectura
> Estructura de carpetas del repositorio.

## Organización

```
.
├── docs/                   # Documentación del proyecto
├── public/
│   ├── assets/             # Imágenes varias
│   ├── background/         # Imágenes de fondo de la página
│   ├── CVs/                # Currículums en PDF y ODT
│   ├── icons/              # Iconos de lenguajes, tecnologías y redes
│   ├── images/             # Fotos de perfil
│   ├── thumbnails/         # Miniaturas de los proyectos
│   └── video/              # Screencasts de los proyectos
├── src/
│   ├── assets/
│   │   └── JSONs/          # Datos: profile, projects y programmingAssets
│   ├── features/           # Componentes organizados por sección
│   │   ├── 00 - Header/    # Nombre, bio y redes
│   │   ├── 01 - AboutMe/   # Descripción, CVs
│   │   ├── 02 - Skills/    # Stack, lenguajes, herramientas
│   │   ├── 03 - Projects/  # Proyectos
│   │   ├── 04 - ContactMe/ # Mail y boton para copiarlo
│   │   ├── Background/
│   │   ├── Menu/
│   │   └── PortfolioPage.tsx
│   ├── models/             # Estructuras de datos
│   ├── shared/             # Componentes reutilizables
│   ├── App.tsx
│   ├── index.css
└── └── main.tsx

```
