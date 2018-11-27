import React, {Component} from 'react';
import Todolist from './TodoList'
import Donelist from './DoneList'
// Styles
import './Lists.scss';

class Lists extends Component {
    render() {
        return (
            <div className="App-lists">
                <Todolist
                    todos={this.props.todos}
                    showTodoBtns={this.props.showTodoBtns}
                    hideTodoBtns={this.props.hideTodoBtns}
                    checkTodoDone={this.props.checkTodoDone}
                    hoverTodo={this.props.hoverTodo}
                    deleteTodo={this.props.deleteTodo}/>
                <Donelist
                    dones={this.props.dones}
                    showDoneBtns={this.props.showDoneBtns}
                    hideDoneBtns={this.props.hideDoneBtns}
                    uncheckDoneToDo={this.props.uncheckDoneToDo}
                    hoverDone={this.props.hoverDone}
                    deleteDone={this.props.deleteDone}/>
            </div>
        )
    };
};

export default Lists;