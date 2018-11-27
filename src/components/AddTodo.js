import React, {Component} from 'react';
// Fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
// Styles
import './AddTodo.scss';

class AddTodo extends Component {
    render() {
        const {newTodo, formSubmitted, newTodoChanged} = this.props;
        return (
            <div className="App-add-todo">
                <form onSubmit={(e) => formSubmitted(e)}>
                    <p><input
                        className="App-textfield"
                        type="text"
                        onChange={(e) => newTodoChanged(e)}
                        value={newTodo}/></p>
                    <p>
                        <button type="submitButton"><FontAwesomeIcon className="App-svg-left" icon={faPlus}/>Add</button>
                    </p>
                </form>
            </div>
        )
    };
};

export default AddTodo;