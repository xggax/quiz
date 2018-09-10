import React, { Component } from 'react';
import { Container, List } from 'semantic-ui-react';
import Usuario from './Usuario';

class Ranking extends Component {
    render() {
        return (
            <div>
                <h2>RANKING</h2>
                <p>Quem é o mestre???</p>

                <Container>
                    <List divided verticalAlign='left'>
                        <Usuario foto='' nome='Gabriel Gama' pontos='100'/>
                        <Usuario foto='' nome='Miguel Arcanjo' pontos='85'/>
                    </List>
                </Container>
            </div>
        );
    }
}

export default Ranking;