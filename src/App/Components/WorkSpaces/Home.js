import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import ReactNotification, { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { connect } from 'react-redux';
import { LOADING, SUCCESS, ERROR } from '../../Constants/Misc';
import { AddEventAction } from '../../Actions/AddEventAction';
import { ResetAction } from '../../Actions/ResetAction';

import Topbar from './Common/Topbar';
import Sidebar from './Common/Sidebar';

class Home extends Component {
    constructor(props) {
        super(props)

        const token = localStorage.getItem('UserId');
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
            isLoading:false,
        }
    }

    notifyMe = (title, message, type) => {
        store.addNotification({
            title: title,
            message: message,
            type: type,
            insert: "top",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                duration: 5000,
                onScreen: true
            }
        });
    }


    handleStartDate = date => {       
        var event = new Date(date);
        let date1 = JSON.stringify(event)
        date1 = date1.slice(1, 11)
        this.setState({
            startDate: date1,
        });
    };

    handleEndDate = date => {
        var event = new Date(date);
        let date1 = JSON.stringify(event)
        date1 = date1.slice(1, 11)
        this.setState({
            endDate: date1
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
            await this.props.AddEventAction(title, description, startDate, endDate);
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.AddEventReducer.status === LOADING) {
            return { isLoading: true }
        } else if (props.AddEventReducer.status === SUCCESS) {
            return { isLoading: false };
        } else if (props.AddEventReducer.status === ERROR) {
            return { isLoading: false };
        } else if (props.ResetReducer.status === ERROR) {
            return { isLoading: true };
        } else if (props.ResetReducer.status === SUCCESS) {
            return { isLoading: false, };
        } else if (props.ResetReducer.status === ERROR) {
            return { isLoading: false };
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.AddEventReducer.status === SUCCESS) {
            this.notifyMe('Welcome', 'Event Added Successful', 'success');
            this.props.ResetAction()
        } else if (this.props.AddEventReducer.status === ERROR) {
            this.notifyMe('Opps', 'Failed to add event', 'danger');
            this.props.ResetAction()
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
                <ReactNotification />
                <div className="maincontent">
                    <div className="loginwrap registerwrap formwrapper">
                        <h1 className="title">Add Event</h1>
                        <div className="formwrap">
                            <form onSubmit={(event) => this.handleEventForm(event)}>

                                <div className="formfield">
                                    <label htmlFor="startdate">Start</label>
                                    <DatePicker
                                        value={startDate}
                                        onChange={this.handleStartDate}
                                        id="startdate"
                                        name="startdate"
                                        className="formcontrol"
                                        autoComplete="startdate"
                                        dateFormat="yyyy-MM-dd"
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
                                        value={endDate}
                                        onChange={this.handleEndDate}
                                        id="endDate"
                                        name="endDate"
                                        className="formcontrol"
                                        autoComplete="endDate"
                                        dateFormat="yyyy-MM-dd"
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
                                    {this.state.isLoading ?
                                    <span className="loader">
                                        <img src={'./img/ajax-loader.gif'} alt="loader" />
                                    </span>
                                    : ''}
                                </div>

                            </form>
                        </div>
                    </div>


                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        AddEventReducer: state.AddEventReducer,
        ResetReducer: state.ResetReducer,
    };
};

export default connect(mapStateToProps, { AddEventAction, ResetAction })(Home);
