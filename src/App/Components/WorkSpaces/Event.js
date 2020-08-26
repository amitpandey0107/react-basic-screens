import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';

import ReactNotification, { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { connect } from 'react-redux';
import { LOADING, SUCCESS, ERROR } from '../../Constants/Misc';
import { GetEventAction } from '../../Actions/GetEventAction';
import { ResetAction } from '../../Actions/ResetAction';

import Topbar from './Common/Topbar';
import Sidebar from './Common/Sidebar';
const localizer = momentLocalizer(moment)

class Event extends Component {

    constructor(props) {
        super(props)

        const token = localStorage.getItem('UserId');
        let loggedIn = true;
        if (token == null) {
            loggedIn = false;
        }

        this.state = {
            loggedIn,
            allEventData: [],
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

    componentDidMount() {
        this.props.GetEventAction();
    }

    static getDerivedStateFromProps(props, state) {
        if (props.GetEventReducer.status === LOADING) {
            return { isLoading: true }
        } else if (props.GetEventReducer.status === SUCCESS) {
            var allEvent = [];
            props.GetEventReducer.value.data.data.map((item, index) => {
                allEvent.push({
                    key: item.id,
                    title:item.title,
                    description:item.description,
                    start:item.start,
                    end:item.end,
                })
            })
            props.ResetAction();
            return { isLoading: false, allEventData: allEvent, };
        } else if (props.GetEventReducer.status === ERROR) {
            return { isLoading: false };
        } else if (props.ResetReducer.status === LOADING) {
            return { isLoading: true };
        } else if (props.ResetReducer.status === SUCCESS) {
            return { isLoading: false, };
        } else if (props.ResetReducer.status === ERROR) {
            return { isLoading: false };
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.GetEventReducer.status === SUCCESS) {
            this.notifyMe('Welcome', 'Event List Successful fetched', 'success');
            this.props.ResetAction()
        } else if (this.props.GetEventReducer.status === ERROR) {
            this.notifyMe('Opps', 'Failed to fetch event', 'danger');
            this.props.ResetAction()
        }
    }



    render() {
        let eventData = [];
        this.state.allEventData.map((item, index) => {
            let obj = {
                'title': item.title,
                'allDay': true,
                'start': item.start,
                'end': item.end
            }
            eventData.push(obj)
        })
        const { loggedIn } = this.state;
        if (loggedIn === false) {
            return <Redirect to="/" />
        }
        return (
            <div className="main">
                <Topbar {...this.props} />
                <Sidebar {...this.props} />
                <ReactNotification />
                <div className="maincontent">
                <h1>Event Calander</h1>
                    {this.state.isLoading
                    ? <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/d6e32754941303.596fc27b9d2bf.gif" alt="" className="loadingEvent" />
                    : ''
                    }
                    
                    <Calendar
                        {...this.props}
                        timeslots={8}
                        localizer={localizer}
                        events={eventData}
                        startAccessor="start"
                        endAccessor="end"
                        // defaultDate={new Date(2020, 3, 1)}
                        style={{ width: '100%', height: "100%" }}
                    />
    
                </div>

            </div>
        )
    }
}

// export default Event; 
const mapStateToProps = state => {
    return {
        GetEventReducer: state.GetEventReducer,
        ResetReducer: state.ResetReducer,
    };
};

export default connect(mapStateToProps, { GetEventAction, ResetAction })(Event);
