import React, { Component } from 'react';
import {connect} from 'react-redux';
 class FilterPriorityComponent extends Component {
    filterPriority = (e) =>{
        this.props.onFilter('priority',parseInt(e.target.value))
    }
    render() {
        return (
            <div className="form-group text-left">
                        <label htmlFor="sel1">Priority</label>
                        <select className="form-control" onChange={this.filterPriority}>
                            <option className="font-weight-bold">All</option>
                            <option className="text-info font-weight-bold" value="3">
                                Low
              </option>
                            <option className="text-success font-weight-bold" value="2">
                                Average
              </option>
                            <option className="text-danger font-weight-bold" value="1">
                                High
              </option>
                        </select>
                    </div>
        );
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        onFilter:(type,value)=>{
            dispatch({
                type:'PRIORITY',
                filterType:type,
                filterValue:value
            })
        }
    }
}
export default connect(null,mapDispatchToProps)(FilterPriorityComponent);
