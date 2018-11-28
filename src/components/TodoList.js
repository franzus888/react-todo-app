import React, {Component} from 'react';
import TodoItem from './TodoItem';
// Styles
import './TodoList.scss';

class TodoList extends Component {
    render() {
        let {todos} = this.props;
        return (
            <ul className="App-todo-list">
                {todos.map((todo, index) => {
                    return (<TodoItem
                        todo={todo}
                        key={index}
                        index={index}
                        showTodoBtns={this.props.showTodoBtns}
                        hideTodoBtns={this.props.hideTodoBtns}
                        checkTodoDone={this.props.checkTodoDone}
                        hoverTodo={this.props.hoverTodo}
                        hoverTodoItem={this.props.hoverTodoItem}
                        moveTodo={this.props.moveTodo}
                        deleteTodo={this.props.deleteTodo}/>)
                })}
            </ul>
        )
    };
};

export default TodoList