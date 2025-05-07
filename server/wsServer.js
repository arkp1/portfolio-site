import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({port: 8081});

wss.on('connection', (ws) => {
    console.log("connected")
    broadcastCount()

    ws.on('close', (ws) => {
        console.log("disconnected")  
        broadcastCount()
    })
})

function broadcastCount() {
    const count = wss.clients.size;
    console.log("broadcasting count: " + count)
    for (const client of wss.clients) {
        if (client.readyState === 1) {
            client.send((count.toString()));
        }
    }
}
