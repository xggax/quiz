import React, { Component } from 'react';
import { List, Label } from 'semantic-ui-react';


class Resultado extends Component {
    render() {
        return (
            <div>
                <h2>Seus Resultados</h2>
                <p>Confira o seu desempenho nessa categoria</p>


                <List divided verticalAlign='left'>
                    <List.Item>
                        <List.Content floated='left'>
                            <Label>1</Label>
                            Pergunta sobre bla bla bla
                        </List.Content>
                        <List.Content floated='right'>3</List.Content>
                    </List.Item>

                    <List.Item>
                        <List.Content floated='left'>
                            <Label>2</Label>
                            Pergunta sobre bla bla bla
                        </List.Content>
                        <List.Content floated='right'>3</List.Content>
                    </List.Item>

                    <List.Item>
                        <List.Content floated='left'>
                            <Label>3</Label>
                            Pergunta sobre bla bla bla
                        </List.Content>
                        <List.Content floated='right'>3</List.Content>
                    </List.Item>

                </List>
            </div>
        )
    }
}

export default Resultado;