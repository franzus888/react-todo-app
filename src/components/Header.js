import React, {Component} from 'react';
// Fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faList} from '@fortawesome/free-solid-svg-icons';
// Styles
import './Header.scss';

class Header extends Component {
    render() {
        return (
            <h1><FontAwesomeIcon className="App-svg-left" icon={faList}/>Todo List</h1>
        )
    };
};

export default Header;