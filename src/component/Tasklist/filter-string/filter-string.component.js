import React, { Component } from 'react';

export class FilterStringComponent extends Component {

    render() {
        return (
            <div className="col-md-6">
                <div className="form-group text-left my-0">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Find Tasks"
                  />
                </div>
              </div>
        );
    }
}

