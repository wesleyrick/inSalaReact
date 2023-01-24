import React from "react";
import Cabecalho from "./Cabecalho";
import Footer from "./Footer";
class Template extends React.Component{

    render(){
        return(
            <div>
                <Cabecalho/>
                <Main/>
                <Footer/>
            </div>
        )
    }
}

export default Template