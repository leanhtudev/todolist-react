import React, { Component } from 'react';
import { Checkbox, CheckboxGroup } from 'react-checkbox-group';
import {connect} from 'react-redux';
 class ModalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      labelArr: [],
      priority: '',
      memberIDArr: '',
      status: 1,
      description: ''
    }
  }
  componentWillReceiveProps(nextProps){
    let {editTask}=nextProps;
    if(editTask){
      let {id,name,labelArr,priority,status,memberIDArr,description}=editTask;
      this.setState({
        id, //id:id
        name,//name:name
        labelArr,
        priority,
        memberIDArr,
        status:1,
        description
      })
    }
    if(!nextProps.editStatus){
      this.setState({
          id: '',
          name: '',
          labelArr: [],
          priority: '',
          memberIDArr: [],
          status: 1,
          description: ''
      });
  }
  }
  handleOnChange = (e) => {
    if (e.target.name == "priority" || e.target.name == "id") {
      this.setState({
        [e.target.name]: parseInt(e.target.value),
      })
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      })
    }

  }
  handleCheckboxMember=(e)=>{
    this.setState({
      memberIDArr: e
    })
  }
  handleCheckboxLabel=(e)=>{
    this.setState({
      labelArr: e
    })
  }
  handleOnSubmit=(e)=>{
    e.preventDefault();
   
   if(this.props.editStatus==false){
    this.props.onAddTask(this.state);
   }else{
     this.props.onUpdateTask(this.state);
   }
    
    document.getElementById('btnClose').click();
  }
  render() {
    var {id,name,labelArr,priority,memberIDArr,status,description}=this.state;
    var {editStatus}=this.props;
    return (
      <div className="modal fade" id="modalTask">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">
              {this.props.editStatus?'Update Task':'Add Task'}
                </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
              >
                ×
          </button>
            </div>
            {/* Modal body */}
            <form onSubmit={this.handleOnSubmit}>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="taskName">Task ID:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="id"
                    name="id"
                   value={id}
                    onChange={this.handleOnChange}

                  />
                </div>
                <div className="form-group">
                  <label htmlFor="taskName">Task name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="taskName"
                    name="name"
                   value={name}
                    onChange={this.handleOnChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description:</label>
                  <textarea
                    className="form-control"
                    rows={2}
                    id="description"
                    value={description}
                    name="description"
                    onChange={this.handleOnChange}
                    
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="priority">Priority:</label>
                  <select className="form-control" value={priority} id="priority" onChange={this.handleOnChange} name="priority"  >

                    <option value="3">Low</option>
                    <option value="2">Average</option>
                    <option value="1">High</option>
                  </select>
                </div>
                <label htmlFor="">Implemented by:</label>
                <br />
                <CheckboxGroup name="memberIDArr" value={memberIDArr} onChange={this.handleCheckboxMember}>
                  <Checkbox value="user_1" />Peter
                  <Checkbox value="user_2" />John
                  <Checkbox value="user_3" />Jack
                </CheckboxGroup>
                <br />
                <br />
                <label htmlFor="">Label:</label>
                <br />
                <CheckboxGroup value={labelArr}  name="labelArr"onChange={this.handleCheckboxLabel}>
                  <Checkbox value="Frontend" />Frontend
                  <Checkbox value="Backend" />Backend
                  <Checkbox value="API" />Api
                  <Checkbox value="Issue"/>Issue

                </CheckboxGroup>
              </div>

              {/* Modal footer */}
              <div className="modal-footer">
                <button type="submit"
                  className="btn btn-success" >Submit</button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                  id="btnClose"
                >
                  Close
          </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapStatetoProps =(state)=>{
  return {
    editStatus:state.editStatus,
    editTask:state.editTask
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    onUpdateTask:(task)=>{
      dispatch({
        type:'UPDATE_TASK',
        task
      })
    },
    onAddTask:(task)=>{
      dispatch({
        type:'ADD_TASK',
        task
      })
    }
  }
}
export default connect(mapStatetoProps,mapDispatchToProps)(ModalComponent);