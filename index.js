const app = require('./app')

app.use(require('./routes/index.routes'))
// app.use(require('./routes/pages.routes'))

// app.listen(app.get('port'))
app.start = app.listen = function () {
  return server.listen.apply(server, arguments)
}

app.start(app.get('port'))
console.log('Server is in port', app.get('port'))
