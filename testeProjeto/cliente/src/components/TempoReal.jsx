// import styles from '../index.module.css';
import React from 'react';

class TempoReal extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        valor: ""
    }
}

mudarTexto(valorParam){
    this.setState({valor: valorParam});
}

render(){
    return  <form>
                <label for="email">Escreva: </label>
                <input id="nome" type="text" onChange={(e) => this.mudarTexto(e.target.value)}/><br/>
                <h2>{this.state.valor}</h2>
            </form>
}
}

export default TempoReal;