import "./authoriz.css"
import { Input } from "../../components/input/input"
import { Button } from "../../components/button/button"

export const Autoriz = () =>{

    return(
        <div className="autoriz">
            <div className="bg">
                <h1 className="h1">Вход</h1>
                <form className="form">
                    <Input className="input" placeholder="id твой кароч"/>
                    <Button>нажимайбл</Button>
                </form>
            </div>
        </div>
    )
}