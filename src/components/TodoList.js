import React from 'react';
import TodoItem from './TodoItem';
// Drag and Drop
import HTML5Backend from 'react-dnd-html5-backend'
import {DragDropContext} from 'react-dnd'
// Styles
import './../styles/TodoList.scss';

function TodoList(props) {
    const {
        todos,
        showTodoBtns,
        hideTodoBtns,
        checkTodoDone,
        hoverTodo,
        hoverTodoItem,
        moveTodo,
        deleteTodo
    } = props;
    return (
        <ul className="App-todo-list">
            {todos.map((todo, index) => {
                return (<TodoItem
                    todo={todo}
                    key={index}
                    index={index}
                    showTodoBtns={showTodoBtns}
                    hideTodoBtns={hideTodoBtns}
                    checkTodoDone={checkTodoDone}
                    hoverTodo={hoverTodo}
                    hoverTodoItem={hoverTodoItem}
                    moveTodo={moveTodo}
                    deleteTodo={deleteTodo}/>)
            })}
        </ul>
    )
};

export default DragDropContext(HTML5Backend)(TodoList)