import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

class Template extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Header />
                <Main conteudo={this.props.child} />
                <Footer />
            </div>
        )
    }
}

export default Template