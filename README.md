# CRUD de Productos y Categorías

Este es un proyecto Full Stack que consiste en un sistema de gestión de productos y categorías. Está desarrollado con **React.js** en el frontend, **Node.js/Express** en el backend y **MySQL** como base de datos. Además, la API cuenta con documentación interactiva generada con **Swagger**.

## 🚀 Características

- CRUD completo de productos y categorías.
- API RESTful.
- Conexión a base de datos MySQL.
- Documentación con Swagger UI.
- Separación de frontend y backend.

---

## 📁 Estructura del proyecto

```
/client              # Frontend en React
/server
  |-- /controllers   # Lógica de negocio
  |-- /routes        # Endpoints
  |-- /models        # Modelos de datos
  |-- /config        # Conexión a la base de datos
  |-- index.js       # Punto de entrada del backend
  |-- swagger.js     # Configuración de Swagger
.env                 # Variables de entorno
```

---

## 🔧 Instalación y configuración

### 1. Clona el repositorio

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
```

### 2. Instala las dependencias

#### Backend (en `/server`):

```bash
cd server
npm install
```

#### Frontend (en `/client`):

```bash
cd ../client
npm install
```

---

### 3. Configura las variables de entorno

Crea un archivo `.env` en la carpeta `/server` con el siguiente contenido:

```
PORT=3001
DB_HOST=localhost
DB_USER=tu_usuario_mysql
DB_PASSWORD=tu_contraseña
DB_NAME=nombre_base_datos
```

---

## ▶️ Ejecución del proyecto

### Backend

Desde la carpeta `/server`:

```bash
npm start
```

El backend correrá en: `http://localhost:3001`

Documentación Swagger: `http://localhost:3001/api-docs`

---

### Frontend

Desde la carpeta `/client`:

```bash
npm start
```

El frontend correrá en: `http://localhost:3000`

---

## 📄 Documentación con Swagger

La documentación de la API se genera automáticamente con Swagger y está disponible en:

```
http://localhost:3001/api-docs
```

Aquí podrás probar los endpoints directamente desde el navegador.

---

## ✅ Requisitos

- Node.js
- MySQL
- npm

---

