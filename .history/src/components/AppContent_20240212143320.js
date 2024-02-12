import * as React from 'react'
import AuthContent from './AuthContent'
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