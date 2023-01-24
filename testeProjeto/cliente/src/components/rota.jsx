import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Gerador from './GeradorDegrid';
import Menu from "./Menu";
import Exercicio12Classe from "./ex12";
import Exercicio11 from "./Ex11";
import Cabecalho from "./Cabecalho";
import Pizza from "./Pizza";

class Rota extends React.Component {
    constructor(props) {
        super(props)
        this.teste = 'teste';
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Menu />} />
                        <Route path='/gerador' element={<Gerador linhas={3} colunas={4} />} />
                        <Route path='/exercicio11' element={<Exercicio11 />} />
                        <Route path='/exercicio12' element={<Exercicio12Classe />} />
                        <Route path='/Cabecalho' element={<Cabecalho/>} />
                        < Route path='./Pizza.jsx' element={<Pizza/>} />
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}

export default Rota