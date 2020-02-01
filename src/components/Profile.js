import React from "react"
import { Grid, Image, Segment, Form, FormButton } from "semantic-ui-react"
import swal from 'sweetalert';

export default class Profile extends React.Component {
    
    constructor(props){
        super(props)
        this.state={
            currentUser: {}
        }
    }

    componentDidMount(){
        this.setState({
            currentUser: this.props.currentUser
        })
    }

    updateState = (e) => {
        this.setState({
            currentUser: {
                ...this.state.currentUser, [e.target.name]: e.target.value
            }
        })
    }

    submitChanges = () => {
        const objConfig = {
            method: "PATCH",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("jwt")}`,
                "Content-Type": "Application/json",
                "Accept": "Application/json"
            },
            body: JSON.stringify({
                user: {
                    id: this.state.currentUser.id,
                    first_name: this.state.currentUser.first_name,
                    last_name: this.state.currentUser.last_name,
                    username: this.state.currentUser.username,
                    mantra: this.state.currentUser.mantra,
                    occupation: this.state.currentUser.occupation
                }
            
            })
          }
          fetch(`http://localhost:3000/users/${this.state.currentUser.id}`, objConfig)
          .then(response => response.json())
          .then(userData=>{
            swal("Profile Information Updated!")
            this.props.updateCurrentUser(userData.user)})
    }

    render(){
        return(
            <Segment style={{"marginTop":"5%", "marginLeft":"10%", "marginRight":"10%"}}>
                <Form onSubmit={this.submitChanges} style={{"marginRight":"4%"}}>
                    <Grid>
                        <Grid.Column width={6}>
                            <Image centered src={`http://localhost:3000/${this.props.currentUser.avatar}`} size="medium"/>
                        </Grid.Column>
                        <Grid.Column width={10} centered="true">
                            <Form.Field>
                                <label>Username</label>
                                <input
                                    name="username"
                                    value={this.state.currentUser.username}
                                    onChange={this.updateState}
                                />
                            </Form.Field>
                            <Form.Group widths="equal">
                                <Form.Field>
                                    <label>First Name</label>
                                    <input 
                                        name="first_name"
                                        value={this.state.currentUser.first_name}
                                        onChange={this.updateState} 
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <label>Last Name</label>
                                    <input 
                                        name="last_name"
                                        value={this.state.currentUser.last_name}
                                        onChange={this.updateState} 
                                    />
                                </Form.Field>
                            </Form.Group>
                            <Form.Group widths="equal">
                                <Form.Field>
                                    <label>Occupation</label>
                                    <input 
                                        name="occupation"
                                        value={this.state.currentUser.occupation}
                                        onChange={this.updateState} 
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <label>Mantra</label>
                                    <input 
                                        name="mantra"
                                        value={this.state.currentUser.mantra}
                                        onChange={this.updateState} 
                                    />
                                </Form.Field>
                            </Form.Group>
                            <FormButton>Submit</FormButton>
                        </Grid.Column>
                    </Grid>
                </Form>
            </Segment>
        )
    }
}