import React from "react";

class OpenOrClose extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openOrCloseStr: '',
      open: false

    }
    this.pizzariaOpen = this.pizzariaOpen.bind(this);
    this.pizzariaClose = this.pizzariaClose.bind(this);
  }

  pizzariaOpen() {
    this.setState({
      openOrCloseStr: 'Pizzaria aberta',
      open: true
    });
  };

  pizzariaClose() {
    this.setState({
      openOrCloseStr: 'Pizzaria fechada',
      open: false
    });
  }

  render() {
    return (
      <div className="container" >
        <h3>{this.state.openOrCloseStr}</h3>
        <button
          className={this.state.open
            ? ('btn btn-danger')
            : ('btn btn-success')}
          onClick={!this.state.open
            ? (this.pizzariaOpen)
            : (this.pizzariaClose)}>
          {this.state.open ? ('Fechar Pizzaria') : ('Abrir Pizzaria')}
        </button>
      </div>
    )
  }
}

export default OpenOrClose