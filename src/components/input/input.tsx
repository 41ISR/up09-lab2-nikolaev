
interface InputArg{
    placeholder?: string
    className?: string
    value?: string | number | readonly string[]
    onChange?: React.ChangeEventHandler<HTMLInputElement>
}

export const Input = ({placeholder, className, value, onChange} : InputArg) => {
    const _className = ["input"]
    
    if (className) {
        _className.push(...className.split(" "))
    }

    return(
        <input 
        type="text" 
        required 
        className={_className.join(" ")} 
        placeholder={placeholder} 
        spellCheck="false"
        value={value}
        onChange={onChange}
        />
    )
}