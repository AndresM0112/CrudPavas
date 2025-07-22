import { useEffect, useState } from 'react'
import axios from 'axios'
import ProductForm from './productForm'
import { toast } from 'react-toastify';


export default function ProductList() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [editingProduct, setEditingProduct] = useState(null)

  const fetchProducts = () => {
    setLoading(true)
    axios.get('http://localhost:3001/products')
      .then(res => {
        setProducts(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setError('Error al cargar productos')
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const deleteProduct = async (id) => {
    const confirmar = window.confirm('¿Estás seguro de eliminar este producto?');
  if (!confirmar) return;
    try {
      await axios.delete(`http://localhost:3001/products/${id}`)
      fetchProducts()
      toast.success('Producto eliminado con éxito');
    } catch (err) {
      console.error(err)
      toast.error('Hubo un error al eliminar el producto');
    }
  }

  const handleEdit = (product) => {
    console.log(product)
    setEditingProduct(product)
  }

  const handleCancelEdit = () => {
    setEditingProduct(null)
  }

  const handleSuccess = () => {
    setEditingProduct(null)
    fetchProducts()
  }

  if (loading) return <p>Cargando productos...</p>
  if (error) return <p>{error}</p>

  return (
       <div className="main-container">
      {/* Formulario */}
      {editingProduct ? (
        <ProductForm
          product={editingProduct}
          onSuccess={handleSuccess}
          onCancel={handleCancelEdit}
        />
      ) : (
        <ProductForm onSuccess={fetchProducts} />
      )}

      {/* Lista de productos */}
      <div className="product-list-container">
        <h2 className="product-list-title">Lista de Productos</h2>
        <ul className="product-list">
          {products.map(product => (
            <li key={product.id} className="product-item">
              <strong>{product.name}</strong> Precio:{product.price}$  Categoría: {product.category_name || 'Sin categoría'}
              <button onClick={() => handleEdit(product)}>Editar</button>
              <button onClick={() => deleteProduct(product.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
