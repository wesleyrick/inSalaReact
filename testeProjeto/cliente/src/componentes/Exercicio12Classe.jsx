import React from "react";
import './Form.css'
import HomeBtn from "./HomeBtn";

class Exercicio12Classe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valor: 0,
            desconto: 0,
            resultado: 0
        }

        this.resultadoFinal = this.resultadoFinal.bind(this);
    }

    resultadoFinal(e) {
        e.preventDefault();
        this.setState({ resultado: Math.floor(this.state.valor * (1 - this.state.desconto / 100)) });

    }

    render() {
        return (
            <div className=" desconto-classe">
                <h2>Calcular desconto</h2>
                <form>
                    <label>
                        <span>Valor: </span>
                        <input class="form-control" onChange={(e) => this.setState({ valor: e.target.value })} type="number" />
                    </label>
                    <label>
                        <span>Desconto: </span>
                        <input class="form-control" onChange={(e) => this.setState({ desconto: e.target.value })} type="number" />
                    </label>
                    <div><button className="btn btn-primary" onClick={this.resultadoFinal}>Calcular desconto</button></div>
                </form>
                <div className="resultadoDiv">
                    <p>O item com valor de {this.state.valor} com desconto de {this.state.desconto}% é: <span>{this.state.resultado}</span></p>
                </div>
                <HomeBtn/>
            </div>
        );
    };
};

export default Exercicio12Classe