import React, { Component } from 'react'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className="loginwrap">
                <h1>Sign In</h1>
                <div className="formwrap">
                    <form name="loginform" id="loginform" autoComplete="off">

                        <div className="formfield">
                            <label htmlFor="username">Username</label>
                            <input
                            type="text"
                            name="username"
                            id="username"
                            className="formcontrol"
                            autoComplete="username" 
                            />
                        </div>

                        <div className="formfield">
                            <label htmlFor="password">Password</label>
                            <input
                            type="password"
                            name="password"
                            id="password"
                            className="formcontrol"
                            autoComplete="password" 
                            />
                            <a href="" className="forgetpass">Forget Password</a>
                        </div>

                        <div className="formfield btnwrplogin">
                            <button
                            className="loginbutton"
                            id="loginbutton"
                            >Login</button>                            
                        </div>

                        <div className="formfield mb0">
                            <div className="supporttxt">
                                Don't have an account? <a href="">Register here</a>.
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}

export default Login
