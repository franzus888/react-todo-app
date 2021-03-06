import React from 'react';
// Fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSort, faTimes} from '@fortawesome/free-solid-svg-icons';
// Drag and Drop
import {DragSource, DropTarget} from 'react-dnd';
import flow from 'lodash/flow';
// Styles
import './../styles/TodoItem.scss';

const itemSource = {
    beginDrag(props) {
        const todo = props.todo;
        todo.index = props.index;
        return todo;
    }
};

const itemTarget = {
    hover(props, monitor) {
        const dragItem = monitor.getItem();
        const hoverIndex = props.index;
        return props.hoverTodoItem(dragItem, hoverIndex);
    },
    drop(props, monitor) {
        const dragItem = monitor.getItem();
        const hoverIndex = props.index;
        return props.moveTodo(dragItem, hoverIndex);
    }
};

function TodoItem(props) {

    const {
        todo,
        index,
        showTodoBtns,
        hideTodoBtns,
        checkTodoDone,
        hoverTodo,
        deleteTodo,
        isHovering,
        connectDragSource,
        connectDropTarget
    } = props;

    return connectDragSource(connectDropTarget(
        <li
            className="App-list-item"
            onMouseEnter={() => showTodoBtns(index)}
            onMouseLeave={() => hideTodoBtns(index)}
            style={{
            opacity: isHovering
                ? 0
                : 1
        }}>
            <input
                className="App-checkbox"
                onChange={(e) => checkTodoDone(e, index)}
                type="checkbox"
                checked={todo.done}/> {hoverTodo === index && <span className="App-todo-move"><FontAwesomeIcon className="App-svg-middle" icon={faSort}/></span>}
            <span className="App-item-todo">{todo.title}</span>
            {hoverTodo === index && <span className="App-todo-delete"><FontAwesomeIcon
                onClick={() => deleteTodo(index)}
                className="App-svg-delete"
                icon={faTimes}/></span>}
        </li>
    ))
};

export default flow(DragSource('todo', itemSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource()
})), DropTarget('todo', itemTarget, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isHovering: monitor.isOver()
})))(TodoItem);