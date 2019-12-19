import React from 'react';
import './App.css';
import Login from "./components/Login"
import Home from "./containers/Home"
import History from "./containers/History"
import Profile from "./components/Profile"
import { Route } from "react-router-dom";
// import { Router, Link } from "@reach/router"

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

  handleLogOut = () => {
    this.updateCurrentUser(null)
    localStorage.removeItem("jwt")
    // navigate("/")
    //navigate to root
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
      body: JSON.stringify({user:this.state.currentUser, cuisine})
    }
    fetch("http://localhost:3000/wait_queue", objConfig)
    .then(response => response.json())
    .then(userData=>console.log(userData))
  }

  render(){
    return (
      <div className="home-container" >
        {this.state.currentUser ? <Home handleLogOut={this.handleLogOut} submitFoodChoice={this.submitFoodChoice} currentUser={this.state.currentUser}/> : <Login updateCurrentUser={this.updateCurrentUser}/> }
        <Route exact path="/profile" render={()=><Profile />}/>
        <Route exact path = "/history" render={()=><History />}/>
        </div>
    )
  }
}

export default App;
