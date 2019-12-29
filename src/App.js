import React from 'react';
import './App.css';
import Login from "./components/Login"
import Home from "./containers/Home"
import History from "./containers/History"
import Profile from "./components/Profile"
import { Route, Redirect } from "react-router-dom";
import Nav from "./components/Nav"
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
      .then(userData=>{this.updateCurrentUser(userData.user)})
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
      body: JSON.stringify({user: this.state.currentUser, cuisine})
    }
    fetch("http://localhost:3000/wait_queue", objConfig)
    .then(response => response.json())
    .then(userData=>{
      if (userData.waitqueue){
        this.setState({currentUser:{...this.state.currentUser, wait_queue: userData.waitqueue}})
      } else {
        this.setState({
          currentUser: {...this.state.currentUser, future_meetups: [userData.meetup]
          }
        })
      }})
  }

  render(){
    return (
      <div className="home-container" >

        {this.state.currentUser ? <Nav handleLogOut={this.handleLogOut}/> : null }



        <Route exact path="/home" render={()=>{return this.state.currentUser ? <Home handleLogOut={this.handleLogOut} submitFoodChoice={this.submitFoodChoice} currentUser={this.state.currentUser}/> : <Redirect to="/"/> }} />

        <Route exact path="/" render={()=>{return this.state.currentUser ? <Redirect to="/home"/> : <Login updateCurrentUser={this.updateCurrentUser}/>}}/>

        <Route exact path="/profile" render={()=>{ return this.state.currentUser ? <Profile currentUser={this.state.currentUser} updateCurrentUser={this.updateCurrentUser} /> : <Redirect to="/"/>
    }}/>

        <Route exact path = "/history" render={()=>{ return this.state.currentUser ? <History pastMeetups={this.state.currentUser.past_meetups}/> : <Redirect to="/"/>}}/>
      </div>
    )
  }
}

export default App;
