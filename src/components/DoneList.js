import React, {Component} from 'react';
// Fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSort, faTimes} from '@fortawesome/free-solid-svg-icons';
// Styles
import './DoneList.scss';

class DoneList extends Component {
    render() {
        let {
            dones,
            showDoneBtns,
            hideDoneBtns,
            uncheckDoneToDo,
            hoverDone,
            deleteDone
        } = this.props;
        return (
            <ul className="App-done-list">
                {dones.map((done, index) => {
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
                })}
            </ul>
        )
    };
};

export default DoneList;