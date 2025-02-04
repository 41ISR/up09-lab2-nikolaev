import { Button } from "../button/button"
import { Input } from "../input/input"
import "./chatroom.css"

export const Chatroom = () =>{

    return(
        <div className="chatroom">
            <div className="container">
                <form action="" className="form">
                    <Input className="input"/>
                    <Button>→</Button>
                </form>
            </div>
        </div>
        
    )
}