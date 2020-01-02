
import React, {createRef} from "react"
import { Divider, Grid, Segment, Image, Header, Container } from "semantic-ui-react"
import LoginForm from "./LoginForm"
import RegistrationForm from "./RegistrationForm"
import "../styles/login.css"
import logo_white from "../images/logo_white.png"
// import logo_black from "../images/logo_black.png"
import priscilla from "../images/priscilla-du-preez-W3SEyZODn8U-unsplash.jpg"
import charlie from "../images/charlie.jpg"

class Login extends React.Component {

    buttonRef = createRef()
    handleClick = () => this.buttonRef.current.focus()

    render(){
        return (
            <div>
                <div className="welcome">
                    <Image className="logo" src={logo_white}/>
                    <Header as="h1" id="loginHeader" textAlign="center">Discover New Cuisines with New Colleagues</Header>
                    {/* <div>
                    <Button.Group size='large'>
                        <Button onClick={this.handleClick}>Login</Button>
                        <Button.Or />
                        <Button onClick={this.handleClick}>Signup</Button>
                    </Button.Group>
                    </div> */}
                </div>
                <Container style={{"height":"725px"}}>
                    <Segment style={{"backgroundColor":"sky-blue", "height":"320px", "margin": "30px", "width": "90%"}}>
                        <Header as="h3" style={{"textAlign":"center"}}>
                            Why MealMates...
                        </Header>
                        <Image src={charlie} style={{"float":"right","maxWidth":"200px","height":"auto", "top":"-13px", "left":"9%"}}/>
                        <div style={{"paddingLeft":"90px", "textAlign":"justify"}}>
                        <p style={{"fontSize":"larger"}}><span style={{"fontSize":"25px"}}>"</span>Last July I moved from Michigan to DC to enroll in Flatiron School.  With no friends in the area or ideas for places to eat, I googled meetups in the area and found one for recent transplants in the area.  The meetup took place in a very dark bar with much too loud music as you had to scream at the person next to you to ask how their day was. I wanted to make something simplier that could save anyone who would like to get some food and maybe make new friends from the same terrible experience.<span style={{"fontSize":"25px"}}>"</span></p>
                        <p style={{"fontSize":"larger"}}>~Charlie Chung</p>
                        </div>
                    </Segment>
                    <Header as="h2" style={{"marginTop":"30px", "textAlign":"center"}}>
                        How it works..
                    </Header>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={5}>
                                <Image src={priscilla} style={{"maxWidth":"400px","height":"auto", "left":"-20%"}}/>
                            </Grid.Column>
                            <Grid.Column width={6}>
                                <Segment>
                                <p style={{"fontSize":"large"}}>First decide on what time of food you'd like to eat.  Then Mealmates does all the work.  Mealmate will use a patented algorithm to match you up with 3 other users with similar food tastes in your area.  Mealmates will then schedule a dinner time in coordination with the Yelp api at a randomly chosen restaurant.</p>
                                </Segment>
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <Image src={priscilla} style={{"maxWidth":"400px","height":"auto"}}/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
                <Segment id="loginForm">
                <Grid columns={2} relaxed="very" stackable>
                    
                    <Grid.Column style={{"margin":"auto"}}>
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