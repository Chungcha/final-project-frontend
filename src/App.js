import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./components/Nav"
import Login from "./components/Login"
import Home from "./containers/Home"

const URL = "http://localhost:3000/"

class App extends React.Component{

  constructor(){
    super()
    this.state= {
      currentUser: null 
    }
  }

  componentDidMount(){
    if (localStorage.getItem("jwt")) {
      fetch(`${URL}profile`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("jwt")}`
        }
      })
      .then(response=>response.json())
      .then(user=>this.updateCurrentUser(user))
    }
  }

  updateCurrentUser = (userData) => {
    this.setState({
      currentUser: userData
    })
  }

  submitFoodChoice = (cuisine) => {
    let objConfig = {
      method: "POST",
      headers: {
          "Authorization": `Bearer ${localStorage.getItem("jwt")}`,
          "Content-Type": "Application/json",
          "Accept": "Application/json"
      },
      body: JSON.stringify({...this.state.currentUser, cuisine})
    }
    fetch("http://localhost:3000/wait_queue", objConfig)
    .then(response => response.json())
    .then(userData=>console.log(userData))
  }

  render(){
    return (
      <div className="home-container" >
        {this.state.currentUser ? <Home submitFoodChoice={this.submitFoodChoice}/> : <Login updateCurrentUser={this.updateCurrentUser}/> }
          <Router>
            
          </Router>
        </div>
    )
  }
}

export default App;
