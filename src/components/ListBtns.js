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
                <p>
                    <button
                        style={{
                        display: listBtnsAllDone
                            ? ''
                            : 'none'
                    }}
                        onClick={() => allDone()}><FontAwesomeIcon className="App-svg-left" icon={faCheck}/>All Done</button>
                </p>
                <p>
                    <button
                        style={{
                        display: listBtnsDelAll
                            ? ''
                            : 'none'
                    }}
                        onClick={() => deleteAll()}><FontAwesomeIcon className="App-svg-left" icon={faTimes}/>Delete all</button>
                </p>
            </div>
        )
    };
};

export default ListBtns;