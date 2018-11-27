import React, {Component} from 'react';
// Components
import AddTodo from './AddTodo';
// Fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faList, faCopyright, faSort, faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';
import {faXing, faLinkedin} from '@fortawesome/free-brands-svg-icons';
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
                <header className="App-header">
                    <h1><FontAwesomeIcon className="App-svg-left" icon={faList}/>Todo List</h1>
                </header>
                <main className="App-main">
                    <AddTodo
                        newTodo={this.state.newTodo}
                        formSubmitted={this
                        .formSubmitted
                        .bind(this)}
                        newTodoChanged={this
                        .newTodoChanged
                        .bind(this)}/>
                    <div className="App-lists">
                        <ul className="App-todo-list">
                            {this
                                .state
                                .todos
                                .map((todo, index) => {
                                    return (
                                        <li
                                            className="App-list-item"
                                            key={index}
                                            onMouseOver={() => this.showTodoBtns(index)}
                                            onMouseOut={() => this.hideTodoBtns(index)}>
                                            <input
                                                className="App-checkbox"
                                                onChange={(e) => this.checkTodoDone(e, index)}
                                                type="checkbox"
                                                checked={todo.done}/>
                                            <span
                                                className="App-todo-move"
                                                style={{
                                                display: this.state.hoverTodo === index
                                                    ? ''
                                                    : 'none'
                                            }}><FontAwesomeIcon className="App-svg-middle" icon={faSort}/></span>
                                            <span className="App-item-todo">{todo.title}</span>
                                            <span
                                                className="App-todo-delete"
                                                style={{
                                                display: this.state.hoverTodo === index
                                                    ? ''
                                                    : 'none'
                                            }}><FontAwesomeIcon
                                                onClick={() => this.deleteTodo(index)}
                                                className="App-svg-delete"
                                                icon={faTimes}/></span>
                                        </li>
                                    )
                                })}
                        </ul>
                        <ul className="App-done-list">
                            {this
                                .state
                                .dones
                                .map((done, index) => {
                                    return (
                                        <li
                                            className="App-list-item"
                                            key={index}
                                            onMouseOver={() => this.showDoneBtns(index)}
                                            onMouseOut={() => this.hideDoneBtns(index)}>
                                            <input
                                                className="App-checkbox"
                                                onChange={(e) => this.uncheckDoneToDo(e, index)}
                                                type="checkbox"
                                                checked={done.done}/>
                                            <span
                                                className={done.done
                                                ? "App-item-done"
                                                : ""}>{done.title}</span>
                                            <span
                                                className="App-done-delete"
                                                style={{
                                                display: this.state.hoverDone === index
                                                    ? ''
                                                    : 'none'
                                            }}><FontAwesomeIcon
                                                onClick={() => this.deleteDone(index)}
                                                className="App-svg-delete"
                                                icon={faTimes}/></span>
                                        </li>
                                    )
                                })}
                        </ul>
                    </div>
                    <div className="App-list-btns">
                        <button
                            style={{
                            display: this.state.listBtnsAllDone
                                ? ''
                                : 'none'
                        }}
                            onClick={this
                            .allDone
                            .bind(this)}><FontAwesomeIcon className="App-svg-left" icon={faCheck}/>All Done</button>
                        <button
                            style={{
                            display: this.state.listBtnsDelAll
                                ? ''
                                : 'none'
                        }}
                            onClick={this
                            .deleteAll
                            .bind(this)}><FontAwesomeIcon className="App-svg-left" icon={faTimes}/>Delete all</button>
                    </div>
                </main>
                <footer className="App-footer">
                    <div>
                        <span><FontAwesomeIcon className="App-svg-left" icon={faCopyright}/>
                            <a href="mailto:franz.straube@gmail.com">Franz Straube</a>
                        </span>
                    </div>
                    <div>
                        <span>
                            <a
                                href="https://www.xing.com/profile/Franz_Straube"
                                target="_blank"
                                rel="noopener noreferrer"><FontAwesomeIcon className="App-svg-left" icon={faXing}/></a>
                        </span>
                        <span className="seperator">|</span>
                        <span>
                            <a
                                href="https://www.linkedin.com/in/franz-straube-039473b4/"
                                target="_blank"
                                rel="noopener noreferrer"><FontAwesomeIcon className="App-svg-right" icon={faLinkedin}/></a>
                        </span>
                    </div>
                </footer>
            </div>
        );
    };
};

export default App;
