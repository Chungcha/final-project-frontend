import React from "react"
import { Form } from "semantic-ui-react"

const URL = "http://localhost:3000/"

export default class LoginForm extends React.Component {
    
    constructor(props){
        super(props)
        this.state={
            username: "",
            password: ""
        }
    }

    updateState = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    postLogin = (e) => {
        e.preventDefault()
        let objConfig = {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
                "Accept": "Application/json"
            },
            body: JSON.stringify({
                user: {
                    username: this.state.username,
                    password: this.state.password
                }
            })
        }
        fetch(`http://localhost:3000/login`, objConfig)
        .then(response => response.json())
        .then(userData=>{
            if (userData.message) {
                alert (userData.message)
            } else {
            localStorage.setItem("jwt", userData.jwt)
            this.props.updateCurrentUser({user: userData.user})
            }
        })
    }

    render(){
        return(
            <Form className="ui form" onSubmit={(e)=>{this.postLogin(e)}}>
                <div className="field">
                    <label>Username</label>
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Username" 
                        onChange={this.updateState} 
                        value={this.state.username}
                    />
                </div>
                <div className="field">
                    <label>Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password"
                        onChange={this.updateState}
                        value={this.state.password}
                    />
                </div>
                <button className="ui button" type="submit">Submit</button>
            </Form>
        )
    }

}