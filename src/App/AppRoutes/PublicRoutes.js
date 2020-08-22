import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import history from '../History/History';
import { withRouter } from 'react-router-dom';

const Login = React.lazy(() => import("../Components/Auth/Login"));
const Register = React.lazy(() => import("../Components/Auth/Register"));
const ForgetPassword = React.lazy(() => import("../Components/Auth/ForgetPassword"));
const ResetPassword = React.lazy(() => import("../Components/Auth/ResetPassword"));
const Home = React.lazy(() => import("../Components/WorkSpaces/Home"));

class PublicRoutes extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" render={() => <Login {...this.props} history={history} />} />
                <Route exact path="/register" render={() => <Register {...this.props} history={history} />} />
                <Route exact path="/forget-password" render={() => <ForgetPassword {...this.props} history={history} />} />
                <Route exact path="/reset-password" render={() => <ResetPassword {...this.props} history={history} />} />
                <Route exact path="/home" render={() => <Home {...this.props} history={history} />} />
            </Switch>
        )
    }
}
export default withRouter(PublicRoutes);