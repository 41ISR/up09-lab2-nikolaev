
interface InputArg{
    placeholder?: string
    className?: string
}

export const Input = ({placeholder, className} : InputArg) => {
    const _className = ["input"]
    
    if (className) {
        _className.push(...className.split(" "))
    }

    return(
        <input type="text" required className={_className.join(" ")} placeholder={placeholder} />
    )
}