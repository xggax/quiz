import React, { Component } from 'react';
import { Grid, Segment, Header, Icon } from 'semantic-ui-react';

import config from './../config';
import Categoria from './Categoria';
import HeaderCustom from './HeaderCustom';


class Categorias extends Component {
    constructor(props) {
        super(props)

        this.state = {
            categorias: {},
        }

        config.syncState('categorias', {
            context: this,
            state: 'categorias',
            asArray: false
        })
    }
    render() {
        return (
            <div>
                <HeaderCustom />
                <h2>Lista de Categorias</h2>
                <p>Selecione a categoria que você quer responder perguntas</p>
                {/*<p>{JSON.stringify(this.state.categorias)}</p>*/}

                <Grid columns={5}>
                    {
                        Object.keys(this.state.categorias)
                        .map(key => {
                            return <Categoria key={key} titulo={this.state.categorias[key].nome} icone={this.state.categorias[key].icone} />
                        })
                    }
                    
                </Grid>
            </div>
        );
    }
}

export default Categorias;