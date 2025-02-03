import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AuthorizeContext = () => {
    const auth = true
    const navigate = useNavigate()
    useEffect(() => {
        if (!auth) {
            navigate("/login")
        }
    }, [])

    return (
    <Outlet />
)
}

export default AuthorizeContext