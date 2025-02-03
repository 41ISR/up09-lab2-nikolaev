import { PropsWithChildren } from "react";

interface IButton extends PropsWithChildren {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({children, onClick}: IButton) => {
    return(
        <button className="btn" onClick={onClick}>
            {children}
        </button>
    )
}
