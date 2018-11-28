import React, {Component} from 'react';
// Fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
// Styles
import './DoneItem.scss';

class DoneItem extends Component {
    render() {
        let {
            done,
            index,
            showDoneBtns,
            hideDoneBtns,
            uncheckDoneToDo,
            hoverDone,
            deleteDone
        } = this.props;

        return (
            <li
                className="App-list-item"
                key={index}
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
};

export default DoneItem;