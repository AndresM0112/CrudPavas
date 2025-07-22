import { useEffect, useState } from 'react'
import axios from 'axios'
import CategoryForm from './categoryForm'
import { toast } from 'react-toastify';


export default function CategoryList() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [editingCategory, setEditingCategory] = useState(null)

  const fetchCategories = () => {
    setLoading(true)
    axios.get('http://localhost:3001/categories')
      .then(res => {
        setCategories(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setError('Error al cargar categorías')
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  const deleteCategory = async (id) => {
    const confirmar = window.confirm('¿Estás seguro de eliminar esta categoria?');
  if (!confirmar) return;
    try {
      await axios.delete(`http://localhost:3001/categories/${id}`)
      fetchCategories()
      toast.success('categoria eliminada con éxito');
    } catch (err) {
      console.error(err)
      toast.error('Hubo un error al eliminar la categoria');
    }
  }

  const handleEdit = (category) => {
    setEditingCategory(category)
  }

  const handleCancelEdit = () => {
    setEditingCategory(null)
  }

  const handleSuccess = () => {
    setEditingCategory(null)
    fetchCategories()
  }

  if (loading) return <p>Cargando categorías...</p>
  if (error) return <p>{error}</p>

  return (
   <div className="category-container">
  
    <div className="category-form-wrapper">
      
      {editingCategory ? (
        <CategoryForm
          category={editingCategory}
          onSuccess={handleSuccess}
          onCancel={handleCancelEdit}
        />
      ) : (
        <CategoryForm onSuccess={fetchCategories} />
      )}
    </div>
      <h2 className="category-title">Lista de Categorías</h2>
    <ul className="category-list">
      {categories.map(category => (
        <li key={category.id} className="category-item">
          <span>{category.name}</span>
          <div className="category-actions">
            <button onClick={() => handleEdit(category)}>Editar</button>
            <button onClick={() => deleteCategory(category.id)}>Eliminar</button>
          </div>
        </li>
      ))}
    </ul>
  </div>
  )
}
