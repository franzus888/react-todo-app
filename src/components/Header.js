import React from 'react';
// Fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faList} from '@fortawesome/free-solid-svg-icons';
// Styles
import './../styles/Header.scss';

function Header(){
        return (
            <header className="App-header">
                <h1><FontAwesomeIcon className="App-svg-left" icon={faList}/>Todo List</h1>
            </header>
        )
};

export default Header;