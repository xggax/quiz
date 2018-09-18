import React, { Component } from 'react';
import { Grid, GridRow, Radio, Button, Message, Header } from 'semantic-ui-react';
import axios from 'axios';

import HeaderCustom from './HeaderCustom';

class Perguntas extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            perguntas: {},
            estaCarregando: false
        }
        //Pegando o parametro que é passado em props pra Perguntas
    }

    componentDidMount(){
        this.carregaPerguntas(this.props.match.params.nome);
    }

    carregaPerguntas(cat) {
        console.log("id da pergunta:", cat);
        this.setState({
            estaCarregando: true,
            perguntas: {}
        })
        // Pegando o categoria que o usuario me deu lá atras no clique
        const url = `https://quiz-8b311.firebaseio.com/categorias.json?orderBy="nome"&equalTo="${cat}"`;

        axios
        .get(url)
        .then(dados => {
            console.log('Lista de Perguntas ', dados.data);
        })
        .catch(err => {
            console.log('Algum problema ocorreu');
        })



    }


    render() {
        return (
            <div>
                <HeaderCustom />
                <h2>{this.props.match.params.nome}</h2>
                {/*<p>{JSON.stringify(this.props.match.params.idCat)}</p>*/}
                <p>Mostre que você entende tudo sobre esse assunto</p>

                <span>

                    <h3>Pergunta: Qual a profissão bla bla bla</h3>

                    <Grid columns={2}>
                        <GridRow>
                            <Grid.Column>
                                <Message color='yellow'>
                                    <p>Alternativa 1 </p>
                                    <Radio toggle />
                                </Message>
                            </Grid.Column>
                            <Grid.Column>
                                <Message color='teal'>
                                    <p>Alternativa 2 </p>
                                    <Radio toggle />
                                </Message>
                            </Grid.Column>
                        </GridRow>
                        <GridRow>
                            <Grid.Column>
                                <Message color='pink'>
                                    <p>Alternativa 3 </p>
                                    <Radio toggle />
                                </Message>
                            </Grid.Column>
                            <Grid.Column>
                                <Message color='brown'>
                                    <p>Alternativa 4 </p>
                                    <Radio toggle />
                                </Message>
                            </Grid.Column>
                        </GridRow>
                    </Grid>
                    <hr />
                    <Button>Finalizar</Button>
                </span>
            </div>
        )
    }
}

export default Perguntas;