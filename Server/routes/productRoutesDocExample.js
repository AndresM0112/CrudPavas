
/**
 * @swagger
 * tags:
 *   name: Productos
 *   description: Endpoints para productos
 */

/**
 * @swagger
 * /productos:
 *   get:
 *     summary: Obtener todos los productos
 *     tags: [Productos]
 *     responses:
 *       200:
 *         description: Lista de productos.
 */

/**
 * @swagger
 * /productos:
 *   post:
 *     summary: Crear un nuevo producto
 *     tags: [Productos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               precio:
 *                 type: number
 *               categoriaId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Producto creado exitosamente.
 */

/**
 * @swagger
 * /productos/{id}:
 *   put:
 *     summary: Actualizar un producto existente
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               precio:
 *                 type: number
 *               categoriaId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Producto actualizado.
 */

/**
 * @swagger
 * /productos/{id}:
 *   delete:
 *     summary: Eliminar un producto
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Producto eliminado exitosamente.
 */
