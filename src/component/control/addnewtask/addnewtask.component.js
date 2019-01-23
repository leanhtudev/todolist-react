import React, { Component } from 'react';
import {connect} from 'react-redux';
 class AddNewTaskComponent extends Component {
    setStatus=()=>{
        this.props.onOpenAddModal(false)
    }
    render() {
        return (
            <button
                type="button"
                className="btn my-3 btn--newTask"
                data-toggle="modal"
                data-target="#modalTask"
                onClick={this.setStatus}
            >
                <i className="fa fa-pencil-square-o" />
                Create New Task
            </button>
        );
    }
}
const mapDispatchToProps =(dispatch)=>{
    return {
        onOpenAddModal:(status)=>{
            dispatch({
                type:'OPEN_MODAL',
                status
            })
        }
    }
}
export default connect(null,mapDispatchToProps)(AddNewTaskComponent);