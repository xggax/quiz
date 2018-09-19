import React, { Component } from 'react';
import { Card, Button, CardContent, Container, Header, Segment } from 'semantic-ui-react'
import Navegacao from '../Home/Navegacao';
import {Redirect} from 'react-router-dom';

import config, { auth, providers } from './../config'
import Usuario from '../Jogo/Usuario';

class Inicio extends Component {
    constructor(props) {
        super(props)

        this.state = {
            usuario: {},
            estalogado: false,
        }

        auth.onAuthStateChanged((usuario) => {
            if (usuario) {
                console.log(usuario);
                this.setState({
                    usuario,
                    estaLogado: true,
                })
            } else {
                console.log('nao logou');
                this.setState({
                    estaLogado: false,
                })
            }
        })

    }

    autentica(provider) {
        console.log(provider);
        auth.signInWithPopup(providers[provider]);
    }

    render() {
        if(this.state.estaLogado){
            return <Redirect to='/categorias' />
        }
        return (
            <div>
                <Navegacao />
                <Container>
                    <Segment piled>
                        Quiz
            </Segment>
                    <Header as='h2'>Jogo de Perguntas e Respostas</Header>
                    <p> Desafie seus amigos nesse incrível jogo de perguntas e respostas</p>
                    {
                        !this.state.estaLogado
                            ?
                            (
                                <Card fluid>
                                    <Card.Content>
                                        Acesse agora mesmo
                    </Card.Content>
                                    <CardContent>
                                        <Button color='facebook' onClick={() => this.autentica('facebook')}>Login com Facebook</Button>
                                        <Button color='twitter'>Login com Twitter</Button>
                                        <Button color='blue'>Usuário Admin</Button>
                                    </CardContent>
                                </Card>
                            )
                            :
                            (
                                <div>
                                    <h3>{this.state.usuario.displayName}</h3>
                                    <img src={this.state.usuario.photoURL} />
                                </div>
                            )
                    }
                </Container>
            </div>
        )
    }
}

export default Inicio;