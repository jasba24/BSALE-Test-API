const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const myConnection = require('express-myconnection')

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

app.use(myConnection(mysql, db_config, 'single'))

app.listen(3000, () => {
  console.log('Server running')
})
