const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'CRUD de Productos y Categorías',
      version: '1.0.0',
      description: 'Documentación del API CRUD con Node.js y MySQL',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./routes/*.js'], // Ruta a tus archivos de rutas donde están los endpoints
}

const swaggerSpec = swaggerJSDoc(options)

function swaggerDocs(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
}

module.exports = swaggerDocs
