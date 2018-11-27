import React, {Component} from 'react';
// Fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSort, faTimes} from '@fortawesome/free-solid-svg-icons';
// Styles
import './TodoList.scss';

class TodoList extends Component {
    render() {
        let {
            todos,
            showTodoBtns,
            hideTodoBtns,
            checkTodoDone,
            hoverTodo,
            deleteTodo
        } = this.props;
        return (
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
        )
    };
};

export default TodoList;