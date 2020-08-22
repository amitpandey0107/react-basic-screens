import React, { Component } from 'react'
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
class Routes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false,
            isLodaing: false,
            serverLoad: true,
            socketLoad: true      
        }
    }

    render() {
        return (
            <div>
                <PublicRoutes />
            </div>
        )
    }
}

export default Routes
