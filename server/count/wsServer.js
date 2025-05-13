import { WebSocketServer } from "ws";

const port = Number(process.env.WEBSOCKET_SERVER_PORT || 8081)
const wss = new WebSocketServer({ port });
wss.on("connection", (ws) => {
  console.log("connected");
  broadcastCount();

  ws.on("close", () => {
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
