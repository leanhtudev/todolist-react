import React, { Component } from 'react';
import {connect} from 'react-redux';
 class TaskItemComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: this.props.task.status,
        }
    }
    labelToColor = (label) => {
        switch (label) {
            case 'Frontend': return '#389E0D';
            case 'Backend': return '#722ED1';
            case 'API': return '#13C2C2';
            case 'Issue': return '#CF1322';
            default: return 'black';
        }
    }
    label = (labelArr) => {
        return labelArr.map((label, index) => {
            return <i key={index}
                className="fa fa-circle"
                style={{ color: `${this.labelToColor(label)}` }}
            />
        })
    }
    priority = (rate) => {
        switch (rate) {
            case 1: return <i className='text-danger'>High</i>;
            case 2: return <i className='text-warning'>Average</i>;
            case 3: return <i className='text-success'>Low</i>;
        }
    }


    getMembers = (memberList) => {
        return memberList.map((mem, index) => {
            return <img key={index} className="user" alt="hinh anh" src={`./img/${mem}.jpg`} />
        })
    }
    renderProgress = (num) => {
        switch (num) {
            case 1: return <i className="fa fa-bed" />
            case 2: return <i className="fa fa-spinner" />
            case 3: return <i className="fa fa-check-square-o mr-2" />
            case 4: return <i className="fa fa-trash-o" />

        }
    }
    handleOnChange = (e) => {
        this.setState({
            status: parseInt(e.target.value)
        })
    }
    deleteTaskItem = (id) =>{
        this.props.onDeleteTask(id)
    }
    handleEditButton=(task)=>{
        this.props.onOpenAddModal(true);
        this.props.onGetEditTask(task);
    }
    handleOnChangeStatus = (e) => {
        // this.props.updateStatus(this.props.task.id,e.target.value)
        // this.setState({
        //     status: parseInt(e.target.value)
        // })
    }
    render() {
        let { index, task } = this.props;
        return (
            <tr>
                <td className="text-center">{index + 1}</td>
                <td className="text-center">{task.name}</td>
                <td className="text-center">
                    {this.label(task.labelArr)}
                </td>
                <td className="text-danger font-weight-bold text-center">
                    {this.priority(task.priority)}
                </td>
                <td className="text-center">

                    {this.getMembers(task.memberIDArr)}
                </td>
                <td className="text-center d-flex">
                    <button type="button"  data-toggle="modal"
                    data-target="#modalTask" className="btn btn-outline-primary" onClick={ ()=> this.handleEditButton(task)}>
                        Edit
              </button>

                    <button 
                   
                       onClick={ () => this.deleteTaskItem(task.id) }
                        type="button"
                        className="btn btn-outline-danger mx-1"
                    >
                        Delete
                    </button>
                    <select className="form-control" value={task.status} name="status" onChange={this.handleOnChangeStatus} >
                        <option value="1">Pending</option>
                        <option value="2">On process</option>
                        <option value="3">Complete</option>
                        <option value="4">Cancel</option>

                    </select>
                </td>
                <td className="text-center">
                    {this.renderProgress(this.state.status)}
                </td>
            </tr>
        );
    }
}
const mapDispatchToProps =(dispatch)=>{
    return {
        onDeleteTask:(id)=>{
            dispatch({
                type:'DELETE_TASK',
                id: id
            })
        },
        onOpenAddModal:(status)=>{
            dispatch({
                type:'OPEN_MODAL',
                status
            })
        },
        onGetEditTask:(task)=>{
            dispatch({
                type:'EDIT_TASK',
                task
            })
        }
    }
}
export default connect(null,mapDispatchToProps)(TaskItemComponent);