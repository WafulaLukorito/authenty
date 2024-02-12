import * as React from 'react'
import 
import WelcomeContent from './WelcomeContent'

export default class AppContent extends React.Component {

    render() {
        return (
            <div>
                <WelcomeContent/>
                <AuthContent/>
            </div>
        )
    }
}