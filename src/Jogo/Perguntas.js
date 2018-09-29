import React, { Component } from 'react';
import { Grid, GridRow, Radio, Button, Message, Header, Icon, Progress } from 'semantic-ui-react';
import axios from 'axios';
import _ from 'lodash';

import HeaderCustom from './HeaderCustom';

class Perguntas extends Component {
    constructor(props) {
        super(props)

        this.state = {
            perguntas: {},
            estaCarregando: false,
            perguntaAtual: 0,
            totalPerguntas: 0
        }

        this.proximaPergunta = this.proximaPergunta.bind(this);

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
                const listaDePerguntas = dados.data[chave];
                console.log('Lista de Perguntas ', listaDePerguntas);
                console.log('Quantidade de perguntas ', _.size(listaDePerguntas));
                this.setState({
                    estaCarregando: false,
                    perguntas: listaDePerguntas ,
                    totalPerguntas: _.size(listaDePerguntas)
                })
            })
            .catch(err => {
                console.log('Algum problema ocorreu');
            })



    }

    proximaPergunta(){
        const {perguntaAtual, totalPerguntas} = this.state;
        console.log(perguntaAtual, totalPerguntas);
        if(perguntaAtual<totalPerguntas-1){
            this.setState({
                perguntaAtual : this.state.perguntaAtual+1
            })
        }else{
            console.log('Terminou as perguntas, mostre as respostas');
        }
    }
    
    renderPergunta(pergunta) {

        return (

            <span>
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
        let item = [];
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
                        console.log(key);
                        item.push(key);
                    })

            }
            {       
                this.state.perguntas.perguntas && this.renderPergunta(this.state.perguntas.perguntas[item[this.state.perguntaAtual]])
                   // return (this.renderPergunta(this.state.perguntas.perguntas[key], key))
            
            }
                <Progress value={this.state.perguntaAtual + 1} total={item.length} progress='ratio'/>
                <Button onClick={this.proximaPergunta}>Proxima</Button>
        </div>
        )
    }
}

export default Perguntas;