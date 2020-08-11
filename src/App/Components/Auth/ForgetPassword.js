import React, { Component } from 'react'

class ForgetPassword extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className="loginwrap">
                <h1>Forget Password</h1>
                <div className="formwrap">
                    <form name="loginform" id="loginform" autoComplete="off">

                        <div className="formfield">
                            <label htmlFor="username">Username / Email</label>
                            <input
                            type="text"
                            name="username"
                            id="username"
                            className="formcontrol"
                            autoComplete="username" 
                            />
                        </div>

                        <div className="formfield btnwrplogin">
                            <button
                            className="loginbutton"
                            id="loginbutton"
                            >Send</button>                            
                        </div>

                        <div className="formfield mb0">
                            <div className="supporttxt">
                                Go back <a href="">Login</a>.
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}

export default ForgetPassword
