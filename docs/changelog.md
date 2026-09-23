# Historial de Cambios
> Todas las modificaciones que se fueron agregando al proyecto.

### v0.1.3 - 2026-09-23
- Agregar separador entre secciones
- Corrección de espaciados y márgenes
- Agregar boton de vez más en el apartado de proyectos

### v0.1.2 - 2026-09-22
- Adaptar interfaz a dispositivos móviles
- Arreglar error de React (añadir keys a `arrays`)
- Añadir márgenes para el fondo
- Eliminar el fondo placeholder
- Cambiar formato de mostrar mails para evitar `Email Grabbers`
- Añadir sección de contacto
- Añadir boton de copiar mail con imágen interactiva

### v0.1.1 - 2026-09-16
- Añadir botón para traducir página sin recargarla
- Añadir Menú superior para navegar rápidamente
- Mejorar interfaz y añadir efectos de componentes
- Refactorizar parámetros de componentes de la página
    - Integrar datos del componente padre en una sola estructura
    - Componentes hijos solo leen las variables dentro
    - Mejorar legibilidad
- Añadir descripción a proyectos, con párrafos
- Agregar ventana para ver más detalles de proyectos
- Agregar `prewies` de proyectos
- Arreglar centralizado de página

## v0.1.0 - MVP
> Base del Portfolio

### v0.0.2 - 2026-09-15
> Continuando MVP
- Creción de sección Proyectos
    - Cards de Proyectos
        - Botones de `Github` y `Página`
        - Display de ventana con más datos
        - Mostrar miniaturas
        - Mostrar lenguajes
- Añadir `style` en cada componente
- Añadir minaturas de todos los proyectos
    - Modificar rutas de `Proyects.json` para mostrarlas
- Añadir `headline` y `altPhoto` a Profile

### V0.0.1 - 2026-09-14
> Creando MVP
- Creación de estructuras de datos:
    - Perfil
    - Proyectos
    - Idiomas
    - Assets
    - Redes Sociales
- Creación de `.json`s para la lectura de datos
    - Perfil
    - Proyectos
    - Assets
- Agregar *CVs* en `.PDF` y `.odt`
- Agregar componente `profileHeader.tsx` con datos de perfil y traducción dinámica
    - Agregar botón de descargar CV