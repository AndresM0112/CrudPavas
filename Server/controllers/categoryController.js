const db = require('../config/db');

exports.getAll = (req, res) => {
  db.query('SELECT * FROM categories', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getById = (req, res) => {
  db.query('SELECT * FROM categories WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results[0]);
  });
};

exports.create = (req, res) => {
  const { name } = req.body;
  db.query('INSERT INTO categories (name) VALUES (?)', [name], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: 'Categoría creada', id: results.insertId });
  });
};

exports.update = (req, res) => {
  const { name } = req.body;
  db.query('UPDATE categories SET name = ? WHERE id = ?', [name, req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Categoría actualizada' });
  });
};

exports.remove = (req, res) => {
  db.query('DELETE FROM categories WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Categoría eliminada' });
  });
};
