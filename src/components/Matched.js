import React from "react"
import { Segment } from "semantic-ui-react"
import MyMapComponent from "./MyMapComponent"
import Countdown from "react-countdown-now"
import { Header, Grid, Image, Card } from "semantic-ui-react"
import Pictures from "./Pictures"
import RestaurantInfo from "./RestaurantInfo"
import UsersContainer from "../containers/UsersContainer"
import "pure-react-carousel/dist/react-carousel.es.css"
import Chatroom from "./chatroom/Chatroom"
import { HEADERS } from "../constants"

export default class Matched extends React.Component{

  constructor(props){
    super(props)
    this.state={
      meetupData: {
        meetup: {
          chatroom: {
            id: null
          },
          users: []
        },
        restaurantInfo: {
          photos: []
        }
      },
      status: ""
    }
  }

    componentDidMount(){
        const { id } = this.props.future_meetups
        fetch(`http://localhost:3000/meetups/${id}`, {headers: HEADERS})
            .then(response => response.json())
            .then(meetupData=>{

              this.setState({meetupData})})
    }
    //Just add a togging function and do this same fetch.  Use current user to identify the user and meetup id to find the user_meetup, plug in the same setstate data on the return.

    submitAttending = (boolean) => {
      if (this.state.meetupData.meetup.users.find((userObj)=> userObj.user.username === this.props.currentUser.username).userAttending === boolean) {
        return null
      } else {
      const objConfig = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "Application/json",
            "Accept": "Application/json"
        },
        body: JSON.stringify({meetup_id: this.props.future_meetups.id, attending: boolean})
      }
      fetch("http://localhost:3000/toggleAttending", objConfig)
      .then(response => response.json())
      .then(meetupData=>this.setState({meetupData}))
      }
    }

    renderer = ({ days, hours, minutes, seconds, completed }) => {
      if (completed){
        if (this.state.status !== "completed"){
          this.setState({
          status: "completed"
        })}
        return <span style={{"margin":"auto"}}>Meetup has taken place!</span>
      } else {
      return <span style={{"margin":"auto"}}>
        {days} day{days == 0 ? "s" : null}, {hours} hours, {minutes} minute{minutes == 1 ? null : "s"}, and {seconds} second{seconds == 1 ? null : "s"} before your next meetup!
      </span>
      }
    }

    render(){
      // const { meetupData:{ meetup:{ users } } } = this.state
        // console.log(this.state.meetupData.meetup.restaurantInfo.photos)
        return (
            <Segment>
              {this.state.meetupData.meetup && <Grid divided='vertically'>
                <Grid.Row columns={1}>
                  <Header 
                    date={this.props.future_meetups.datetime}
                    renderer={this.renderer}
                    as={Countdown}/>
                </Grid.Row>

                <Grid.Row columns={3} centered>
                  <Grid.Column width={5} >
                    <Card fluid>
                    {/* {this.state.meetupData.meetup.restaurantInfo && <MyMapComponent restaurantCenter={this.state.meetupData.meetup.restaurantInfo.coordinates}/>} */}
                    </Card>
                  </Grid.Column>

                  <Grid.Column width={6}>

                    {this.state.meetupData.meetup && <RestaurantInfo 
                      info={this.state.meetupData.meetup.restaurantInfo}
                      status={this.state.status}
                      submitAttending={this.submitAttending}
                      currentUser={this.state.meetupData.meetup.users.find((userObj)=> userObj.user.username === this.props.currentUser.username)}
                    />}
                  </Grid.Column>

                  <Grid.Column width={5}>
                    <Card centered style={{"width":"100%"}}>
                    {this.state.meetupData.meetup.restaurantInfo && <Pictures pictures={this.state.meetupData.meetup.restaurantInfo.photos}/>}
                    </Card>
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={1}>
                  {this.state.meetupData.meetup.chatroom.id && <Chatroom chatroomId={this.state.meetupData.meetup.chatroom.id}/>}
                </Grid.Row>

                <Grid.Row columns={4}>
                  <UsersContainer users={this.state.meetupData.meetup.users}/>
                </Grid.Row>
              </Grid>}
            </Segment>
        )
    }

}