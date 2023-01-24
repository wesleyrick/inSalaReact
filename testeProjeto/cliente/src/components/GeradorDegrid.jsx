import React from 'react';
import { Container, Row, Col } from 'reactstrap'

class GeradorDeGrid extends React.Component {
    constructor(props) {
        super(props)
        this.linhas = props.linhas;
        this.colunas = props.colunas;
    }

    gerador() {
        let linhas = [];
        let colunas = [];

        for (let i = 0; i < this.linhas; i++) {
            for (let j = 0; j < this.colunas; j++) {
                console.log(i, j);
                colunas.push(<Col>linhas {i} colunas {j}</Col>);
            }
            linhas.push(<Row>{colunas}</Row>);
            colunas = []
        }
        return <Container>{linhas}</Container>
    }

    render() {
        return this.gerador();
    }
}

export default GeradorDeGrid;