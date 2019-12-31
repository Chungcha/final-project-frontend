
import React from "react"
import { Button, Divider, Grid, Segment, Image, Header, Container } from "semantic-ui-react"
import LoginForm from "./LoginForm"
import RegistrationForm from "./RegistrationForm"
import "../styles/login.css"
import logo_white from "../images/logo_white.png"
import logo_black from "../images/logo_black.png"
import priscilla from "../images/priscilla-du-preez-W3SEyZODn8U-unsplash.jpg"

class Login extends React.Component {

    render(){
        return (
            <div>
                <div className="welcome">
                    <Image className="logo" src={logo_white}/>
                    <Header as="h1" id="loginHeader" textAlign="center">Discover New Cuisines with New Colleagues</Header>
                </div>
                <Container style={{"backgroundColor":"white", "height":"900px"}}>
                    <Header as="h2" style={{"margin-top":"30px", "textAlign":"center"}}>
                        How MealMates came to be...(or not...)
                    </Header>
                    <Segment style={{"backgroundColor":"sky-blue", "height":"300px", "margin-top": "30px", "width": "70%"}}>
                        <Header as="h3" style={{"textAlign":"center"}}>
                            What MealMates does..
                        </Header>
                        <Image src={priscilla} style={{"max-width":"400px","height":"auto", "right":"-94%","top":"-12%"}}/>
                    </Segment>
                    <Segment style={{"backgroundColor":"sky-blue", "height":"300px", "margin-top": "30px", "width": "70%", "margin-left":"auto"}}>
                    <Header as="h3" style={{"textAlign":"center"}}>
                            How MealMates does it..
                        </Header>
                    </Segment>
                </Container>
                <Segment id="loginForm">
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