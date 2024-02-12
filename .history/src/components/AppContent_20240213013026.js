import * as React from 'react'
import AuthContent from './AuthContent'
import WelcomeContent from './WelcomeContent'
import LoginForm from './LoginForm'

export default class AppContent extends React.Component {

    render() {
        return (
            <div>
                <WelcomeContent/>
                <AuthContent/>
                <LoginForm/>
            </div>
        )
    }
}