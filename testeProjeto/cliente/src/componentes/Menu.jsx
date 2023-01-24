import React from "react";
import './Menu.css'

class Menu extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="menu">
                <h1>Componentes</h1>
                <a href="/ola">Ola OlaMundo</a><br />
                <a href="/gerador">Gerador</a><br />
                <a href="/exercicio11">exercicio 11 com classe</a><br />
                <a href="/exercicio12">exercicio 12 com classe</a>
                <a href="/pagina-exercicio">Página exercicio</a>
                <a href="/pizzaria">Pizzaria</a>
                <a href="./eventualmente">Eventualmente 23/01/2023</a>
                <a href="./Gato">Classe gato</a>
            </div>
        )
    }
}
export default Menu