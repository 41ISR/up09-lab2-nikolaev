import { useEffect, useState } from "react"
import { Chats } from "../chats/chats"
import { Contacts } from "../contacts/contacts"
import "./sidebar.css"
import { io } from "socket.io-client"

const socket = io("http://localhost:3000", { //api.ktkv.dev
    withCredentials: true,
    transports: ["websocket", "polling"],
})

export const Sidebar = () => {
    const [isChats, setIsChats] = useState(true)
    const [chats, setChats] = useState([])
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        socket.on("register", (newUsers) => {
            setUsers(newUsers)
        })

        return () => {
            socket.off("register")
        }
    }, [setUsers])

    return (
        <aside className="sidebar">
            <div className="nav">
                <div className="nav__btn-box">
                    <button className="nav__btn">Чаты</button>
                    <button className="nav__btn">Контакты</button>
                </div>
        <div className="nav__container">
            {
                isChats? chats.map(chat => <Chats />)  : <Contacts />
            }     
        </div>
            </div>
        </aside>
    )
}