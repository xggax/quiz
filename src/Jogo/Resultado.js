import React, { Component } from 'react';
import { List, Container } from 'semantic-ui-react';

import Resposta from './Resposta';
import HeaderCustom from './HeaderCustom';

let label = 'pontos';

class Resultado extends Component {

    render() {
        const { resultado, pontos } = this.props.location.state;
        
        if(pontos == 1){
            label = 'ponto';
        }
        return (
            <div>
                <HeaderCustom />
                <h2>Seus Resultados</h2>
                <p>Confira o seu desempenho nessa categoria</p>
                <Container>
                    <List divided>
                        {
                            Object.keys(resultado)
                                .map(key => {
                                    return <Resposta 
                                            pergunta={resultado[key].pergunta} 
                                            resposta={resultado[key].resposta} 
                                            acertou = {resultado[key].acertou}
                                            key={key} />
                                })
                        }
                    </List>
                </Container>
                <h3>Total: {pontos} {label} </h3>
            </div>
        )
    }
}

export default Resultado;