import React, { Component } from 'react'
import { Link, Redirect } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Topbar from './Common/Topbar';
import Sidebar from './Common/Sidebar';

class Home extends Component {
    constructor(props) {
        super(props)

        const token = localStorage.getItem('username');
        let loggedIn = true;
        if (token == null) {
            loggedIn = false;
        }

        this.state = {
            loggedIn,
            startDate: '',
            endDate: '',
            title: '',
            description: '',
        }
    }

    handleStartDate = date => {
        this.setState({
            startDate: date,
        });
    };

    handleEndDate = date => {
        this.setState({
            endDate: date
        });
    };
    
    handleChange = (evt) => {
        evt.preventDefault()
        let targetName = evt.target.name
        let targetValue = evt.target.value
        this.setState({ [targetName]: targetValue })
    };

    handleEventForm = async (event) => {
        event.preventDefault();
        this.setState({ submitted: true });
        const { startDate, endDate, title, description } = this.state;
        if (startDate && endDate && title && description) {
            // await this.props.LoginAction(username, password);
            alert('Good to go')
        }
    }


    render() {
        const { startDate, endDate, title, description, submitted, loggedIn } = this.state;
        if (loggedIn === false) {
            return <Redirect to="/" />
        }
        return (
            <div className="main">
                <Topbar {...this.props} />
                <Sidebar {...this.props} />

                <div className="maincontent">
                    <div className="loginwrap registerwrap formwrapper">
                        <h1 className="title">Add Event</h1>
                        <div className="formwrap">
                            <form onSubmit={(event) => this.handleEventForm(event)}>

                                <div className="formfield">
                                    <label htmlFor="startdate">Start</label>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(event) => this.handleStartDate(event)}
                                        id="startdate"
                                        name="startdate"
                                        className="formcontrol"
                                        autoComplete="startdate"
                                        dateFormat="d-M-yyyy"
                                    />
                                    <div className="help-block">
                                        {submitted && !startDate &&
                                            <div className="error-block">Start date is required</div>
                                        }
                                    </div>
                                </div>

                                <div className="formfield">
                                    <label htmlFor="startend">End</label>
                                    <DatePicker
                                        selected={endDate}
                                        onChange={(event) => this.handleEndDate(event)}
                                        id="endDate"
                                        name="endDate"
                                        className="formcontrol"
                                        autoComplete="endDate"
                                        dateFormat="d-M-yyyy"
                                    />
                                    <div className="help-block">
                                        {submitted && !endDate &&
                                            <div className="error-block">End date is required</div>
                                        }
                                    </div>
                                </div>

                                <div className="formfield">
                                    <label htmlFor="title">Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        className="formcontrol"
                                        autoComplete="title"
                                        value={title}
                                        onChange={(event) => this.handleChange(event)}
                                    />
                                    <div className="help-block">
                                        {submitted && !title &&
                                            <div className="error-block">Title is required</div>
                                        }
                                    </div>
                                </div>

                                <div className="formfield">
                                    <label htmlFor="description">Description</label>
                                    <input
                                        type="text"
                                        name="description"
                                        id="description"
                                        className="formcontrol"
                                        autoComplete="description"
                                        value={description}
                                        onChange={(event) => this.handleChange(event)}
                                    />
                                    <div className="help-block">
                                        {submitted && !description &&
                                            <div className="error-block">Description date is required</div>
                                        }
                                    </div>
                                </div>

                                <div className="formfield btnwrp">
                                    <button
                                        className="loginbutton"
                                        id="loginbutton"
                                    >
                                        Submit
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>


                </div>

            </div>
        )
    }
}

export default Home
