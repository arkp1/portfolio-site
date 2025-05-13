import { useEffect, useState } from "react";
import { useWebSocket } from "./WebSocketContext";

export function useOnlineUsers() {
  const [activeUsers, setActiveUsers] = useState(0);
  const { ws, isConnected } = useWebSocket();

  useEffect(() => {
    if (!ws || !isConnected) return;

    const handleMessage = (event: MessageEvent) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === "count") {
          setActiveUsers(data.count);
          console.log("Online count updated:", data.count);
        }
      } catch (e) {
        console.error("Error parsing message:", e);
      }
    };

    ws.addEventListener("message", handleMessage);

    // Request initial count
    ws.send(JSON.stringify({ type: "getCount" }));

    return () => {
      ws.removeEventListener("message", handleMessage);
    };
  }, [ws, isConnected]);

  return activeUsers;
}
