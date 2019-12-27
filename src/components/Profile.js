import React from "react"
import { Container, Segment, Form, FormButton } from "semantic-ui-react"

export default class Profile extends React.Component {
    
    constructor(props){
        super(props)
        this.state={
            userInfo: {}
        }
    }

    componentDidMount(){
        this.setState({
            userInfo: this.props.userInfo
        })
    }

    updateState = (e) => {
        console.log(e.target.name)
        this.setState({
            userInfo: {
                ...this.state.userInfo, [e.target.name]: e.target.value
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
                    id: this.state.userInfo.id,
                    first_name: this.state.userInfo.first_name,
                    last_name: this.state.userInfo.last_name,
                    username: this.state.userInfo.username
                }
            
            })
          }
          fetch(`http://localhost:3000/users/${this.state.userInfo.id}`, objConfig)
          .then(response => response.json())
          .then(userData=>console.log(userData))
    }

    render(){
        return(
            <Segment>
                <Form onSubmit={this.submitChanges}>
                    <Form.Field>
                        <label>Username</label>
                        <input
                            name="username"
                            value={this.state.userInfo.username}
                            onChange={this.updateState}
                        />
                    </Form.Field>
                    <Form.Group widths="equal">
                        <Form.Field>
                            <label>First Name</label>
                            <input 
                                name="first_name"
                                value={this.state.userInfo.first_name}
                                onChange={this.updateState} 
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Last Name</label>
                            <input 
                                name="last_name"
                                value={this.state.userInfo.last_name}
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