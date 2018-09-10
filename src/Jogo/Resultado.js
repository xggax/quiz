import React, { Component } from 'react';
import { List, Container } from 'semantic-ui-react';

import Resposta from './Resposta';
import HeaderCustom from './HeaderCustom';

const resposta = {
    id: 1,
    titulo: 'Primeira Pergunta',
    alternativa: 3
}

class Resultado extends Component {
    render() {
        return (
            <div>
                <HeaderCustom/>
                <h2>Seus Resultados</h2>
                <p>Confira o seu desempenho nessa categoria</p>

                <Container>
                    <List divided verticalAlign='left'>
                        <Resposta resposta={resposta}/>
                    </List>
                </Container>
            </div>
        )
    }
}

export default Resultado;