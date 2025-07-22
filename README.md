# CRUD de Productos y Categorías

Este proyecto es una aplicación CRUD (Create, Read, Update, Delete) para la gestión de productos y categorías, desarrollada con **React.js**, **Node.js** y **MySQL**. Incluye un frontend moderno, un backend con API REST y conexión a base de datos relacional.

## 🚀 Funcionalidades

- Crear, editar, eliminar y listar productos.
- Crear, editar, eliminar y listar categorías.
- Asociación de productos con categorías.
- Confirmación al eliminar elementos.
- Notificaciones amigables con `react-toastify`.
- Estilos personalizados con CSS.

## 🛠 Tecnologías utilizadas

### Frontend
- React.js (Vite)
- Axios
- React Router DOM
- React Toastify

### Backend
- Node.js
- Express.js
- MySQL2
- CORS

### Base de datos
- MySQL

## 📁 Estructura del proyecto

```
/crud-app
├── backend/
│   ├── index.js
│   ├── routes/
│   └── controllers/
├── frontend/
│   └── src/
│       ├── components/
│       │   ├── ProductList.jsx
│       │   ├── ProductForm.jsx
│       │   ├── CategoryList.jsx
│       │   ├── CategoryForm.jsx
│       ├── pages/
│       │   ├── Home.jsx
│       │   ├── Productos.jsx
│       │   └── Categorias.jsx
│       ├── App.jsx
│       ├── main.jsx
│       └── styles/
│           └── Styles.css
```

## ⚙️ Configuración del entorno

### Clona el repositorio

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
```

### Configura el Backend

```bash
cd backend
npm install
```

Crea un archivo `.env` (si lo usas) o ajusta los valores de conexión directamente en el código para conectarte a tu base de datos MySQL:

```env
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=crud_db
PORT=3001
```

Ejecuta el servidor:

```bash
node index.js
```

### Configura el Frontend

```bash
cd frontend
npm install
npm run dev
```

Abre tu navegador en [http://localhost:5173](http://localhost:5173)

## ✅ Estado del proyecto

✅ Completado – Listo para usar y extender con autenticación u otras entidades.

## 📄 Licencia

Este proyecto se distribuye bajo la licencia MIT.
