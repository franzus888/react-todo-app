import React, {Component} from 'react';
import DoneItem from './DoneItem'
// Styles
import './DoneList.scss';

class DoneList extends Component {
    render() {
        let {
            dones
        } = this.props;
        return (
            <ul className="App-done-list">
                {dones.map((done, index) => {
                    return (
                        <DoneItem
                        done={done}
                        inedx={index}
                        key={index}
                        showDoneBtns={this.props.showDoneBtns}
                        hideDoneBtns={this.props.hideDoneBtns}
                        uncheckDoneToDo={this.props.uncheckDoneToDo}
                        hoverDone={this.props.hoverDone}
                        deleteDone={this.props.deleteDone}
                        />
                    )
                })}
            </ul>
        )
    };
};

export default DoneList;