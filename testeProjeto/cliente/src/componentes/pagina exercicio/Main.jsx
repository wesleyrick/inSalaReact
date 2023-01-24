import React from "react";
import './Main.css'

class Main extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <main className="Container" >
                {this.props.conteudo}
            </main>
        )
    }
}

export default Main