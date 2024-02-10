import * as React from 'react'
import WelcomeContent from './WelcomeContent'

export default class AppContent extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         token: null,
    //         username: null
    //     }
    // }
    // componentDidMount() {
    //     this.setState({
    //         token: localStorage.getItem('token'),
    //         username: localStorage.getItem('username')
    //     })
    // }
    render() {
        return (
            <div>
                <WelcomeContent/>
                {/* <p>Token: {this.state.token}</p>
                <p>Username: {this.state.username}</p> */}
            </div>
        )
    }
}