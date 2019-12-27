import React from "react"
import { Segment } from "semantic-ui-react"
import MyMapComponent from "./MyMapComponent"
import Countdown from "react-countdown-now"
import { Header, Grid, Image } from "semantic-ui-react"
import Pictures from "./Pictures"
import RestaurantInfo from "./RestaurantInfo"
import UsersContainer from "../containers/UsersContainer"
import "pure-react-carousel/dist/react-carousel.es.css"

export default class Matched extends React.Component{

  constructor(props){
    super(props)
    this.state={
      meetupData: {
        meetup: {
          users: []
        },
        restaurantInfo: {
          photos: []
        }
      }
    }
  }

    componentDidMount(){
        const { id } = this.props.future_meetups
        fetch(`http://localhost:3000/meetups/${id}`, {
            headers: {
              "Authorization": `Bearer ${localStorage.getItem("jwt")}`
            }
          })
            .then(response => response.json())
            .then(meetupData=>{
              // debugger
              this.setState({meetupData})})
    }

    renderer = ({ days, hours, minutes, seconds, completed }) => {
      if (completed){
        return <span>Meetup has taken place!</span>
      } else {
      return <span>{days} day, {hours} hours, {minutes}, and {seconds} seconds before your next meetup!</span>
      }
    }

    render(){
      // const { meetupData:{ meetup:{ users } } } = this.state
        // console.log(this.state.meetupData.meetup.restaurantInfo.photos)
        return (
            <Segment>
              <Grid divided='vertically'>
                <Grid.Row columns={1}>
                  <Header 
                    date={this.props.future_meetups.datetime}
                    renderer={this.renderer}
                    as={Countdown}/>
                </Grid.Row>

                <Grid.Row columns={3}>
                  <Grid.Column>
                    {this.state.meetupData.meetup.restaurantInfo && <MyMapComponent restaurantCenter={this.state.meetupData.meetup.restaurantInfo.coordinates}/>}
                  </Grid.Column>

                  <Grid.Column>
                    <RestaurantInfo info={this.state.meetupData.meetup.restaurantInfo}/>
                  </Grid.Column>

                  <Grid.Column>
                    {this.state.meetupData.meetup.restaurantInfo && <Pictures pictures={this.state.meetupData.meetup.restaurantInfo.photos}/>}
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={4}>
                  <UsersContainer users={this.state.meetupData.meetup.users}/>
                </Grid.Row>
              </Grid>
            </Segment>
        )
    }

}