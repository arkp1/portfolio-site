import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface WebSocketContextType {
  ws: WebSocket | null;
  isConnected: boolean;
}

const WebSocketContext = createContext<WebSocketContextType>({
  ws: null,
  isConnected: false,
});

export const WebSocketProvider = ({ children }: { children: ReactNode }) => {
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const socket = new WebSocket("wss://portfolio-site-ws-server.onrender.com");

    socket.onopen = () => {
      console.log("WebSocket connected");
      setWs(socket);
      setIsConnected(true);
    };

    socket.onclose = () => {
      console.log("WebSocket disconnected");
      setWs(null);
      setIsConnected(false);
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <WebSocketContext.Provider value={{ ws, isConnected }}>
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocket = () => useContext(WebSocketContext);
