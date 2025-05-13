import { WebSocketServer } from "ws";

const port = Number(process.env.PORT) || 8083;
const wss = new WebSocketServer({ port });

wss.on("connection", (ws) => {
  console.log("New client connected");

  broadcastCount();

  ws.on("message", (message) => {
    try {
      const data = JSON.parse(message.toString());

      if (data.type === "connection") {
        console.log(`${data.senderName} connected`);
        broadcastCount();
        return;
      }

      if (data.type === "getCount") {

        ws.send(
          JSON.stringify({
            type: "count",
            count: wss.clients.size,
          })
        );
        return;
      }

      if (data.type === "chat") {
        // broadcasting to all clients except sender
        wss.clients.forEach((client) => {
          if (client !== ws && client.readyState === ws.OPEN) {
            client.send(
              JSON.stringify({
                type: "chat",
                text: data.text,
                senderId: data.senderId,
                senderName: data.senderName,
              })
            );
          }
        });
      }
    } catch (e) {
      console.error("Bad message:", e);
    }
  });

  ws.on("close", () => {
    console.log("Client disconnected");
    broadcastCount();
  });
});

function broadcastCount() {
  const count = wss.clients.size;
  const countMessage = JSON.stringify({
    type: "count",
    count: count,
  });

  wss.clients.forEach((client) => {
    if (client.readyState === client.OPEN) {
      client.send(countMessage);
    }
  });

  console.log("Broadcasted count:", count);
}

console.log(`WebSocket server running on port ${port}`);
