import React, { Component } from 'react';
import {connect} from 'react-redux';
 class FilterProgressComponent extends Component {
    filterByProgress=(type,value)=>{
        this.props.onFilter(type,value);
    }
    render() {
        return (
            <div className="filter filter--progress">
                <ul className="list-unstyled text-left">
                    Progress
                    <li className="py-1 display-5 lead" onClick={()=>this.filterByProgress('progress',1)}>
                         <i className="fa fa-bed"></i> Pending
                    </li>
                    <li className="py-1 display-5 lead" onClick={()=>this.filterByProgress('progress',2)}>
                        <i className="fa fa-spinner"></i> On process
                    </li>

                    <li className="py-1 display-5 lead" onClick={()=>this.filterByProgress('progress',3)}>
                                <i className="fa fa-check-square-o mr-2" />Complete
                    </li>
                            <li className="py-1 display-5 lead" onClick={()=>this.filterByProgress('progress',4)}>
                                <i className="fa fa-trash-o mr-2" />Cancel
                    </li>
                    
                </ul>
            </div>
        );
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        onFilter:(type,value)=>{
            dispatch({
                type:'PROGRESS',
                filterType:type,
                filterValue: value
            })
        }
    }
}
export default connect(null,mapDispatchToProps)(FilterProgressComponent);