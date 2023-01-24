import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Form from './Form';
import Gerador from './GeradorDeGrid';
import ChangeBtnBgColor from "./changeBtnBgColor";
import Menu from "./Menu";
import Exercicio12Classe from "./Exercicio12Classe";
import Exercicio11 from "./Exercicio11";
import Template from "./pagina exercicio/Template";
import QuemSomos from './pagina exercicio/QuemSomos';
import Pizzaria from '../componentes/pizzaria/OpenOrClose'
import Eventualmente from "./eventualmente/Eventualmente";
import Gato from "./ModelandoUmPet2/Gato";


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
                        <Route path='/ola' element={<Form />} />
                        <Route path='/gerador' element={<Gerador linhas={3} colunas={4} />} />
                        <Route path='/btn' element={<ChangeBtnBgColor />} />
                        <Route path='/exercicio11' element={<Exercicio11 />} />
                        <Route path='/exercicio12' element={<Exercicio12Classe />} />
                        <Route path="/pagina-exercicio" element={<Template />} />
                        <Route path="/quem-somos" element={<QuemSomos />} />
                        <Route path="/pizzaria" element={<Pizzaria />} />
                        <Route path="/eventualmente" element={<Eventualmente />} />
                        <Route path="/Gato" element={<Gato nome="Pepe" idade={8} corOlhos="Branco" />} />
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}

export default Rota