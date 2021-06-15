const WebSocket = require('ws');
const wsServer = new WebSocket.Server({port: 9000});

wsServer.on('connection', onConnect);

function onConnect(wsClient) {
  setInterval(function() {
    wsClient.send(JSON.stringify(
      {localTime: (new Date()).toISOString().slice(0, 19).replace(/-/g, "-").replace("T", " "),
      temperature: Math.floor(Math.random() * 10 * 3)}
    ));
  }, 1000)
}



