<!-- # React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
``` -->

# 📦 Proyecto [Rimac Challenge]

Este proyecto es una aplicación web desarrollada con tecnologías modernas del ecosistema JavaScript y TypeScript, enfocada en el rendimiento, la escalabilidad y buenas prácticas de desarrollo.

## 🚀 Tecnologías utilizadas

A continuación se detallan las tecnologías y herramientas principales empleadas en este proyecto:

- **React** ⚛️  
  Biblioteca para construir interfaces de usuario basadas en componentes reutilizables.

- **Vite** ⚡  
  Herramienta de desarrollo ultrarrápida para proyectos frontend. Se utilizó para empaquetar y servir el proyecto con tiempos de recarga instantánea.

- **Redux Toolkit** 🛠️  
  Se usó para manejar el estado global de forma eficiente y escalable, con una configuración sencilla y mantenible.

- **Axios** 🌐  
  Cliente HTTP utilizado para realizar solicitudes a APIs externas de manera sencilla y con interceptores configurables.

- **TypeScript** 📘  
  Superset de JavaScript que proporciona tipado estático, ayudando a prevenir errores y mejorar la mantenibilidad del código.

- **Clean Code** 🧼  
  Se siguieron principios de **Clean Code** para escribir código limpio, legible y fácil de mantener.

- **React Hook Form** 📝  
  Utilizado para gestionar formularios de manera eficiente con validaciones simples y rendimiento optimizado.

- **Tailwind CSS** 🎨  
  Framework de utilidades CSS que permite construir interfaces modernas y responsivas rápidamente.

- **ESLint** 🧹  
  Herramienta de análisis estático para mantener un código consistente y libre de errores comunes.

- **Tests Unitarios** 🧪  
  Se escribieron pruebas unitarias para asegurar la calidad y confiabilidad del código, usando bibliotecas como `Jest` o `React Testing Library`.

## 📁 Estructura del Proyecto
```txt
src/
├── components/       # Componentes reutilizables
├── lib/              # Libreria de terceros
├── hooks/            # Hooks personalizados
├── services/         # Servicios y lógica de negocio
├── store/            # Configuración de Redux Toolkit
├── modules/          # modularizacion con clean architecture
├── layout/           # Definicion del componente layout
├── utils/            # Funciones utilitarias
└── assets/           # Imagenes utilizadas en el proyecto

El proyecto sigue una estructura modular y organizada por características, permitiendo una mejor escalabilidad y mantenimiento a largo plazo.



## 🧑‍💻 Cómo ejecutar el proyecto

```bash
# Instalar dependencias
npm install

# Ejecutar en entorno de desarrollo
npm run dev

# Ejecutar pruebas
npm run test

