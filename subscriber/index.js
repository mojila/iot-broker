const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://66.42.59.115:8000', { username: 'coba', password: 'coba' })

client.on('connect', function() {
  console.log('subscriber connected..')

  client.subscribe('GIOT-GW/DL/')
})

client.on('message', function(_topic, message) {
  console.log(message.toString())
})