import React from 'react';
import { Grid, Segment, Header, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const tamanho = {
    width: 175,
    height: 175
}

const Categoria = props => {
    return (
        <Grid.Column>
            {/* Os parâmetros passados pelas rotas chegam no componente através da propriedade params.
                Poderíamos acessar o parâmetro id de dentro do componente respectivo à rota */            
            }
            <Link to={`/perguntas/${props.titulo}`}>
                <Segment circular style={tamanho}>
                    <Header as='h2'>
                        <Header.Subheader>
                            <Icon name={props.icone} />
                        </Header.Subheader>
                        {props.titulo}
                    </Header>
                </Segment>
            </Link>
        </Grid.Column>
    )
}

export default Categoria;