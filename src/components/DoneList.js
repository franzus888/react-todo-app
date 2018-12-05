import React from 'react';
import DoneItem from './DoneItem'
// Styles
import './../styles/DoneList.scss';

function DoneList(props) {
    const {
        dones,
        showDoneBtns,
        hideDoneBtns,
        uncheckDoneToDo,
        hoverDone,
        deleteDone
    } = props;
    return (
        <ul className="App-done-list">
            {dones.map((done, index) => {
                return (<DoneItem
                    done={done}
                    index={index}
                    key={index}
                    showDoneBtns={showDoneBtns}
                    hideDoneBtns={hideDoneBtns}
                    uncheckDoneToDo={uncheckDoneToDo}
                    hoverDone={hoverDone}
                    deleteDone={deleteDone}/>)
            })}
        </ul>
    )
};

export default DoneList;