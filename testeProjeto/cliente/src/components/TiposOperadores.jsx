import React from 'react';
class TiposOperadores extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            cliente: "Alcides Garcia",
            Conta: 67768734,
            Saldo: 322.95,
            Deposito: 50

           
        }
        this.atualizarDeposito = this.atualizarDeposito.bind(this)
        this.atualizarSaldo = this.atualizarSaldo.bind(this)
    }
    atualizarDeposito(Deposito){
        this.setState({Deposito: Number(Deposito)})
    }
    atualizarSaldo(){
        this.setState({Saldo: this.state.Saldo + this.state.Deposito})
    }
    
    render() {
        return (
            <div>
                <h3>
                Cliente: {this.state.cliente}<br/>
                Conta: {this.state.Conta}<br/>
                Saldo: {this.state.Saldo}<br/>
                <input onChange={(e) => {this.atualizarDeposito(e.target.value)}} type="number"/><br/>
                <button onClick={this.atualizarSaldo}>Depositar</button>
                </h3>

            </div>
         )
    }
}
    
                    
export default TiposOperadores
