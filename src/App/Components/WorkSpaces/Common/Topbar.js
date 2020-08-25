import React, { Component } from 'react'
import { Link, Redirect } from "react-router-dom";
 class Topbar extends Component {
    constructor(props) {
        super(props)

        const token = localStorage.getItem('username');
        let loggedIn = true;
        if (token == null) {
            loggedIn = false;
        }

        this.state = {
            loggedIn,
        }
    }
    logout = async () => {
        localStorage.removeItem('username');
        localStorage.removeItem('loggedIn');
        this.props.history.push('/')
    }
    render() {
        return (
            <div className="topbar">
                <h3>MY APP</h3>
                <ul className="top-right-menu">
                    <li><button onClick={this.logout}>Logout</button></li>
                </ul>
            </div>
        )
    }
}
export default Topbar;
