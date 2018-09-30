import React from 'react';

import { List, Label, Icon, ListContent } from 'semantic-ui-react';

const Resposta = props => {
    const { pergunta, resposta, acertou, key } = props;

    return (

        <List.Item key={key}>
            <List.Content floated='left'>
                <Label>
                    *
                </Label>
                {pergunta}
            </List.Content>
            <ListContent floated='right'>
                {
                    acertou ?
                        (
                            <Icon name='thumbs up outline' />
                        )
                        :
                        (
                            <Icon name='thumbs down outline' />
                        )
                }
            </ListContent>
            <List.Content floated='right'>
                {resposta}
            </List.Content>
        </List.Item>
    )
}

export default Resposta;

//thumbs up outline
//thumbs down outline