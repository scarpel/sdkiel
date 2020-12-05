import { useState } from "react"
import InputField from "../components/InputField"
import InputKeyPair from "../components/InputKeyPair"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import "../css/Add.css"
import "../css/Page.css"

function Add(){
    const [fields, setFields] = useState([])
    const [fieldsData, setFieldsData] = useState({})
    const [showAdvanced, setShowAdvanced] = useState(false)

    const handleNewField = () => {
        const key = new Date().getTime()
        setFields([...fields, <InputKeyPair inputs={fieldsData} key={key} inputKey={key}/>])
    }

    const h = () => {
        Object.keys(fieldsData).map(k => console.log(fieldsData[k]()))
    }

    return (
        <div className="add">
            <div className="dashboard">
                <h1 className="name">add</h1>
                <button onClick={handleNewField}>add field</button>
                <button onClick={h}>add to database</button>
            </div>
            <div className="info">
                <InputField name="key" placeholder="key" handleChange={() => {}} />
                <div className="key-pairs">
                    <h1 className="data-title">Data</h1>
                    {
                        fields.map(Component => Component)
                    }
                </div>
                <div className="advanced">
                <h1
                    className="advanced-title"
                    onClick={() => {setShowAdvanced(!showAdvanced)}}
                >
                    Advanced {showAdvanced? <IoIosArrowUp /> : <IoIosArrowDown />}
                </h1>
                    { showAdvanced? 
                        <div>Advanced</div>
                        :
                        ""
                    }
                </div>
            </div>
        </div>
    )
}

export default Add