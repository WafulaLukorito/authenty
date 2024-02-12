import * as React from 'react';
import classNames from 'classnames';

export default class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: "login",
            firstName: "",
            lastName: "",
            login: "",
            password: "",
            onLogin: props.onLogin,
            onRegister: props.onRegister

           
        }
    }   

    onChangeHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value});
    };

    onSubmitLogin = (e) => {
        e.preventDefault();
        this.state.onLogin(this.state.login, this.state.password);
    }


    render() {
        return (
            <div>

            </div>
        );
    }

    }