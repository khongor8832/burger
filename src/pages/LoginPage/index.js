import React, { Component } from "react"
import css from "./style.module.css"
import Button from "../../components/General/Button"
class Login extends Component {
    state = { 
        email: "",
        password: ""
    };
    changeEmail = (event) => {
        this.setState({email: event.target.value})
    };
    changePassword = (event) => {
        this.setState({password: event.target.value})
    };
    
    login = () => {
        alert("Login" + this.state.email + " " + this.state.password);
    }
   
    render() {
        return <div className={css.Login}>
            <input onChange={this.changeEmail} type="text" placeholder="Имэйл хаяг" />
            <input onChange={this.changePassword} type="password" placeholder="Нууц үг" />
            <Button text="Логин" btnType="Success" daragdsan={this.login} />
        </div>
    }
}

export default Login;