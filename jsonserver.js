const jsonServer = require('json-server');
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const cors = require('cors')
const server = jsonServer.create()

server.use(cors())
server.use(middlewares)
server.use(router)

const port = process.env.PORT || 3001

server.listen(port, () => {
  console.log(`JSON server is running on port: ${port}`)
})