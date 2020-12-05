import "../css/header.css"
import { client, get, set, del, delversion, createRecord } from "../grpc/client"

function Header(){
    return (
        <div className="header">
            <div className="left">
                <img src="/sdkielfull.svg" alt="logo"></img>
            </div>
            <nav>
                <a href="#" rel="noopener" onClick={() => {set(1, createRecord(1, undefined, {name:"test"}), (err, resp) => {console.log(resp)})}}>Criar</a>
                <a href="#" rel="noopener" onClick={() => {get(1, (err, resp) => console.log(resp))}}>Ler</a>
                <a href="#" rel="noopener" onClick={() => {del(1, (err, resp) => {console.log(resp)})}}>Atualizar</a>
                <a href="#" rel="noopener" onClick={() => {delVersion(1, 1, (err, resp) => {console.log(resp)})}}>Remover</a>
            </nav>
        </div>
    )
}

export default Header