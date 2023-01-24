import React from 'react';
import {button} from 'reactstrap'
class Pizza extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          
           
        }
        this.fraseAbrir = this.fraseAbrir.bind(this)
        this.fraseFechar = this.fraseFechar.bind(this)
    }
    fraseAbrir(){
        this.setState()
    }
    fraseFechar(){
        this.setState()
    }
    
    render() {
        return (
            <div>
                <button onClick='Estamos abertos'>Abrir</button><br/>
                <button onClick='Estamos fechados'>Fechar</button><br/>
            </div>
         )
    }
}
export default Pizza
   