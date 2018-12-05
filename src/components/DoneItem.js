import React from 'react';
// Fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
// Styles
import './../styles/DoneItem.scss';

function DoneItem(props) {
    const {
        done,
        index,
        showDoneBtns,
        hideDoneBtns,
        uncheckDoneToDo,
        hoverDone,
        deleteDone
    } = props;
    return (
        <li
            className="App-list-item"
            onMouseOver={() => showDoneBtns(index)}
            onMouseOut={() => hideDoneBtns(index)}>
            <input
                className="App-checkbox"
                onChange={(e) => uncheckDoneToDo(e, index)}
                type="checkbox"
                checked={done.done}/>
            <span
                className={done.done
                ? "App-item-done"
                : ""}>{done.title}</span>
            <span
                className="App-done-delete"
                style={{
                display: hoverDone === index
                    ? ''
                    : 'none'
            }}><FontAwesomeIcon
                onClick={() => deleteDone(index)}
                className="App-svg-delete"
                icon={faTimes}/></span>
        </li>
    )
};

export default DoneItem;