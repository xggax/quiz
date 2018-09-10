import React from 'react';
import { Grid, GridRow, Radio, Button, Divider } from 'semantic-ui-react';

const Perguntas = () => {
    return (
        <div>
            <h2>Perguntas sobre Profissões</h2>
            <p>Mostre que você entende tudo sobre esse assunto</p>

            <span>

                <h3>Pergunta: Qual a profissão bla bla bla</h3>

                <Grid columns={2}>
                    <GridRow>
                        <Grid.Column>
                            Alternativa 1 &nbsp;
                        <Radio toggle />
                        </Grid.Column>
                        <Grid.Column>
                            Alternativa 2 &nbsp;
                        <Radio toggle />
                        </Grid.Column>
                    </GridRow>
                    <GridRow>
                        <Grid.Column>
                            Alternativa 3 &nbsp;
                        <Radio toggle />
                        </Grid.Column>
                        <Grid.Column>
                            Alternativa 4 &nbsp;
                        <Radio toggle />
                        </Grid.Column>
                    </GridRow>
                </Grid>
                <Button>Finalizar</Button>
            </span>
        </div>
    )
}

export default Perguntas