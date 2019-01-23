import React, { Component } from 'react';

export class SortComponent extends Component {
    sortByName=(e)=>{
        this.props.getSort('name',parseInt(e.target.value))
    }
    render() {
        return (
            <div className="form-group text-left">
                        <label>Sort by Name</label>
                        <select className="form-control" onChange={this.sortByName}>
                            <option value={1}> A - Z</option>
                            <option value={-1}> Z - A</option>
                        </select>
                    </div>
        );
    }
}
