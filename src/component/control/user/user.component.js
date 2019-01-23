import React, { Component } from 'react';

export class UserComponent extends Component {

    render() {
        return (
            <div className="header header--left d-flex align-items-center">
                    <img src="./img/user_1.jpg" className="ml-2 user" alt="" />
                    <h3 className="text-white d-inline font-weight-light ml-2">
                        John Terry
          </h3>
                </div>
        );
    }
}

