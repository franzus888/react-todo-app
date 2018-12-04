import React, {Component} from 'react';
// Fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSort, faTimes} from '@fortawesome/free-solid-svg-icons';
// Drag and Drop
import {DragSource, DropTarget} from 'react-dnd';
import flow from 'lodash/flow';
// Styles
import './TodoItem.scss';

const itemSource = {
    beginDrag(props) {
        let todo = props.todo;
        todo.index = props.index;
        return todo;
    }
};

const itemTarget = {
    hover(props, monitor) {
        let dragItemIndex = monitor
            .getItem()
            .index;
        let hoverIndex = props.index
        return props.hoverTodoItem(dragItemIndex, hoverIndex);
    },
    drop(props, monitor) {
        let dragItem = monitor.getItem()
        let hoverIndex = props.index
        return props.moveTodo(dragItem, hoverIndex);
    }
};

class TodoItem extends Component {
    render() {
        let {
            todo,
            index,
            showTodoBtns,
            hideTodoBtns,
            checkTodoDone,
            hoverTodo,
            deleteTodo,
            isDragging,
            connectDragSource,
            connectDropTarget
        } = this.props;

        return connectDragSource(connectDropTarget(
            <li
                className="App-list-item"
                onMouseEnter={() => showTodoBtns(index)}
                onMouseLeave={() => hideTodoBtns(index)}
                style={{
                opacity: isDragging
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
};

export default flow(DragSource('todo', itemSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
})), DropTarget('todo', itemTarget, (connect) => ({
    connectDropTarget: connect.dropTarget()
})))(TodoItem);