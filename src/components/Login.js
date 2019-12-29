
import React from "react"
import { Button, Divider, Grid, Segment, Image } from "semantic-ui-react"
import LoginForm from "./LoginForm"
import RegistrationForm from "./RegistrationForm"
import "../styles/login.css"
import logo_white from "../images/logo_white.png"
import logo_black from "../images/logo_black.png"

class Login extends React.Component {

    render(){
        return (
            <div>
                <div className="welcome">
                    <Image className="logo" src={logo_white}/>
                </div>
                <Segment>
                <Grid columns={2} relaxed="very" stackable>
                    
                    <Grid.Column>
                        <LoginForm updateCurrentUser={this.props.updateCurrentUser}/>
                    </Grid.Column>

                    <Grid.Column verticalAlign="middle">
                        <RegistrationForm updateCurrentUser={this.props.updateCurrentUser}/>
                    </Grid.Column>
                
                </Grid>
                <Divider vertical>Or</Divider>
                </Segment>
            </div>
        )
    }

}

export default Login


// import React  from "react"
// import LoginForm from "./LoginForm"
// import RegistrationForm from "./RegistrationForm"

// class Login extends React.Component {

//     render(){
//         return (
//             <div>
//                 <LoginForm updateCurrentUser={this.props.updateCurrentUser}/>
//                 <RegistrationForm />
//             </div>
//         )
//     }

// }

// export default Login