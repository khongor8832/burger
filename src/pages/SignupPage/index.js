import React, { Component } from "react"
import css from "./style.module.css"
import Button from "../../components/General/Button"
class Signup extends Component {
    state = { 
        email: "",
        password1: "",
        password2: ""
    };
    changeEmail = (event) => {
        this.setState({email: event.target.value})
    };
    changePassword1 = (event) => {
        this.setState({password1: event.target.value})
    };
    changePassword2 = (event) => {
        this.setState({password2: event.target.value})
    };
    signup = () => {
        alert("Sugnup..." + this.state.email + " " + this.state.password1);
    };
    render() {
        return <div className={css.Signup}>
            <h1> Бүртгэлийн форум</h1>
            <div>Та өөрийн мэдээллээ оруулна уу </div>
            <input onChange={this.changeEmail} type="text" placeholder="Имэйл хаяг" />
            <input onChange={this.changePassword1} type="password" placeholder="Нууц үг оруулна уу" />
            <input onChange={this.changePassword2} type="password" placeholder="Нууц үг давтан оруулна уу " />
            <Button text="Бүртгэлүүлэх " btnType="Success" daragdsan={this.signup} />
        </div>
    }
}

export default Signup;