const db = require('../config/db');

exports.getAll = (req, res) => {
  const sql = `
    SELECT products.*, categories.name AS category_name
    FROM products
    LEFT JOIN categories ON products.category_id = categories.id
  `;
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};


exports.getById = (req, res) => {
  const sql = `
    SELECT products.*, categories.name AS category_name
    FROM products
    LEFT JOIN categories ON products.category_id = categories.id
    WHERE products.id = ?
  `;
  db.query(sql, [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results[0]);
  });
};


exports.create = (req, res) => {
  const { name, description, price, category_id } = req.body;
  if (!name || !price || !category_id) {
    return res.status(400).json({ error: 'Los campos nombre, precio y categoría son obligatorios' });
  }
  try{
    db.query('INSERT INTO products (name, description, price, category_id) VALUES (?, ?, ?,?)',
        [name, description, price, category_id], (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.status(201).json({ message: 'Producto creado', id: results.insertId });
        });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el producto' });
  }
};

exports.update = (req, res) => {
  const { name, description, price, category_id } = req.body;
   if (!name || !price || !category_id) {
    return res.status(400).json({ error: 'Los campos nombre, precio y categoría son obligatorios' });
  }
  try {
    db.query('UPDATE products SET name = ?, description = ?, price = ?, category_id = ? WHERE id = ?',
        [name, description, price, category_id, req.params.id], (err) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: 'Producto actualizado' });
        });
    }catch (error) {
      res.status(500).json({ error: 'Error al actualizar el producto' });
    }
};

exports.remove = (req, res) => {
  db.query('DELETE FROM products WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Producto eliminado' });
  });
};
