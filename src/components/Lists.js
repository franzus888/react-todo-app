import React, {Component} from 'react';
import Todolist from './TodoList'
// Fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSort, faTimes} from '@fortawesome/free-solid-svg-icons';
// Styles
import './Lists.scss';

class Lists extends Component {
    render() {
        let {
            todos,
            showTodoBtns,
            hideTodoBtns,
            checkTodoDone,
            hoverTodo,
            deleteTodo,
            dones,
            showDoneBtns,
            hideDoneBtns,
            uncheckDoneToDo,
            hoverDone,
            deleteDone
        } = this.props;
        return (
            <div className="App-lists">
                <Todolist
                    todos={todos}
                    showTodoBtns={showTodoBtns}
                    hideTodoBtns={hideTodoBtns}
                    checkTodoDone={checkTodoDone}
                    hoverTodo={hoverTodo}
                    deleteTodo={deleteTodo}
                />
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
            </div>
        )
    };
};

export default Lists;