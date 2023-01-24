import React from "react";

class Eventualmente extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classNameStatus: '',
      over: false,
      bodyBgColor: '#000'
    }

    this.MouseOver = this.MouseOver.bind(this);
    this.MouseOut = this.MouseOut.bind(this);
    this.changeBodyColor = this.changeBodyColor.bind(this);
  }

  MouseOver() {
    this.setState({ over: true })
  }

  MouseOut() {
    this.setState({ over: false })
  }

  changeBodyColor() {
    {
      this.state.bodyBgColor === '#000'
        ? (this.setState({ bodyBgColor: '#fff' }))
        : (this.setState({ bodyBgColor: '#000' }))
    }
    document.body.style.backgroundColor = this.state.bodyBgColor
  }

  render() {
    return (
      <div className="container">
        <button
          className={this.state.over
            ? ('btn btn-success')
            : ('btn btn-danger')}
          onMouseOver={this.MouseOver}
          onMouseOut={this.MouseOut}
          onClick={this.changeBodyColor}
        >Eventualmente</button>
      </div>
    )
  }
}

export default Eventualmente