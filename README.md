# Doguito Petshop Admin 🐶

<div align="center">

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)
[![Deployed on Vercel](https://img.shields.io/badge/deployed%20on-Vercel-black.svg?style=flat-square&logo=vercel)](https://crud-liart.vercel.app/)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

Sistema de administración completo para una tienda de mascotas, que permite gestionar clientes,
productos y mascotas.

[Ver Demo](doguito.devsandoval.me) | [Ver API Demo](https://crud-api-emg1.onrender.com/)

</div>

## 🖼️ Demo

<div align="center">
   <img src="./assets/img/mockup/desktop.png" alt="Doguito Petshop Admin Demo" width="800"/>
</div>

## ✨ Características

-   📝 **CRUD completo:** Creación, lectura, actualización y eliminación de registros
-   👤 Gestión de clientes
-   🛍️ Gestión de productos
-   🐾 Gestión de mascotas
-   🔔 Confirmaciones mediante modales
-   🌐 Configuración flexible para despliegue en diferentes entornos
-   🔄 Variables de entorno para fácil migración entre desarrollo y producción

## 🚀 Tecnologías utilizadas

-   **Frontend:**
    -   HTML5, CSS3, JavaScript (ES6+)
    -   Módulos ES6
    -   Diseño responsivo
-   **Backend:**

    -   API REST con json-server
    -   Node.js para el servidor en producción

-   **Herramientas:**
    -   Vercel para despliegue
    -   npm para gestión de paquetes
    -   Git para control de versiones

## 💻 Instalación y Desarrollo Local

1. **Clona este repositorio**

    ```bash
    git clone https://github.com/sandovaldavid/CRUD.git
    cd CRUD
    ```

2. **Instala las dependencias**

    ```bash
    npm install
    ```

3. **Ejecuta el entorno de desarrollo**
    ```bash
    npm run dev
    ```
    Esto iniciará:
    - El servidor json-server en http://localhost:3000
    - El servidor de desarrollo browser-sync en http://localhost:5000

## 🌐 Despliegue en producción

### Frontend (Archivos estáticos)

Puedes desplegar el frontend en servicios como GitHub Pages, Netlify o Vercel.

1. **Genera los archivos de distribución:**

    ```bash
    npm run build
    ```

2. **Los archivos estarán en la carpeta `dist/` listos para ser desplegados.**

#### Opción 1: Despliegue rápido para pruebas

```bash
npm run deploy:frontend
```

#### Opción 2: Despliegue en Vercel (Recomendado)

1. Sube tu proyecto a GitHub
2. Crea una cuenta en [Vercel](https://vercel.com)
3. Importa tu repositorio de GitHub
4. Vercel detectará automáticamente la configuración gracias al archivo `vercel.json`
5. Haz clic en "Deploy" y tu aplicación estará lista

#### Opción 3: GitHub Pages

1. Configura tu repositorio para GitHub Pages
2. Despliega la carpeta `dist` siguiendo
   [estas instrucciones](https://docs.github.com/es/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

#### Opción 4: Netlify

1. Conecta tu repositorio a Netlify
2. Configura el comando de build como `npm run build`
3. Configura el directorio de publicación como `dist`

### Backend (API REST)

Si despliegas en Vercel usando nuestro archivo de configuración, ¡no necesitas desplegar el backend
por separado! Todo funcionará desde la misma URL base.

Para otros servicios, puedes desplegar el backend (json-server) en:

#### Despliegue en Render

1. Crea una cuenta en [Render](https://render.com/)
2. Crea un nuevo Web Service
3. Conecta con tu repositorio de GitHub
4. Configura:
    - Build Command: `npm install`
    - Start Command: `npm run deploy:backend`

#### Despliegue en Railway

1. Crea una cuenta en [Railway](https://railway.app/)
2. Crea un nuevo proyecto desde GitHub
3. Agrega tu repositorio
4. Railway detectará automáticamente el `package.json` y usará `npm run deploy:backend`

### Conectar Frontend con Backend desplegado

Una vez desplegado, puedes cambiar la URL de la API usando la página de configuración incluida en la
aplicación.

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para contribuir:

1. Haz un Fork del proyecto
2. Crea una rama para tu función (`git checkout -b feature/amazing-feature`)
3. Realiza tus cambios y haz commit (`git commit -m 'Add amazing feature'`)
4. Sube los cambios (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

## ⚡ Feature

[ ] 📱 Interfaz responsiva y amigable

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 👨‍💻 Autor

### [David Sandoval](https://github.com/sandovaldavid)

-   🌐 Portafolio: [devsandoval.me](https://devsandoval.me)
-   💼 LinkedIn: [@devsandoval](https://linkedin.com/in/devsandoval)
-   💻 GitHub: [@sandovaldavid](https://github.com/sandovaldavid)
-   📧 Email: [contact@devsandoval.me](mailto:contact@devsandoval.me)

---

Desarrollado por [@sandovaldavid](https://github.com/sandovaldavid)

---

> **Nota**: Este proyecto fue creado con fines educativos y de entretenimiento. Siéntete libre de
> utilizarlo y modificarlo según tus necesidades.
