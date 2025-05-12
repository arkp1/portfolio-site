import { WebSocketServer } from "ws";

const port = process.env.WS_WEBSOCKET_SERVER_PORT
const wss = new WebSocketServer({ port: Number(port) });

wss.on("connection", (ws) => {
  console.log("connected");
  broadcastCount();

  ws.on("close", (ws) => {
    console.log("disconnected");
    broadcastCount();
  });
});

function broadcastCount() {
  const count = wss.clients.size;
  console.log("broadcasting count: " + count);
  for (const client of wss.clients) {
    if (client.readyState === 1) {
      client.send(count.toString());
    }
  }
}
