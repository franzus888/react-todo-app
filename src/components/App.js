import React, {Component} from 'react';
// Components
import Header from './Header';
import AddTodo from './AddTodo';
import Lists from './Lists';
import Footer from './Footer'
// Drag and Drop
import HTML5Backend from 'react-dnd-html5-backend'
import {DragDropContext} from 'react-dnd'
// Styles
import './App.scss';

class App extends Component {

    constructor() {
        super();
        this.state = {
            newTodo: "",
            hoverTodo: false,
            hoverDone: false,
            listBtnsAllDone: false,
            listBtnsDelAll: false,
            todos: [],
            dones: []
        };
    };

    newTodoChanged(e) {
        this.setState({newTodo: e.target.value});
    };

    formSubmitted(e) {
        e.preventDefault();
        if (this.state.newTodo === '') {
            return;
        };

        let todos = [
            ...this.state.todos, {
                title: this.state.newTodo,
                done: false
            }
        ]
        if (todos.length >= 2) {
            this.setState({newTodo: "", listBtnsAllDone: true, todos});
        } else {
            this.setState({newTodo: "", todos});
        }
    };

    checkTodoDone(e, index) {

        let todos = [...this.state.todos]; // copy the array
        todos[index] = {
            ...todos[index],
            done: e.target.checked
        };

        let dones = [
            ...this.state.dones,
            todos[index]
        ]; // move todo to done list
        todos.splice(index, 1); // remove todo from todos list

        if (dones.length >= 2 && todos.length >= 2) {
            this.setState({listBtnsAllDone: true, listBtnsDelAll: true, todos, dones});
        } else if (dones.length >= 2 && todos.length <= 1) {
            this.setState({listBtnsAllDone: false, listBtnsDelAll: true, todos, dones});
        } else if (dones.length <= 1 && todos.length >= 2) {
            this.setState({listBtnsAllDone: true, listBtnsDelAll: false, todos, dones});
        } else {
            this.setState({listBtnsAllDone: false, listBtnsDelAll: false, todos, dones});
        };
    };

    uncheckDoneToDo(e, index) {
        let dones = [...this.state.dones]; // copy the array
        dones[index] = {
            ...dones[index],
            done: e.target.checked
        };

        let todos = [
            ...this.state.todos,
            dones[index]
        ]; // move done to todo list
        dones.splice(index, 1); // remove done from done list

        if (dones.length >= 2 && todos.length >= 2) {
            this.setState({listBtnsAllDone: true, listBtnsDelAll: true, todos, dones});
        } else if (dones.length >= 2 && todos.length <= 1) {
            this.setState({listBtnsAllDone: false, listBtnsDelAll: true, todos, dones});
        } else if (dones.length <= 1 && todos.length >= 2) {
            this.setState({listBtnsAllDone: true, listBtnsDelAll: false, todos, dones});
        } else {
            this.setState({listBtnsAllDone: false, listBtnsDelAll: false, todos, dones});
        };
    };

    showTodoBtns(index) {
        this.setState({hoverTodo: index})
    };

    hideTodoBtns() {
        this.setState({hoverTodo: ''})
    };

    showDoneBtns(index) {
        this.setState({hoverDone: index})
    };

    hideDoneBtns() {
        this.setState({hoverDone: ''})
    };

    moveTodo(dragItem, hoverIndex) {
        let todos = [...this.state.todos]; // copy the array

        if (dragItem.index === hoverIndex) {
            return // Don't replace items with themselves
        };

        todos.splice(dragItem.index, 1); // delete dragged item
        todos.splice(hoverIndex, 0, dragItem); // insert dragged item

        this.setState({todos});
    };

    deleteTodo(index) {
        let todos = [...this.state.todos];
        todos.splice(index, 1);

        if (todos.length <= 1) {
            this.setState({listBtnsAllDone: false, todos});
        } else {
            this.setState({listBtnsAllDone: true, todos});
        };
    };

    deleteDone(index) {
        let dones = [...this.state.dones];
        dones.splice(index, 1);

        if (dones.length <= 1) {
            this.setState({listBtnsDelAll: false, dones});
        } else {
            this.setState({listBtnsDelAll: true, dones});
        };
    };

    showListBtns() {
        let todos = [...this.state.todos];
        let dones = [...this.state.dones];
        if (todos.length !== 0 && dones.length !== 0) {
            return {display: 'none'};
        }
    };

    deleteAll() {
        let todos = [...this.state.todos];
        todos.splice(0, todos.length);
        let dones = [...this.state.dones];
        dones.splice(0, dones.length);
        this.setState({listBtnsAllDone: false, listBtnsDelAll: false, todos, dones});
    };

    allDone() {
        let todos = this
            .state
            .todos
            .map(todo => {
                return {
                    ...todo,
                    done: true
                }
            }); // mark todos done
        let dones = [...this.state.dones].concat(todos); // merge arrays
        todos.splice(0, todos.length); // delete todos
        this.setState({listBtnsAllDone: false, listBtnsDelAll: true, todos: [], dones});
    };

    render() {
        return (
            <div className="App">
                <Header/>
                <main className="App-main">
                    <AddTodo
                        newTodo={this.state.newTodo}
                        formSubmitted={this
                        .formSubmitted
                        .bind(this)}
                        newTodoChanged={this
                        .newTodoChanged
                        .bind(this)}/>
                    <Lists
                        showTodoBtns={this
                        .showTodoBtns
                        .bind(this)}
                        hideTodoBtns={this
                        .hideTodoBtns
                        .bind(this)}
                        checkTodoDone={this
                        .checkTodoDone
                        .bind(this)}
                        hoverTodo={this.state.hoverTodo}
                        moveTodo={this
                        .moveTodo
                        .bind(this)}
                        deleteTodo={this
                        .deleteTodo
                        .bind(this)}
                        dones={this.state.dones}
                        showDoneBtns={this
                        .showDoneBtns
                        .bind(this)}
                        hideDoneBtns={this
                        .hideDoneBtns
                        .bind(this)}
                        uncheckDoneToDo={this
                        .uncheckDoneToDo
                        .bind(this)}
                        deleteDone={this
                        .deleteDone
                        .bind(this)}
                        allDone={this
                        .allDone
                        .bind(this)}
                        deleteAll={this
                        .deleteAll
                        .bind(this)}
                        todos={this.state.todos}
                        hoverDone={this.state.hoverDone}
                        listBtnsAllDone={this.state.listBtnsAllDone}
                        listBtnsDelAll={this.state.listBtnsDelAll}/>
                </main>
                <Footer/>
            </div>
        );
    };
};

export default DragDropContext(HTML5Backend)(App)
