# 🐶 Doguito Petshop Admin

<div align="center">

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-green.svg?style=for-the-badge)
[![Deployed on Vercel](https://img.shields.io/badge/deployed%20on-Vercel-black.svg?style=for-the-badge&logo=vercel)](https://crud-liart.vercel.app/)
[![API Status](https://img.shields.io/badge/API-online-success.svg?style=for-the-badge&logo=render)](https://crud-api-emg1.onrender.com/)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

<h3>✨ Sistema de administración completo para una tienda de mascotas</h3>
<p>Una solución integral para gestionar clientes, productos y mascotas</p>

<br>

[🚀 Ver Demo](https://doguito.devsandoval.me/) | [🔧 API Demo](https://crud-api-emg1.onrender.com/)

</div>

<hr>

## 📱 Demo Interactivo

<div align="center">
   <img src="./assets/img/mockup/desktop.png" alt="Doguito Petshop Admin Demo" width="800"/>
</div>

## ✅ Características Principales

<table>
  <tr>
    <td>
      <h3>📋 Gestión Completa</h3>
      <ul>
        <li>✅ CRUD completo y optimizado</li>
        <li>✅ Validación de formularios</li>
        <li>✅ Notificaciones interactivas</li>
      </ul>
    </td>
    <td>
      <h3>👤 Clientes</h3>
      <ul>
        <li>✅ Agregar nuevos clientes</li>
        <li>✅ Actualizar información</li>
        <li>✅ Gestión de cuentas</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>
      <h3>🛍️ Productos</h3>
      <ul>
        <li>✅ Catálogo de productos</li>
        <li>✅ Precio y descripciones</li>
        <li>✅ Gestión de inventario</li>
      </ul>
    </td>
    <td>
      <h3>🐾 Mascotas</h3>
      <ul>
        <li>✅ Registro de mascotas</li>
        <li>✅ Asociación con dueños</li>
        <li>✅ Historial completo</li>
      </ul>
    </td>
  </tr>
</table>

## 🔧 Tecnologías Utilizadas

<div align="center">

### 🌐 Frontend

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![ES Modules](https://img.shields.io/badge/ES_Modules-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Responsive Design](https://img.shields.io/badge/Responsive_Design-7952B3?style=flat-square&logo=bootstrap&logoColor=white)

### ⚙️ Backend

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![JSON Server](https://img.shields.io/badge/JSON_Server-000000?style=flat-square&logo=json&logoColor=white)
![REST API](https://img.shields.io/badge/REST_API-FF6C37?style=flat-square&logo=postman&logoColor=white)

### 🛠️ Herramientas

![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=flat-square&logo=render&logoColor=white)
![NPM](https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)

</div>

## 💻 Instalación Rápida

```bash
# 1. Clona el repositorio
git clone https://github.com/sandovaldavid/CRUD.git
cd CRUD

# 2. Instala las dependencias
npm install

# 3. Inicia el entorno de desarrollo
npm run dev
```

### 🚀 Servidor de desarrollo

-   🔌 **API**: http://localhost:3000
-   🌐 **Frontend**: http://localhost:5000

## 🔄 Flujo de trabajo

```mermaid
flowchart TD
    A[Cliente] -->|Accede| B[Dashboard]
    B --> C{Selecciona módulo}
    C -->|Clientes| D[Gestión de Clientes]
    C -->|Productos| E[Gestión de Productos]
    C -->|Mascotas| F[Gestión de Mascotas]
    D --> G[CRUD Clientes]
    E --> H[CRUD Productos]
    F --> I[CRUD Mascotas]
    G --> J[Confirmación]
    H --> J
    I --> J
```

## 🌐 Despliegue

<table>
  <tr>
    <th>📱 Frontend</th>
    <th>⚙️ Backend (API)</th>
  </tr>
  <tr>
    <td>
      <h4>Vercel (Recomendado)</h4>
      <ol>
        <li>Conecta tu repo de GitHub a Vercel</li>
        <li>Vercel detectará la configuración automáticamente</li>
        <li>Despliega con un solo click</li>
      </ol>
    </td>
    <td>
      <h4>Render</h4>
      <ol>
        <li>Crea un Web Service en Render</li>
        <li>Configura: <code>npm install</code> como Build Command</li>
        <li>Configura: <code>npm run deploy:backend</code> como Start Command</li>
      </ol>
    </td>
  </tr>
  <tr>
    <td>
      <h4>Netlify</h4>
      <ol>
        <li>Conecta tu repositorio</li>
        <li>Build command: <code>npm run build</code></li>
        <li>Publish directory: <code>dist</code></li>
      </ol>
    </td>
    <td>
      <h4>Railway</h4>
      <ol>
        <li>Conecta tu repositorio a Railway</li>
        <li>Railway detectará el <code>package.json</code></li>
        <li>Usará <code>npm run deploy:backend</code> automáticamente</li>
      </ol>
    </td>
  </tr>
</table>

## 📖 Documentación

Para obtener más información sobre el proyecto, consulta:

-   [📝 Notas de lanzamiento (v2.0.0)](https://github.com/sandovaldavid/CRUD/releases/tag/v2.0.0)
-   [🔧 API Endpoints](https://crud-api-emg1.onrender.com/)

## 🤝 Contribución

¿Quieres contribuir? ¡Genial! Sigue estos pasos:

1. 🍴 Haz un Fork del proyecto
2. 🔧 Crea una rama para tu función (`git checkout -b feature/amazing-feature`)
3. 💻 Realiza tus cambios y haz commit (`git commit -m 'Add amazing feature'`)
4. 📤 Sube los cambios (`git push origin feature/amazing-feature`)
5. 📩 Abre un Pull Request

## 🚧 Próximos pasos

-   [ ] 📱 Interfaz responsiva mejorada para dispositivos móviles
-   [ ] 🌙 Modo oscuro
-   [ ] 🔍 Búsqueda avanzada en listas
-   [ ] 📊 Panel de estadísticas

## 📄 Licencia

<div align="center">

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

</div>

---

## 👨‍💻 Autor

<div align="center">
  <img src="https://github.com/sandovaldavid.png" width="100px" style="border-radius: 50%;">
  <h3>David Sandoval</h3>

[![Portfolio](https://img.shields.io/badge/Portfolio-255E63?style=for-the-badge&logo=About.me&logoColor=white)](https://devsandoval.me)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/devsandoval)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/sandovaldavid)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:contact@devsandoval.me)

</div>

---

> **Nota**: Este proyecto fue creado con fines educativos y de entretenimiento. Siéntete libre de
> utilizarlo y modificarlo según tus necesidades.
