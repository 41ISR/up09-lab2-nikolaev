import { Chats } from "../chats/chats"
import "./sidebar.css"

export const Sidebar = () => {

    return (
        <aside className="sidebar">
            <div className="nav">
                <div className="nav__btn-box">
                    <button className="nav__btn">Чаты</button>
                    <button className="nav__btn">Контакты</button>
                </div>
                <Chats />
            </div>
        </aside>
    )
}