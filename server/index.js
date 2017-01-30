var express = require('express')
const paths = require('../config/paths')

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.static(paths.build))

app.get('*', function (req, res) {
  res.sendFile(paths.builtHtml)
})

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz'
  res.set('Content-Encoding', 'gzip')
  next()
})

app.get('*.css', function (req, res, next) {
  req.url = req.url + '.gz'
  res.set('Content-Encoding', 'gzip')
  next()
})

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT)
})
