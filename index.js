require("dotenv").config()
const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const myConnection = require('express-myconnection')
const categoryRouter = require('./routes/category')
const productsRouter = require('./routes/products')

const app = express()

app.use(cors())
app.use(express.json())

const db_config = {
  connectionLimit: 10,
  host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
  user: 'bsale_test',
  password: 'bsale_test',
  database: 'bsale_test'
}

app.use(
  myConnection(mysql, db_config, "single")
)

app.use('/api/category', categoryRouter)
app.use('/api/products', productsRouter)

app.listen(process.env.PORT || 3000, () => {
  console.log('Server running')
})
