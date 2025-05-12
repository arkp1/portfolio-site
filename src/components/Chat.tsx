import React, { useEffect, useState, useRef } from "react";
import { Send } from "lucide-react";
var generateName = require("sillyname");

interface Message {
  id: number;
  text: string;
  sender: "user" | "other";
  senderName: string;
  timestamp: Date;
}

function Chat() {
  const ws = useRef<WebSocket | null>(null);
  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = sessionStorage.getItem("messages");
    return saved
      ? JSON.parse(saved).map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp),
        }))
      : [];
  });
  const [inputText, setInputText] = useState("");
  const clientId = useRef<string>(Math.random().toString(36).substring(2, 9));
  const userName = useRef<string>(generateName());

  //receiving
  useEffect(() => {
    ws.current = new WebSocket(process.env.CHAT_NEXT_PUBLIC_WEBSOCKET_URL as string);

    ws.current.onopen = () => {
      ws.current?.send(
        JSON.stringify({
          type: "connection",
          senderId: clientId.current,
          senderName: userName.current,
        })
      );
    };

    ws.current.onmessage = (e: MessageEvent) => {
      const msg = JSON.parse(e.data);
      const isOwnMessage = msg.senderId === clientId.current;

      const newMessage: Message = {
        id: Date.now(),
        text: msg.text,
        sender: isOwnMessage ? "user" : "other",
        senderName: msg.senderName,
        timestamp: new Date(),
      };

      if (!isOwnMessage) {
        setMessages((prev) => [...prev, newMessage]);
      }
    };

    ws.current.onerror = (err) => {
      console.error("WebSocket error:", err);
    };

    ws.current.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return () => {
      ws.current?.close();
    };
  }, []);

  useEffect(() => {
    const saveMsg = sessionStorage.setItem(
      "messages",
      JSON.stringify(messages)
    );
  }, [messages]);

  //sending
  const handleSend = () => {
    if (inputText.trim()) {
      const newMessage: Message = {
        id: Date.now(),
        text: inputText,
        sender: "user",
        senderName: userName.current,
        timestamp: new Date(),
      };

      setMessages([...messages, newMessage]);

      ws.current?.send(
        JSON.stringify({
          text: inputText,
          senderId: clientId.current,
          senderName: userName.current,
        })
      );
      setInputText("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  return (
    <div
      className="absolute top-full right-0 left-26 mt-2 max-h-screen w-72 md:w-84 h-96 bg-neutral-900/90 backdrop-blur-sm rounded-lg shadow-lg border border-neutral-800 flex flex-col z-50 overflow-y-auto"
      onWheel={(e) => e.stopPropagation()}
    >
      <div className="flex items-center justify-center p-3 border-b border-neutral-800 flex-shrink-0">
        <h3 className="text-sm font-medium text-white">Chat</h3>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-2 max-h-fit ${
                message.sender === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-neutral-800 text-neutral-100"
              }`}
            >
              <p className="text-xs">{message.senderName}</p>
              <p className="text-base">{message.text}</p>
              <span className="text-[10px] opacity-70">
                {message.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 border-t border-neutral-800 flex-shrink-0">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type a message..."
            className="flex-1 bg-neutral-800 text-neutral-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button
            onClick={handleSend}
            className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            <Send size={16} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Chat;
