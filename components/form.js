export function Input({props}){
    return (
        <div>
            { asIcon && (
                <span> icon </span>
            )}
            <label> {props.label}</label>
            <input 
            />
        </div>
    )
}
