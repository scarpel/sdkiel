import "../css/InputField.css"

function InputField(props){
    const { name, placeholder, handleChange } = props

    return (
            <input className="input-field" type="text" name={name} placeholder={placeholder} onChange={handleChange}/>
    )
}

export default InputField