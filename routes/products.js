const productsRouter = require('express').Router()

productsRouter.get('/', (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM product', (err, products) => {
      if (err) {
        res.json(err)
      } else {
        res.json(products)
      }
    })
  })
})

productsRouter.get("/:category", (req, res) => {
  const category = req.params.category
  req.getConnection((err, conn) => {
    conn.query(`SELECT * FROM product WHERE category = ${category}`, (err, products) => {
      if (err) {
        res.json(err)
      } else {
        res.json(products)
      }
    })
  })
})

productsRouter.get("/search/:name", (req, res) => {
  const name = req.params.name
  req.getConnection((err, conn) => {
    conn.query(`SELECT * FROM product WHERE name LIKE "${name}%"`, (err, products) => {
      if (err) {
        res.json(err)
      } else {
        res.json(products)
      }
    })
  })
})

module.exports = productsRouter
