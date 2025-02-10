import { io } from "socket.io-client";
import { UserStore } from "../../shared/zustandStore/UserStore";
import { Button } from "../button/button"
import { Input } from "../input/input"
import "./chatroom.css"
import { useEffect, useState } from "react";
import axios from "axios";

// const socket = io("http://api.ktkv.dev");

export const Chatroom = () =>{
    // const { userId } = UserStore();
    // const { messages, addMessage, setMessages } = useMessageStore();
    // const [message, setMessage] = useState<string>("");
    // const [recipientId, setRecipientId] = useState<string>("");
    // const [selectedUser, setSelectedUser] = useState<string | null>(null);

    // useEffect(() => {
    //     if (userId) {
    //     socket.emit("register", userId);
    //         fetchMessageHistory(userId);
    //     }

    //     socket.on("private_message", (data) => {
    //         addMessage(data);
    //     });

    //     return () => {
    //     socket.off("private_message");
    //     };
    // }, [userId]);

    // const fetchMessageHistory = async (id: string) => {
    //     try {
    //     const response = await axios.get(`http://api.ktkv.dev/messages/${id}`);
    //     setMessages(response.data);
    //     } catch (error) {
    //     console.error("Error fetching message history:", error);
    //     }
    // };

    // const handleSendMessage = () => {
    //     if (recipientId && message) {
    //     const timestamp = new Date().toISOString();
    //     socket.emit("private_message", { to: recipientId, message, timestamp });
    //     addMessage({ from: userId? || "me", to: recipientId, message, timestamp });
    //     setMessage("");
    //     }
    // };

    // const handleSelectUser = (id: string) => {
    //     setSelectedUser(id);
    //     setRecipientId(id);
    //     fetchMessageHistory(userId? || "");
    // };

    // const filteredMessages = messages.filter(
    //     (msg) =>
    //     (msg.from === user?.id && msg.to === selectedUser) ||
    //     (msg.from === selectedUser && msg.to === user?.id)
    // );

    return(
        <div className="chatroom">
            <div className="container">
                <form action="" className="form">
                    <Input className="input" />
                    <Button>→</Button>
                </form>
            </div>
        </div>
        
    )
}