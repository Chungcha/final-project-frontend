import React from 'react';
import './App.css';
import Login from "./components/Login"
import Home from "./containers/Home"
import History from "./containers/History"
import Profile from "./components/Profile"
import { Route, Redirect } from "react-router-dom";
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
    const objConfig = {
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
    .then(userData=>{
      if (userData.waitqueue){
        this.setState({currentUser:{
          user: {...this.state.currentUser.user, wait_queue: userData.waitqueue
        }}})
      } else {
        this.setState({
          currentUser: {
            user: {...this.state.currentUser.user, future_meetups: [userData.meetup]}
          }
        })
      }
      console.log(userData)})
    //Update state depending on the data...waitqueue, matched, pending?
  }

  render(){
    return (
      <div className="home-container" >
        {this.state.currentUser ? <Home handleLogOut={this.handleLogOut} submitFoodChoice={this.submitFoodChoice} currentUser={this.state.currentUser}/> : <Login updateCurrentUser={this.updateCurrentUser}/> }

        <Route exact path="/profile" render={()=>{ return this.state.currentUser ? <Profile/> : <Redirect to="/"/>
    }}/>

        <Route exact path = "/history" render={()=>{ return this.state.currentUser ? <History pastMeetups={this.state.currentUser}/> : <Redirect to="/"/>}}/>
      </div>
    )
  }
}

export default App;
