import React from 'react';
import { Card, Button, CardContent, Container, Header, Segment } from 'semantic-ui-react'

const Inicio = props => {
    return (
        <div>
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
                        <Button basic color='blue'>Login com Facebook</Button>
                        <Button basic color='green'>Usuário Admin</Button>
                    </CardContent>
                </Card>
            </Container>
        </div>
    )
}


export default Inicio;