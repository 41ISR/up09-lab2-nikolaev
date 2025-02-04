import { Chatroom } from "../../components/chatroom/chatroom"
import { Sidebar } from "../../components/sidebar/sidebar"
import "./messager.css"

export const Messager = () =>{

    return(
        <div className="main">
            <Sidebar />
            <Chatroom />
        </div>
    )
}