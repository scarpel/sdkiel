import { useState, useRef } from "react"
import { TiDelete } from "react-icons/ti"
import "../css/InputKeyPair.css"

function InputKeyPair(props){
    const { values, handleDelete } = props
    const textRef = useRef(null)
    const [key, setKey] = useState("")

    const handleChange = (event) => {
        const {name, value} = event.target
        values[name] = value
    }

    return (
        <div className="input-key-pair">
            <input 
                className={`key ${key && key.length>=8?(key.length>=11?"smaller":"small"):""}`} 
                type="text" 
                placeholder="key"
                value={key}
                name="key"
                onChange={(e) => {
                    const {value} = e.target;
                    setKey(value);
                    values.key = value
                }}
            />
            <textarea 
                ref={textRef} 
                value={values.value}
                placeholder="value"
                name="value"
                onChange={(event) => {
                    handleChange(event)
                    textRef.current.style.height = "36px";
                    textRef.current.style.height = textRef.current.scrollHeight + "px"
                }}
            />
            <TiDelete className="delete-icon" onClick={handleDelete}/>
        </div>
    )
}

export default InputKeyPair