import React, { Component } from 'react';
import { Container, List } from 'semantic-ui-react';

import Usuario from './Usuario';
import HeaderCustom from './HeaderCustom';


class Ranking extends Component {
    render() {
        return (
            <div>
                <HeaderCustom/>
                <h2>RANKING</h2>
                <p>Quem é o mestre???</p>

                <Container>
                    <List divided verticalAlign='left'>
                        <Usuario foto='' nome='Gabriel Gama' pontos='100'/>
                        <Usuario foto='' nome='Miguel Arcanjo' pontos='85'/>
                        <Usuario foto='' nome='Albuquerque' pontos='50'/>
                    </List>
                </Container>
            </div>
        );
    }
}

export default Ranking;