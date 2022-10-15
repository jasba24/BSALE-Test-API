const categoryRouter = require('express').Router()

categoryRouter.get('/', (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM category', (err, category) => {
      if (err) {
        res.json(err)
      } else {
        res.json(category)
      }
    })
  })
})

module.exports = categoryRouter