import React, { Component } from 'react';
import {connect} from 'react-redux';
 class FilterLabelComponent extends Component {
    filterLabel=(type,value)=>{
        this.props.onFilterLabel(type,value)
    }
    render() {
        return (
            <div className="filter filter--label">
                <ul className="list-unstyled text-left">
                    Label
              <li className="py-1 display-5 lead" onClick={()=>this.filterLabel('label','Frontend')}>
                        <i className="fa fa-circle mr-2" />Frontend
              </li>
                    <li className="py-1 display-5 lead" onClick={()=>this.filterLabel('label','Backend')}>
                        <i className="fa fa-circle mr-2" />Backend
              </li>
                    <li className="py-1 display-5 lead" onClick={()=>this.filterLabel('label','API')}>
                        <i className="fa fa-circle mr-2" />API
              </li>
                    <li className="py-1 display-5 lead" onClick={()=>this.filterLabel('label','Issue')}>
                        <i className="fa fa-circle mr-2" />Issue
              </li>
                </ul>
            </div>
        );
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        onFilterLabel:(type,value)=>{
            dispatch({
                type:'LABEL',
                filterType:type,
                filterValue:value
            })
        }
    }
}
export default connect(null,mapDispatchToProps)(FilterLabelComponent);
