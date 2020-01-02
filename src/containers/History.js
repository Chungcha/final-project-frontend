import React from "react"
import { Container } from "semantic-ui-react"
import Matched from "../components/Matched"

export default class History extends React.Component{

    render(){
        return(
            <Container style={{"marginTop":"4%"}}>
                {this.props.pastMeetups.map((meetup)=><Matched future_meetups={meetup} key={meetup.id} currentUser={this.props.currentUser}/>)}
            </Container>
        )
    }
}