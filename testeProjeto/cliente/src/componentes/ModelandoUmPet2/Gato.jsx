import React from "react";

class Gato extends React.Component {
    constructor(props) {
        super(props);
        this.nome = this.props.nome;
        this.corOlhos = this.props.corOlhos;
        this.idade = this.props.idade;

        this.state = {
            idade: this.getIdade()
        }
    }

    setNome(nome) {
        this.nome = nome
    }
    getNome() {
        return this.nome
    }

    setIdade(idade) {
        this.idade = idade
    }
    getIdade() {
        return this.idade
    }

    setCorOlhos(cor) {
        this.corOlhos = cor
    }
    getCorOlhos() {
        return this.corOlhos
    }

    aumentarIdade() {
        this.setState({ idade: this.idade + 1 })
        console.log(this.state.idade);
    }

    exibir() {
        return `O gato de nome ${this.getNome()}, tem a cor dos olhos ${this.getCorOlhos()} com a idade ${this.getIdade()}`
    }

    render() {
        return (
            <div className="container" >
                <p className="lead text-center" >{this.exibir()}</p>
                <button onClick={function () {
                    this.aumentarIdade()
                }}>Aumentar a idade +1</button>
            </div>
        )
    }
}

export default Gato