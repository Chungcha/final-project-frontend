import React from "react"
import { Form,Button } from "semantic-ui-react"

export default class RegistrationForm extends React.Component {

    state={
        newUserInfo:{
            first_name: "",
            last_name: "",
            username: "",
            password: "",
            confirmPassword: ""
        }
    }

    handleFormChange = (e) => {
        this.setState({
            newUserInfo: {
                ...this.state.newUserInfo, [e.target.name]:e.target.value
            }
        })
    }

    submitNewUserInfo = () => {
        if (this.state.newUserInfo.password === this.state.newUserInfo.confirmPassword) {
            const objConfig={
                method: "POST",
                headers: {
                    "Content-Type": "Application/json",
                    "Accept": "Application/json"
                },
                body:JSON.stringify({
                    user: this.state.newUserInfo
                })
            }
            fetch("http://localhost:3000/users", objConfig)
            .then(response => response.json())
            .then(userData=>{
                debugger
                localStorage.setItem("jwt", userData.jwt)
                this.props.updateCurrentUser(userData.user)
            })
            //UPDATE THE CURRENT USER WITH THIS DATA
        } else {
            alert ("Passwords do not match")
        }
    }

    render(){
        return (
            <Form onSubmit={this.submitNewUserInfo}>
                <Form.Field>
                    <label>First Name</label>
                    <input 
                        placeholder="First Name" 
                        onChange={this.handleFormChange} 
                        name="first_name" 
                        value={this.state.first_name}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input 
                        placeholder="Last Name" 
                        name="last_name" 
                        value={this.state.last_name}
                        onChange={this.handleFormChange}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Username</label>
                    <input 
                        placeholder="Username" 
                        name="username" 
                        value={this.state.username}
                        onChange={this.handleFormChange}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input 
                        placeholder="Password" 
                        type="password" 
                        name="password"
                        value={this.state.password}
                        onChange={this.handleFormChange}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Confirm Password</label>
                    <input 
                        placeholder="Confirm Password" 
                        type="password" 
                        name="confirmPassword"
                        value={this.state.confirmPassword}
                        onChange={this.handleFormChange}
                    />
                </Form.Field>
                <Button type="submit">Submit</Button>
            </Form>
        )
    }
}