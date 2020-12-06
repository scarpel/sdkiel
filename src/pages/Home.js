import "../css/Home.css"
import Header from "../components/Header"
import Circles from "../svg/circles.svg"
import { Link } from "react-router-dom"

function Home(){
    return(
        <div className="home">
            <Header />
            <div className="circles">
                <img src={Circles} alt="Circles"/>
            </div>
            <div className="home-text">
                <h1>GERENCIE SEU<br/>BANCO DE DADOS NoSQL</h1>
                <p>
                    Gerencie um banco de dados NoSQL: Adicione, acesse, remova e atualize seus dados de forma de
                    forma de rápida e prática. 
                </p>
                <Link to="/add"><button>Gerir o Banco de Dados</button></Link>
            </div>
        </div>
    )
}

export default Home