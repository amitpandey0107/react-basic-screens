import React, { Component } from 'react'
import { Link, Redirect } from "react-router-dom";
import Topbar from './Common/Topbar';
import Sidebar from './Common/Sidebar';

import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';


class Event extends Component {

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

    


    render() {
        const { loggedIn } = this.state;
        if (loggedIn === false) {
            return <Redirect to="/" />
        }
        return (
            <div className="main">
                <Topbar {...this.props} />
                <Sidebar {...this.props} />

                <div className="maincontent">
                    <h1>Event Calander</h1>
                    
                </div>

            </div>
        )
    }
}

export default Event; 
