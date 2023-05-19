const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const routes = require('./routes')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes)

app.listen(process.env.PORT, () => console.log('app listening on port ' + process.env.PORT + '!'))

module.exports = {
  app
}