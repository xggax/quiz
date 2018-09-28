import React, { Component } from 'react';
import { Grid, GridRow, Radio, Button, Message, Header, Icon } from 'semantic-ui-react';
import axios from 'axios';

import HeaderCustom from './HeaderCustom';

class Perguntas extends Component {
    constructor(props) {
        super(props)

        this.state = {
            perguntas: {},
            estaCarregando: false
        }

    }

    //Pegando o parametro que é passado em props pra Perguntas e passando para a função depois que o componente é montado.
    componentDidMount() {
        this.carregaPerguntas(this.props.match.params.nome);
    }

    carregaPerguntas(cat) {
        console.log("categoria da pergunta:", cat);
        this.setState({
            estaCarregando: true,
            perguntas: {}
        })
        // Armazenando a URL Pegando o categoria que o usuario me deu lá atras no clique
        const url = `https://quiz-8b311.firebaseio.com/categorias.json?orderBy="nome"&equalTo="${cat}"`;

        axios
            .get(url)
            .then(dados => {
                const chave = Object.keys(dados.data)[0];
                console.log('Lista de Perguntas ', dados.data[chave]);
                this.setState({
                    estaCarregando: false,
                    perguntas: dados.data[chave],
                })
            })
            .catch(err => {
                console.log('Algum problema ocorreu');
            })



    }

    renderPergunta(pergunta, id) {

        return (

            <span key={id}>
                <h3>PERGUNTA: {pergunta.titulo}</h3>

                <Grid columns={2}>
                    <GridRow>
                        <Grid.Column>
                            <Message color='yellow'>
                                <p>{pergunta.alternativas[1].resposta}</p>
                                <Radio toggle />
                            </Message>
                        </Grid.Column>
                        <Grid.Column>
                            <Message color='teal'>
                                <p>{pergunta.alternativas[2].resposta}</p>
                                <Radio toggle />
                            </Message>
                        </Grid.Column>
                    </GridRow>
                    <GridRow>
                        <Grid.Column>
                            <Message color='pink'>
                                <p>{pergunta.alternativas[3].resposta}</p>
                                <Radio toggle />
                            </Message>
                        </Grid.Column>
                        <Grid.Column>
                            <Message color='brown'>
                                <p>{pergunta.alternativas[4].resposta}</p>
                                <Radio toggle />
                            </Message>
                        </Grid.Column>
                    </GridRow>
                </Grid>
                <hr />
            </span>

        )
    }


    render() {
        if (this.state.estaCarregando) {
            return <p>Carregando...</p>
        }
        return (
            <div>
                <HeaderCustom />
                <h2><Icon name={this.state.perguntas.icone} />{this.props.match.params.nome}</h2>
                <p>Mostre que você entende tudo sobre esse assunto</p>

                {
                    this.state.perguntas.perguntas && Object.keys(this.state.perguntas.perguntas)
                        .map(key => {
                            return (this.renderPergunta(this.state.perguntas.perguntas[key], key))
                        })

                }

                <Button>Finalizar</Button>
            </div>
        )
    }
}

export default Perguntas;