import React from "react";

class ChangeBtnBgColor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: ''
        }

        this.changeBgColor = this.changeBgColor.bind(this)
    }

    randomColor() {
        let cor = '#';
        let char = '0123456789ABCDEF'

        for (let i = 0; i < 6; i++) {
            cor += char[Math.floor(Math.random() * char.length)]
        }
        console.log(cor);

        return cor
    }

    changeBgColor() {
        console.log('click');
        this.setState({ color: this.randomColor() });
    }

    render() {
        return (
            <div>
                <button style={{ backgroundColor: this.state.color }} onClick={this.changeBgColor} >Change bgColor</button>
            </div>
        )
    }
}

export default ChangeBtnBgColor