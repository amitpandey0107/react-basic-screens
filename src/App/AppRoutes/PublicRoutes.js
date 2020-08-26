import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import history from '../history';

const Login = React.lazy(() => import("../Components/Auth/Login"));
const Register = React.lazy(() => import("../Components/Auth/Register"));
const ForgetPassword = React.lazy(() => import("../Components/Auth/ForgetPassword"));
const ResetPassword = React.lazy(() => import("../Components/Auth/ResetPassword"));
const Home = React.lazy(() => import("../Components/WorkSpaces/Home"));
const Event = React.lazy(() => import("../Components/WorkSpaces/Event"));

class PublicRoutes extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Login} {...this.props} history={history}/>
                <Route exact path="/register" component={Register} {...this.props} history={history}/>
                <Route exact path="/forget-password" component={ForgetPassword} {...this.props} history={history}/>
                <Route exact path="/reset-password" component={ResetPassword} {...this.props} history={history}/>
                <Route exact path="/home" component={Home} {...this.props} history={history}/>                
                <Route exact path="/event" component={Event} {...this.props} history={history}/>                
            </Switch>
        )
    }
}
export default PublicRoutes;