# Proyecto Semilla: Configuración Inicial con Webpack, React, Bootstrap y TypeScript

Este es un **proyecto semilla** diseñado para servir como base para el desarrollo de aplicaciones web con soporte para HTML, CSS (incluyendo Sass), React y TypeScript. La configuración incluye el uso de **Bootstrap** para facilitar el diseño responsivo y la personalización de estilos. Utiliza **Webpack** para gestionar, compilar y optimizar los recursos del proyecto, tanto en entornos de desarrollo como de producción.

---

## 🚀 Características

- **React + TypeScript**: Soporte para componentes en React escritos en TypeScript.
- **HTML**: Soporte completo para plantillas HTML.
- **CSS y Sass**: Compilación y optimización de estilos, con soporte para preprocesadores como Sass.
- **Bootstrap**: Framework CSS para diseño rápido y responsivo.
- **JavaScript Moderno (ES6+)**: Soporte para JavaScript moderno mediante Babel.
- **Imágenes y recursos estáticos**: Gestión automática de imágenes y otros archivos estáticos.
- **Webpack configurado**: Configuración separada para entornos de desarrollo y producción, que incluye optimización del bundle, extracción de CSS y más.
- **Hot Reloading**: Actualización en tiempo real durante el desarrollo.
- **Análisis de Bundle**: Incluye configuración para analizar el tamaño del bundle.

---

## ⚡ Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (v14 o superior)
- [npm](https://www.npmjs.com/) o [Yarn](https://yarnpkg.com/)

---

## 🚧 Instalación

1. **Clona este repositorio**:

   git clone https://github.com/tu-usuario/proyecto-semilla.git

2. **Accede al directorio del proyecto**:

   cd proyecto-semilla

3. **Instala las dependencias**:

   npm install

---

## ▶️ Uso

Modo Desarrollo
Inicia un servidor de desarrollo con recarga en tiempo real:

npm start
El proyecto estará disponible en: http://localhost:3000.

Generar Build para Producción
Crea una versión optimizada del proyecto:

npm run build:prod
Los archivos generados estarán en la carpeta dist.

Análisis de Performance
Para analizar el tamaño de los bundles y optimizar el rendimiento:

npm run build:perf
Esto abrirá un reporte con detalles sobre los archivos generados.

---

## 🦄 Personalización

Puedes personalizar este proyecto:

- Modificando el archivo HTML base (src/index.html).
- Añadiendo tus propios estilos en src/mystyle.scss.
- Creando componentes React personalizados en src/components.
- Importando tus recursos y lógica en src/index.tsx.

---

## 🛠️ Scripts Disponibles

- npm start: Inicia el servidor de desarrollo con Webpack Dev Server.
- npm run build:dev: Genera un build para desarrollo.
- npm run build:prod: Genera un build optimizado para producción.
- npm run build:perf: Genera un build para producción y muestra un análisis del tamaño del bundle.
- npm run type-check: Ejecuta el chequeo de tipos con TypeScript.
- npm run type-check:watch: Ejecuta el chequeo de tipos en modo observación.

---

## 🌐 Tecnologías Utilizadas

- Webpack: Para compilar y agrupar todos los recursos.
- Babel: Para transpilar código JavaScript moderno y JSX.
- React: Para construir la interfaz de usuario.
- TypeScript: Para mejorar la seguridad y la productividad en el desarrollo.
- Bootstrap: Para el diseño responsivo y la creación rápida de componentes.
- Sass: Para facilitar el manejo de estilos avanzados.
- dotenv-webpack: Para gestionar las variables de entorno según el entorno (desarrollo o producción).
