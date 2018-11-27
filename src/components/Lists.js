import React, {Component} from 'react';
// Fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSort, faTimes} from '@fortawesome/free-solid-svg-icons';
// Styles
import './Lists.scss';

class Lists extends Component {
    render() {
        const {
            todos,
            showTodoBtns,
            hideTodoBtns,
            checkTodoDone,
            hoverTodo,
            deleteTodo
        } = this.props;
        const {
            dones,
            showDoneBtns,
            hideDoneBtns,
            uncheckDoneToDo,
            hoverDone,
            deleteDone
        } = this.props;
        return (
            <div className="App-lists">
                <ul className="App-todo-list">
                    {todos.map((todo, index) => {
                        return (
                            <li
                                className="App-list-item"
                                key={index}
                                onMouseOver={() => showTodoBtns(index)}
                                onMouseOut={() => hideTodoBtns(index)}>
                                <input
                                    className="App-checkbox"
                                    onChange={(e) => checkTodoDone(e, index)}
                                    type="checkbox"
                                    checked={todo.done}/>
                                <span
                                    className="App-todo-move"
                                    style={{
                                    display: hoverTodo === index
                                        ? ''
                                        : 'none'
                                }}><FontAwesomeIcon className="App-svg-middle" icon={faSort}/></span>
                                <span className="App-item-todo">{todo.title}</span>
                                <span
                                    className="App-todo-delete"
                                    style={{
                                    display: hoverTodo === index
                                        ? ''
                                        : 'none'
                                }}><FontAwesomeIcon
                                    onClick={() => deleteTodo(index)}
                                    className="App-svg-delete"
                                    icon={faTimes}/></span>
                            </li>
                        )
                    })}
                </ul>
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