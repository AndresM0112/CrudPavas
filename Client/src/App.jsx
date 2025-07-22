import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './components/home'
import ProductList from './components/ProductList'
import CategoryList from './components/categoryList'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function App() {
  return (
    <div className="p-4">
      <nav className="nav-menu mb-4">
        <Link to="/" className="nav-link">Inicio</Link>
        <Link to="/productos" className="nav-link">Productos</Link>
        <Link to="/categorias" className="nav-link">Categorías</Link>
      </nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<ProductList />} />
        <Route path="/categorias" element={<CategoryList />} />
      </Routes>
    <ToastContainer />
    </div>

    
  )
}
