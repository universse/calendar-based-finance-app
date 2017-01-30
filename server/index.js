var express = require('express')
var expressStaticGzip = require('express-static-gzip')
const paths = require('../config/paths')

const app = express()
const PORT = process.env.PORT || 8080

app.use('/', expressStaticGzip(paths.build))

app.get('*', function (req, res) {
  res.sendFile(paths.builtHtml)
})

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT)
})
