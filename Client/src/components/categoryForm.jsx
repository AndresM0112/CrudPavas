import { useState, useEffect } from 'react'
import "./styles/Styles.css"
import axios from 'axios'
import { toast } from 'react-toastify'


export default function CategoryForm({ category, onSuccess, onCancel }) {
  const [name, setName] = useState(category ? category.name : '')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (category) {
      setName(category.name)
    }
  }, [category])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name.trim()) {
      toast.error('El nombre es obligatorio')
      return
    }

    setLoading(true)
    try {
      if (category) {
        await axios.put(`http://localhost:3001/categories/${category.id}`, { name })
        toast.success('Categoría actualizada con éxito')
      } else {
        await axios.post('http://localhost:3001/categories', { name })
        toast.success('Categoría creada con éxito')
        setName('')
      }
      if (onSuccess) onSuccess()
    } catch (err) {
      toast.error('Error al guardar categoría')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
   <form className="category-form" onSubmit={handleSubmit}>
  <h3>{category ? 'Editar Categoría' : 'Crear Categoría'}</h3>

  <input
    className="category-input"
    type="text"
    placeholder="Nombre"
    value={name}
    onChange={e => setName(e.target.value)}
  />
  <div className="form-actions">
    {category && (
      <button type="button" onClick={onCancel} className="btn-cancel">
        Cancelar
      </button>
    )}
    <button type="submit" className="btn-submit" disabled={loading}>
      {loading ? 'Guardando...' : 'Guardar'}
    </button>
  </div>
</form>
  )
}
