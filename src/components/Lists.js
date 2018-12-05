import React from 'react';
import Todolist from './TodoList'
import Donelist from './DoneList'
import ListBtns from './ListBtns'
// Styles
import './../styles/Lists.scss';

function Lists(props) {
    const {
        todos,
        showTodoBtns,
        hideTodoBtns,
        checkTodoDone,
        hoverTodo,
        hoverTodoItem,
        moveTodo,
        deleteTodo,
        dones,
        showDoneBtns,
        hideDoneBtns,
        uncheckDoneToDo,
        hoverDone,
        deleteDone,
        listBtnsAllDone,
        allDone,
        listBtnsDelAll,
        deleteAll
    } = props;

    return (
        <div className="App-lists">
            <Todolist
                todos={todos}
                showTodoBtns={showTodoBtns}
                hideTodoBtns={hideTodoBtns}
                checkTodoDone={checkTodoDone}
                hoverTodo={hoverTodo}
                hoverTodoItem={hoverTodoItem}
                moveTodo={moveTodo}
                deleteTodo={deleteTodo}/>
            <Donelist
                dones={dones}
                showDoneBtns={showDoneBtns}
                hideDoneBtns={hideDoneBtns}
                uncheckDoneToDo={uncheckDoneToDo}
                hoverDone={hoverDone}
                deleteDone={deleteDone}/>
            <ListBtns
                listBtnsAllDone={listBtnsAllDone}
                allDone={allDone}
                listBtnsDelAll={listBtnsDelAll}
                deleteAll={deleteAll}/>
        </div>
    )
};

export default Lists;