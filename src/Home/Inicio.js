import React from 'react';
import { Card, Button, CardContent, Container, Header, Segment } from 'semantic-ui-react'
import Navegacao from '../Home/Navegacao';

const Inicio = props => {
    return (
        <div>
            <Navegacao/>
            <Container>
                <Segment piled>
                    Quiz
            </Segment>
                <Header as='h2'>Jogo de Perguntas e Respostas</Header>
                <p> Desafie seus amigos nesse incrível jogo de perguntas e respostas</p>
                <Card fluid>
                    <Card.Content>
                        Acesse agora mesmo
                    </Card.Content>
                    <CardContent>
                        <Button color='facebook'>Login com Facebook</Button>
                        <Button color='twitter'>Login com Twitter</Button>
                        <Button color='blue'>Usuário Admin</Button>
                    </CardContent>
                </Card>
            </Container>
        </div>
    )
}


export default Inicio;