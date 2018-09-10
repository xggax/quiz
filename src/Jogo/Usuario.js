import React from 'react';
import { List, Image } from 'semantic-ui-react';

const Usuario = props => {



    return (
        <List.Item>
            <List.Content floated='left'>
                <Image avatar src={props.foto} />
                {props.nome}
            </List.Content>
            <List.Content floated='right'>
                {props.pontos} pontos
            </List.Content>
        </List.Item>
    );
}

export default Usuario;