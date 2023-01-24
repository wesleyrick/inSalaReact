import React from "react";

class NovaTarefa extends React.Component {
    constructor() {
        super()
        this.state = {
            inputValue: ''
        }
        this.showValueFunc = this.showValueFunc.bind(this)
    }

    showValueFunc({ target }) {
        this.setState({ inputValue: target.value })
    }

    render() {
        return (
            <div className="container  mb-3">
                <label htmlFor="">Titulo</label><br />
                <input className="form-control" onChange={this.showValueFunc} type="text" /><br />
                <label htmlFor="">Valor do input</label>
                <h2 style={{
                    border: '1px solid black',
                    width: '200px',
                    height: '100px'
                }}>{this.state.inputValue}</h2>
            </div>
        )
    }


}

export default NovaTarefa