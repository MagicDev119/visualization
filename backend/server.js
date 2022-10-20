const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config({ path: "./config.env" })
require('./db/conn')
const port = process.env.PORT || 5000
const bodyParser = require('body-parser')
const routes = require('./routes')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api', routes)
// get driver connection

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.use((err, req, res, next) => {
  res.status(500).json(err);
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})