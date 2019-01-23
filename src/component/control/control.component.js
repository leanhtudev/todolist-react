import React, { Component } from 'react';
import { UserComponent } from './user/user.component';
import  AddNewTaskComponent  from './addnewtask/addnewtask.component';
import  FilterProgressComponent  from './filter-progress/filter-progress.component';
import  FilterLabelComponent  from './filter-label/filter-label.component';
import  FilterPriorityComponent  from './filter-priority/filter-priority.component';
import { SortComponent } from './sort/sort.component';

export class ControlComponent extends Component {

    render() {
        return (
            <div className="col-md-3 text-center px-0">
                <UserComponent/>
                <AddNewTaskComponent setEditStatus={this.props.setEditStatus}/>
                {/* Filter */}
                <div className="px-3">
                    <FilterProgressComponent />
                    <FilterLabelComponent />
                    <FilterPriorityComponent />
                    <SortComponent getSort={this.props.getSort}/>
                </div>
            </div>
        );
    }
}

