import React, {Component} from 'react';
// Fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';
// Styles
import './ListBtns.scss';

class ListBtns extends Component {
    render() {
        let {listBtnsAllDone, allDone, listBtnsDelAll, deleteAll} = this.props;
        return (
            <div className="App-list-btns">
                <button
                    style={{
                    display: listBtnsAllDone
                        ? ''
                        : 'none'
                }}
                    onClick={() => allDone(this)}><FontAwesomeIcon className="App-svg-left" icon={faCheck}/>All Done</button>
                <button
                    style={{
                    display: listBtnsDelAll
                        ? ''
                        : 'none'
                }}
                    onClick={() => deleteAll()}><FontAwesomeIcon className="App-svg-left" icon={faTimes}/>Delete all</button>
            </div>
        )
    };
};

export default ListBtns;