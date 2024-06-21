const json_server = require('json-server') // imported

// server creation
const bookServer = json_server.create()

// create middleware for convert json to javaScript
const middleware = json_server.defaults()

// add router to pass the requests to db.json file
const router = json_server.router('db.json')

// connect server with frontend
const cors = require('cors') // imported 

// connect
bookServer.use(cors())

// apply middleware
bookServer.use(middleware)

// apply router
bookServer.use(router)

// set Port
const PORT = 8000

// Run the server
bookServer.listen(PORT, () => {
    console.log(`______Book Server Started At Port Number ${PORT}______`);
})