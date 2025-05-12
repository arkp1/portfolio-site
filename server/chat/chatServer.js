import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8083 });
const clients = new Set();

wss.on("connection", (ws) => {
  console.log("New client connected");
  clients.add(ws);

  ws.on("message", (message) => {
    try {
      const data = JSON.parse(message.toString());

      if (data.type === "connection") {
        console.log(`${data.senderName} connected`);
        return;
      }

      //broadcasting to other clients
      clients.forEach((client) => {
        if (client !== ws && client.readyState === ws.OPEN) {
          client.send(
            JSON.stringify({
              text: data.text,
              senderId: data.senderId,
              senderName: data.senderName,
            })
          );
        }
      });

      console.log("Broadcasted message:", data.text);
    } catch (error) {
      console.error("Error processing message:", error);
    }
  });

  ws.on("close", () => {
    console.log("Client disconnected");
    clients.delete(ws); // Remove client from set
  });

  ws.on("error", (error) => {
    console.error("WebSocket error:", error);
  });
});

console.log("WebSocket server running on ws://localhost:8083");
