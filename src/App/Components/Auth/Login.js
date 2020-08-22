import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReactNotification, { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { connect } from 'react-redux';
import { LOADING, SUCCESS, ERROR } from '../../Constants/Misc';
import { LoginAction } from '../../Actions/LoginAction';

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            errors: {},
            hideShowpass: false,
            isLoading: false,
            isLoggedIn: false,
        }
    }

    handleChange = (evt) => {
        evt.preventDefault()
        let targetName = evt.target.name
        let targetValue = evt.target.value
        this.setState({ [targetName]: targetValue })
    };

    handleLoginForm = async (event) => {
        event.preventDefault();
        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
           await this.props.LoginAction(username, password);
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

    componentDidUpdate(prevProps, prevState) {
        console.log(this.props);
        if (this.props.LoginReducer.status === LOADING) {

        } else if (this.props.LoginReducer.status === SUCCESS) {
            this.notifyMe('Welcome', 'Login Successful', 'success');
        }  else if (this.props.LoginReducer.status === ERROR) {
            this.notifyMe('Opps', 'Login failed', 'danger');
        }
    }

    render() {
        const { username, password, submitted } = this.state;
        return (
            <>
                <ReactNotification />
                <div className="loginwrap">
                    <h1>Sign In</h1>
                    <div className="formwrap">
                        <form onSubmit={(event) => this.handleLoginForm(event)}>

                            <div className="formfield">
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    className="formcontrol"
                                    autoComplete="username"
                                    value={this.state.username}
                                    onChange={(event) => this.handleChange(event)}
                                />
                                <div className="help-block">
                                {submitted && !username &&
                                    <div className="error-block">Username is required</div>
                                }
                                </div>
                            </div>

                            <div className="formfield">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="formcontrol"
                                    autoComplete="password"
                                    value={this.state.password}
                                    onChange={(event) => this.handleChange(event)}
                                />
                                <div className="help-block">
                                {submitted && !password &&
                                    <div className="error-block">Password is required</div>
                                }
                                </div>
                                <Link to="/forget-password" className="forgetpass">Forget Password</Link>
                            </div>

                            <div className="formfield btnwrplogin">
                                <button
                                    className="loginbutton"
                                    id="loginbutton"
                                >Login</button>
                            </div>

                            <div className="formfield mb0">
                                <div className="supporttxt">
                                    Don't have an account? <Link to="/register">Register here</Link>.
                            </div>
                            </div>

                        </form>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        LoginReducer: state.LoginReducer,       
    };
};

export default connect(mapStateToProps, {LoginAction})(Login);
