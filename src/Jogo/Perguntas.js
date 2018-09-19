import React from 'react';
import { Grid, GridRow, Radio, Button, Message, Header } from 'semantic-ui-react';

import HeaderCustom from './HeaderCustom';

const Perguntas = () => {
    return (
        <div>
            <HeaderCustom/>
            <h2>Perguntas sobre Profissões</h2>
            <p>Mostre que você entende tudo sobre esse assunto</p>

            <span>

                <h3>Pergunta: Qual a profissão bla bla bla</h3>

                <Grid columns={2}>
                    <GridRow>
                        <Grid.Column>
                            <Message color='yellow'>
                                <p>Alternativa 1 </p>
                                <Radio toggle />
                            </Message>
                        </Grid.Column>
                        <Grid.Column>
                            <Message color='teal'>
                                <p>Alternativa 2 </p>
                                <Radio toggle />
                            </Message>
                        </Grid.Column>
                    </GridRow>
                    <GridRow>
                        <Grid.Column>
                            <Message color='pink'>
                                <p>Alternativa 3 </p>
                                <Radio toggle />
                            </Message>
                        </Grid.Column>
                        <Grid.Column>
                            <Message color='brown'>
                                <p>Alternativa 4 </p>
                                <Radio toggle />
                            </Message>
                        </Grid.Column>
                    </GridRow>
                </Grid>
                <hr/>
                <Button>Finalizar</Button>
            </span>
        </div>
    )
}

export default Perguntas