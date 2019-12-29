import React from "react"
import { Container, Image, Segment, Form, FormButton } from "semantic-ui-react"

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
                    username: this.state.currentUser.username
                }
            
            })
          }
          fetch(`http://localhost:3000/users/${this.state.currentUser.id}`, objConfig)
          .then(response => response.json())
          .then(userData=>this.props.updateCurrentUser(userData.user))
    }

    render(){
        return(
            <Segment>
                <Form onSubmit={this.submitChanges}>
                    <Image src={`http://localhost:3000/${this.props.currentUser.avatar}`} size="medium"/>
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
                        <FormButton>Submit</FormButton>
                    </Form.Group>
                </Form>
            </Segment>
        )
    }
}