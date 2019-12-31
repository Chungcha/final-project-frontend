import React from "react"
import { Container } from "semantic-ui-react"
import Matched from "../components/Matched"

export default class History extends React.Component{

    render(){
        return(
            <Container>
                {this.props.pastMeetups.map((meetup)=><Matched future_meetups={meetup} currentUser={this.props.currentUser}/>)}
            </Container>
        )
    }
}