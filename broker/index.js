const mosca = require('mosca')
const settings = {
  port: 443
}
const server = new mosca.Server(settings)

server.on('ready', function() {
  console.log('ready..')
})