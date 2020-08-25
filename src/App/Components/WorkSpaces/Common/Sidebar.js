import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <ul className="sidemenu">
                    <li><Link to="/home">Add Event</Link></li>
                    <li><Link to="/event">List Event</Link></li>
                </ul>
            </div>
        )
    }
}
