import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, DropdownItem } from 'semantic-ui-react';

const Navegacao = props => {
    return(
        <div>
            <header className="App-header">
                <h1 className="App-title">Jogo de Perguntas e Respostas</h1>
                <Menu>
                    <Menu.Item><strong>Quiz</strong></Menu.Item>
                    <Menu.Item>Home</Menu.Item>
                    <Menu.Menu position='right'>
                        <Dropdown item text='Acesse aqui'>
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    Facebook
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    Twitter
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    Admin
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Menu>
                </Menu>
            </header>
        </div>
    )
}

export default Navegacao;