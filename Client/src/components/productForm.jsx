import { useState, useEffect } from 'react'
import axios from 'axios'
import "./styles/Styles.css"
import { toast } from 'react-toastify'

export default function ProductForm({ product, onSuccess, onCancel }) {
  const [name, setName] = useState(product ? product.name : '')
  const [description, setDescription] = useState(product ? product.description : '')
  const [price, setPrice] = useState(product ? product.price : '')
  const [categoryId, setCategoryId] = useState(product ? product.category_id : '')
  const [categories, setCategories] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    axios.get('http://localhost:3001/categories')
      .then(res => setCategories(res.data))
      .catch(err => console.error(err))
  }, [])

  useEffect(() => {
    if (product) {
      setName(product.name)
      setDescription(product.description)
      setPrice(product.price)
      setCategoryId(product.category_id)
    }
  }, [product])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name.trim() || !description.trim() || !price || !categoryId) {
      setError('Todos los campos son obligatorios')
      return
    }
    if (isNaN(price) || Number(price) <= 0) {
      setError('El precio debe ser un número positivo')
      return
    }
    setLoading(true)
    try {
      if (product) {
        await axios.put(`http://localhost:3001/products/${product.id}`, {
          name,
          description,
          price: Number(price),
          category_id: categoryId
        })
      } else {
        await axios.post('http://localhost:3001/products', {
          name,
          description,
          price: Number(price),
          category_id: categoryId
        })
      }
      setError(null)
      if (onSuccess) onSuccess()
        toast.success(`Producto ${product ? 'actualizado' : 'creado'} con éxito, veras la lista de 
      productos al final de la pagina`);
      if (!product) {
        setName('')
        setDescription('')
        setPrice('')
        setCategoryId('')
      }
    } catch (err) {
      setError('Error al guardar producto')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="form-card">
      <form onSubmit={handleSubmit} className="form-container">
        <h3 className="form-title">{product ? 'Editar Producto' : 'Crear Producto'}</h3>
        <input
          className="form-input"
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <textarea
          className="form-textarea"
          placeholder="Descripción"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <input
          className="form-input"
          type="number"
          placeholder="Precio"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <select
          className="form-select"
          value={categoryId}
          onChange={e => setCategoryId(e.target.value)}
        >
          <option value="">Seleccione categoría</option>
          {categories.map(cat => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
        {error && <p className="form-error">{error}</p>}
        <div className="form-buttons">
          <button className="form-button" type="submit" disabled={loading}>
            {loading ? 'Guardando...' : 'Guardar'}
          </button>
          {product && (
            <button className="form-button cancel-button" type="button" onClick={onCancel}>
              Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

