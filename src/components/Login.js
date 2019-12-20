
import React from "react"
import { Button, Divider, Form, Grid, Segment } from "semantic-ui-react"
import LoginForm from "./LoginForm"
import RegistrationForm from "./RegistrationForm"

class Login extends React.Component {

    render(){
        return (
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