const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://broker:443')

client.on('connect', function() {
  console.log('subscriber connected..')

  client.subscribe('topic')
})

client.on('message', function(_topic, message) {
  console.log(message.toString())
})