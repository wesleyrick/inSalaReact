import React from "react";
import './Form.css'
import HomeBtn from "./HomeBtn";

class Exercicio11 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueOne: 0,
            valueTwo: 0,
            valueThree: 0,
            resultado: 0
        }
        this.resultadoFinal = this.resultadoFinal.bind(this);
    }

    resultadoFinal(e) {
        e.preventDefault();
        this.setState({ resultado: Math.floor(this.state.valueOne + this.state.valueTwo + this.state.valueThree) });
    }

    render() {
        return (
            <div className=" desconto-classe">
                <h2>Somar valores</h2>
                <form>
                    <label>
                        <span>Valor 1: </span>
                        <input
                            class="form-control"
                            onChange={(e) => this.setState({ valueOne: Number(e.target.value) })}
                        />
                    </label>
                    <label>
                        <span>Valor 2: </span>
                        <input
                            class="form-control"
                            onChange={(e) => this.setState({ valueTwo: Number(e.target.value) })}
                        />
                    </label>
                    <label>
                        <span>Valor 3: </span>
                        <input
                            class="form-control"
                            onChange={(e) => this.setState({ valueThree: Number(e.target.value) })}
                        />
                    </label>
                    <div><button
                        className="btn btn-primary"
                        onClick={this.resultadoFinal}>Somar valores</button></div>
                </form>
                <div className="resultadoDiv">
                    <p>O resultado da soma dos numeros "{this.state.valueOne} + {this.state.valueTwo} + {this.state.valueThree}" é: <span>{this.state.resultado}</span></p>
                </div>
                <HomeBtn />
            </div>
        );
    };
};

export default Exercicio11