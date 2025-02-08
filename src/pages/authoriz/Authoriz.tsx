import "./authoriz.css"
import { Input } from "../../components/input/input"
import { Button } from "../../components/button/button"
import { UserStore } from "../../shared/zustandStore/UserStore"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Autoriz = () => {
    const { setUserId } = UserStore(state => state)

    const [id, setId] = useState('');// кароч useState чтоб вытаскивать Id из инпута и после использовать его 
    const navigate = useNavigate()
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setUserId(id)
        navigate("/")
    }

    return (
        <div className="autoriz">
            <div className="bg">
                <h1 className="h1">Вход</h1>
                <form
                    className="form"
                    onSubmit={handleSubmit}
                >
                    <div className="burger">
                        <Input
                            className="input"
                            placeholder="id твой кароч"
                            onChange={e => setId(e.target.value)}
                            value={id}
                        />

                        <Button>нажимай</Button>

                    </div>
                </form>
            </div>
        </div>
    )
}