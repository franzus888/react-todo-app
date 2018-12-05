import React from 'react';
// Fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';
// Styles
import './../styles/ListBtns.scss';

function ListBtns(props) {
    const {listBtnsAllDone, allDone, listBtnsDelAll, deleteAll} = props;
    return (
        <div className="App-list-btns">
            <p>
                {listBtnsAllDone && <button onClick={() => allDone()}><FontAwesomeIcon className="App-svg-left" icon={faCheck}/>All Done</button>}
            </p>
            <p>
                {listBtnsDelAll && <button onClick={() => deleteAll()}><FontAwesomeIcon className="App-svg-left" icon={faTimes}/>Delete all</button>}
            </p>
        </div>
    )
};

export default ListBtns;