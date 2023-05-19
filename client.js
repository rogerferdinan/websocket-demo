const WebSocket = require("ws")

let clients = [
  new WebSocket('ws://localhost:8080')
]

clients.map(client => {
  client.on('open', () => {
    client.send("something")
  })
  client.on('message', (data) => {
    console.log('received: %s', data)
  })
})
