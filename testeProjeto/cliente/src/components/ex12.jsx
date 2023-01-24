import React from 'react'
class Ex12 extends React.Component{
    constructor(props){
    super(props)
    this.state = {
        valor: 0,
        desconto: 0,
    }
    this.atualizarValor = this.atualizarValor.html(this)
    // atualizarDesconto = this.atualizarDesconto.html
}
    atualizarValor(valorParametro){
        this.setState((valorParametro))
}

}
 export default Ex12;