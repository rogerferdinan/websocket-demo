const WebSocket = require("ws")
const server = new WebSocket.Server({
  port:8080
})

let users = ["Budi", "budi", "Ariya", "ariya", "Hendra", "hendra", "Gunawan", "Oktovia", 'oktovia']
let messages = [
  "You say potatoe, I say starchy carbs",
  "For the name of an act as serious as killing someone, assassination literally translates to buttbuttination",
  "We say we are walking the dog, but the dog always leads",
  "Pantone is a colour but also the singular version of pants",
  "If Fantasy Hockey actually lived up to its name, every team would have Henrik Lundqvist and Joffrey Lupul on it",
  "Curling is the best sport named after something you do to your hair",
  "Why don't we call glasses duocles",
  "If a dog and cat had a baby together that grew up and worked a desk job he'd be a Cog in the machine",
  "Curling is the best sport named after something you do to your hair",
  "I'm still upset that Tie Domi didn't name his child Tyson"
]

function getRandomItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

let sockets = []
server.on('connection', (ws, req) => {
  const interval = setInterval(() => {
    const message_object = {
     "username": getRandomItem(users),
     "message": getRandomItem(messages),
     "timestamp": new Date().getTime()
    }
    ws.send(JSON.stringify(message_object))
  },  100);
  ws .on("close", () => {
    console.log("Disconnected")
    clearInterval(interval)
  })
})
