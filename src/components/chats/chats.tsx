import "./chats.css"
import avatar from "./../../assets/avatar.jpg"

export const Chats = ({id}:{id:string}) =>{ 
    return(
        <div className="chat-box">
            <img src={avatar} className="avatar"/>
            <div className="chat-nik"> 
                <p>секс: {id}</p>
            </div>
        </div>
    )
}