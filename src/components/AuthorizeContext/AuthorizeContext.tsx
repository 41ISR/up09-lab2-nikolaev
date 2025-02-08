import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserStore } from "../../shared/zustandStore/UserStore";

const AuthorizeContext = () => {
    const {userId} = UserStore()
    
    useEffect(() => {
        if (!userId) {
            navigate("/login")
        }
    }, [])

    return (
    <Outlet />
)
}

export default AuthorizeContext