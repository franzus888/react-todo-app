import React, {Component} from 'react';
import Todolist from './TodoList'
import Donelist from './DoneList'
import ListBtns from './ListBtns'
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
                    hoverTodoItem={this.props.hoverTodoItem}
                    moveTodo={this.props.moveTodo}
                    deleteTodo={this.props.deleteTodo}/>
                <Donelist
                    dones={this.props.dones}
                    showDoneBtns={this.props.showDoneBtns}
                    hideDoneBtns={this.props.hideDoneBtns}
                    uncheckDoneToDo={this.props.uncheckDoneToDo}
                    hoverDone={this.props.hoverDone}
                    deleteDone={this.props.deleteDone}/>
                <ListBtns
                    listBtnsAllDone={this.props.listBtnsAllDone}
                    allDone={this.props.allDone}
                    listBtnsDelAll={this.props.listBtnsDelAll}
                    deleteAll={this.props.deleteAll}/>
            </div>
        )
    };
};

export default Lists;