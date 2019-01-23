import React, { Component } from 'react';
import TaskItemComponent  from './task-item/task-item.component';
import { FilterStringComponent } from './filter-string/filter-string.component';
import {connect} from 'react-redux'; 
 class TaskListComponent extends Component {
  filterArr = [];
  // sortTaskItem = (type,value,arr)=>{
  //   switch(type){
  //     case 'name': 
  //       arr.sort((a,b)=>{
  //         if(a.name>b.name){
  //           return value;
  //         }else if(a.name<b.name){
  //           return -value;
  //         }
  //         else{
  //           return 0;
  //         }
  //       })
  //       break;
  //       default: return arr;
  //   }
    
  // }
  filterTaskItem = (type, value) => {
    let { TaskList } = this.props
    switch (type) {
      case 'progress':
        this.filterArr = TaskList.filter((task, index) => {
          return task.status === value
        })
        break;
        case 'priority':
        console.log(value);
        this.filterArr = TaskList.filter((task, index) => {
          return task.priority === value
        })
        break;
      case 'label':
        this.filterArr = TaskList.filter((task, index) => {
          for (let label of task.labelArr) {
            if (label === value) {
              return task;
            }
          }
        })
        break;
      default: this.filterArr = TaskList
    }
  }
  renderTaskItem = () => {
    // let { filterType, filterValue,sortBy,sortValue } = this.props;
    this.filterTaskItem(this.props.Filter.filterType, this.props.Filter.filterValue)
    // sort after filtering
    // this.sortTaskItem(sortBy,sortValue,this.filterArr)
    var taskItemArr = this.filterArr.map((task, index) => {
      return <TaskItemComponent updateStatus={this.props.updateStatus} getEditTask={this.props.getEditTask} task={task} key={index} index={index} setEditStatus={this.props.setEditStatus} deleteTask={this.props.deleteTask} />
    })
    return taskItemArr;
  }
  componentDidMount(){
    this.props.onGetDataList();
  }
  render() {
    console.log(this.props.Filter);
    // console.log(this.props.TasksData);
    var { TasksData } = this.props;
    // var TasksData = this.props.TasksData;
    return (
      <div className="col-md-9 px-0">
        <div className="container-fluid px-0">
          <div className="row header header--right d-flex align-items-center mx-0">
            <div className="col-md-6">
              <div className=" d-flex justify-content-between">
                <h3 className="text-left ml-2 ">Task List</h3>
              </div>
            </div>
            <FilterStringComponent />
          </div>
        </div>
        <div className="px-3">
          <table className="table table-hover">
            <thead>
              <tr>
                <th className="text-center">STT</th>
                <th className="text-center">Task</th>
                <th className="text-center">Label</th>
                <th className="text-center">Priority</th>
                <th className="text-center">Implement By</th>
                <th className="text-center">Action</th>
                <th className="text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {this.renderTaskItem()}
            </tbody>
          </table>
        </div>
      </div>

    );
  }
}
const mapStatetoProps =(state)=>{
  return {
    TaskList:state.TaskList,
    Filter:state.filter
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    onGetDataList:()=>{ //function
      dispatch({
        type:'GET_TASK_LIST'
      })
    }
  }
}

export default connect(mapStatetoProps,mapDispatchToProps)(TaskListComponent);