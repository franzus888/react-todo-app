import React, {Component} from 'react';
// Components
import Header from './Header';
import AddTodo from './AddTodo';
import Lists from './Lists';
import Footer from './Footer'
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
        this.setState({
            newTodo: "",
            listBtnsAllDone: true,
            todos: [
                ...this.state.todos, {
                    title: this.state.newTodo,
                    done: false
                }
            ]
        });
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

        if (todos.length === 0) {
            this.setState({listBtnsAllDone: "", listBtnsDelAll: true, todos, dones});
        } else {
            this.setState({todos, dones});
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

        if (dones.length === 0) {
            this.setState({listBtnsAllDone: true, listBtnsDelAll: "", todos, dones});
        } else {
            this.setState({todos, dones});
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

    removeTodo(index) {
        const dones = [...this.state.dones];
        dones.splice(index, 1);

        this.setState({dones});
    };

    deleteTodo(index) {
        const todos = [...this.state.todos];
        todos.splice(index, 1);

        if (todos.length === 0) {
            this.setState({listBtns: false, todos});
        } else {
            this.setState({todos});
        }
    };

    deleteDone(index) {
        let dones = [...this.state.dones];
        dones.splice(index, 1);

        this.setState({dones});
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

        if (todos.length === 0) {
            this.setState({listBtnsAllDone: false, listBtnsDelAll: true, todos: [], dones});
        } else {
            this.setState({listBtnsDelAll: true, todos: [], dones});
        };
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
                        todos={this.state.todos}
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
                        hoverDone={this.state.hoverDone}
                        deleteDone={this
                        .deleteDone
                        .bind(this)}/>
                </main>
                <Footer/>
            </div>
        );
    };
};

export default App;
