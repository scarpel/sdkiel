import { useState } from "react"
import InputField from "../components/InputField"
import { get } from "../grpc/client"
import Spinner from "../components/Spinner"
import "../css/Get.css"
import "../css/Page.css"

function Get(){
    const [recordKey, setRecordKey] = useState("")
    const [fetchingData, setFetchingData] = useState(true)
    const [previous, setPrevious] = useState({1: "abc", 2: "def"})

    const fetchDoc = () => {
        setFetchingData(true)
        get(recordKey, (err, result) => {
            setFetchingData(false)
            if(err) console.log(err)
            else{
                console.log(result)
                const recordResult = result.getRecordresult()

            }
        })
    }

    return(
        <div className="get">
            <div className="dashboard">
                <h1 className="name">get</h1>
                <button className="get-btn" disabled={!recordKey} onClick={fetchDoc}>get document</button>
                <div className="previous-docs">
                    { Object.keys(previous).map(key => 
                        <div>{key}: {previous[key]}</div>
                    ) }
                </div>
                {
                    fetchingData && <Spinner />
                }
            </div>
            <div className="info">
                <div className="info-data">
                    <InputField name="key" placeholder="key" state={[recordKey, setRecordKey]} />
                </div>
                <div className="key-pairs">
                    <div className="data-fields">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Get