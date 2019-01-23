import React, { Component } from 'react';
import './App.css';
import { ControlComponent } from './component/control/control.component';
import  TaskListComponent  from './component/Tasklist/tasklist.component';
import ModalComponent  from './component/modal/modal.component';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: 'name',
      sortValue:1
    }
  }
  getSort = (type,value) => {
    console.log(type);
    console.log(value);
    this.setState({
      sortBy: type,
      sortValue: value
    })
  }
  
  //take the task needed to change
  
  render() {
    let { taskList, editStatus, editedTask, filterType, filterValue,sortBy,sortValue } = this.state;
    return (
      <div>
        <h1 className="text-center my-2">TASK MANAGEMENT</h1>
        <div className="container-fluid">
          <div className="row">
            {/* PANEL */}
            <ControlComponent getSort={this.getSort} getFilter={this.getFilter} setEditStatus={this.setEditStatus} />
            {/* DISPLAY */}
            <TaskListComponent sortBy={sortBy} sortValue={sortValue} filterType={filterType} filterValue={filterValue} updateStatus={this.updateStatus} />
          </div>
        </div>
        {/* The Modal */}
        <ModalComponent/>
      </div>

    );
  }
}

export default App;
