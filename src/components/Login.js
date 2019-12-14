import React  from "react"
import LoginForm from "./LoginForm"
import RegistrationForm from "./RegistrationForm"

class Login extends React.Component {

    render(){
        return (
            <div>
                <LoginForm updateCurrentUser={this.props.updateCurrentUser}/>
                <RegistrationForm />
            </div>
        )
    }

}

export default Login