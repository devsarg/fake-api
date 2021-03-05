const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const port = 3001

server.use(jsonServer.bodyParser)
server.use(middlewares)

server.listen(port, () => {
    console.log('JsonServer is running on port: ' + port)
})

server.get('/users', (request, response) => {
    if (request.method === 'GET') {
      const users = require('./users/index')
      response.status(200).jsonp(users())
    }
})

