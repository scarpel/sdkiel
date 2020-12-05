import "../css/header.css"

function Header(){
    return (
        <div className="header">
            <div className="left">
                <img src="/sdkielfull.svg" alt="logo"></img>
            </div>
            <nav>
                <a href="#" rel="noopener">Criar</a>
                <a href="#" rel="noopener">Ler</a>
                <a href="#" rel="noopener">Atualizar</a>
                <a href="#" rel="noopener">Remover</a>
            </nav>
        </div>
    )
}

export default Header