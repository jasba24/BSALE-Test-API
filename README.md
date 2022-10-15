# BSALE Test API

### Desarrollado con las siguientes tecnologías

- Node.js
- Express
- Express-myconnection
- Mysql
- Dotenv

###### Usando Node.js como lenguaje principal y el framework Express.js para controlar las rutas; la librería Express-myconnection es usada para gestionar las conexiones a la Base de datos Mysql y Dotenv es usado para gestionar las variables de entorno

## Rutas de la API
- **GET** /api/category/: Obtener todas las categorías de la API
- **GET** /api/products/: Obtener todos los productos de la API
- **GET** /api/products/:category: Obtener los productos correspondientes a la categoría indicada en el parámetro.
- **GET** /api/products/search/:name: Obtener los productos correspondientes al parámetro de búsqueda.
