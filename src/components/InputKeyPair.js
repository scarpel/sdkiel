import { useState, useRef, useEffect } from "react"
import "../css/InputKeyPair.css"

function InputKeyPair(props){
    const {inputs, inputKey} = props
    const textRef = useRef(null)
    const [key, setKey] = useState("")
    const [value, setValue] = useState("")

    const get = () => {
        console.log(key, value)
        return [key, value]
    }

    useEffect(() => {
        inputs[inputKey] = get
    }, [])

    return (
        <div className="input-key-pair" onClick={() => {console.log(key, value)}}>
            <input 
                className={`key ${key.length>=8?(key.length>=11?"smaller":"small"):""}`} 
                type="text" 
                placeholder="key"
                value={key}
                onChange={(event) => setKey(event.target.value)}
            />
            <textarea 
                ref={textRef} 
                value={value}
                placeholder="value"
                onChange={(event) => {
                    setValue(event.target.value)
                    textRef.current.style.height = "36px";
                    textRef.current.style.height = textRef.current.scrollHeight + "px"
                }}
            />
        </div>
    )
}

export default InputKeyPair