import "./authoriz.css"
import { Input } from "../../components/input/input"
import { Button } from "../../components/button/button"
import { UserStore } from "../../shared/zustandStore/UserStore"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { URLs } from "../../app/router/urls"
import { api } from "../../shared/api/api"

export const Autoriz = () => {
    const { setUserId } = UserStore(state => state)

    const [id, setId] = useState('');// кароч useState чтоб вытаскивать Id из инпута и после использовать его 
    const navigate = useNavigate()
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        // setUserId(id)
        // navigate("/")
        e.preventDefault()
        try {
            // const response = await axios.post("http://localhost:3000/login", { id: id });
            const res = await api.login(id)
            setUserId(res);
            navigate(URLs.CHAT);
          } catch (error) {
            console.error("Login error:", error);
          }
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