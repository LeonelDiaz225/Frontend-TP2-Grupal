# Yoda Labs — Trabajo Práctico 2

## Descripción

Este TP2 propone la evolución del sitio colaborativo Yoda Labs, originalmente desarrollado con HTML, CSS y JavaScript, hacia una Single Page Application (SPA) construida con React. La aplicación presenta al equipo, sus perfiles, un árbol visual de componentes, una bitácora de desarrollo, datos locales en JSON con búsqueda y filtros, y una vista que consume una API pública. La navegación se realiza del lado del cliente mediante React Router y conserva una identidad visual espacial, responsive y unificada.

## Instalación y ejecución local

### Requisitos previos

Para ejecutar este proyecto localmente necesitás tener instalado:

- [Node.js](https://nodejs.org/) versión 18 o superior.
- npm, que se instala junto con Node.js.
- Git.

### Clonar el repositorio

Abrí una terminal y ejecutá:

```bash
git clone https://github.com/LeonelDiaz225/Frontend-TP2-Grupal.git
```

Ingresá a la carpeta del proyecto:

```bash
cd Frontend-TP2-Grupal
```

### Instalar dependencias

```bash
npm install
```

### Ejecutar en modo desarrollo

```bash
npm run dev
```

Vite mostrará una dirección similar a:

```text
http://localhost:5173/
```

Abrí esa dirección en el navegador para visualizar la aplicación.

### Compilar para producción

Para verificar que el proyecto compile correctamente:

```bash
npm run build
```

### Previsualizar la compilación

Después de ejecutar el build, podés revisar la versión de producción localmente con:

```bash
npm run preview
```

La aplicación estará disponible en una dirección similar a:

```text
http://localhost:4173/
```

### Actualizar una copia local existente

Si ya clonaste el repositorio anteriormente, podés obtener los últimos cambios con:

```bash
git pull
npm install
npm run dev
```

El comando `npm install` solamente es necesario repetirlo si cambiaron `package.json` o `package-lock.json`.

## Deploy

[DEPLOY](https://frontend-tp-2-grupal.vercel.app/)

## Integrantes

- **Leonel Diaz** — [GitHub](https://github.com/LeonelDiaz225)
- **Maximiliano Millan** — [GitHub](https://github.com/estoesplecto)
- **Itziar Urriola** — [GitHub](https://github.com/itziarurriola)
- **Melisa Solano** — [GitHub](https://github.com/melulu169)
- **Yohana Olivera** — [GitHub](https://github.com/YohaOlivera)



## Declaración de uso de IA

Para la migración a React, la refactorización de componentes y la generación de los datos JSON se utilizó asistencia de herramientas de inteligencia artificial, incluyendo Cursor/Copilot y Claude/ChatGPT. La asistencia fue utilizada como apoyo durante el análisis, la organización de la arquitectura, la implementación y la revisión del código. Las decisiones finales, integración y validación del proyecto fueron realizadas por el equipo.
