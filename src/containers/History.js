import React from "react"
import { Container } from "semantic-ui-react"
import Matched from "../components/Matched"

export default class History extends React.Component{

    // constructor(props){
    //     super(props)
    //     this.state={
    //         pastmeetups: []
    //     }
    // }

    // componentDidMount(){
    //     let objConfig = {
    //         method: "POST",
    //         headers: {
    //             "Authorization": `Bearer ${localStorage.getItem("jwt")}`,
    //             "Content-Type": "Application/json",
    //             "Accept": "Application/json"
    //         },
    //         body: JSON.stringify({pastmeetups:this.props.pastMeetups})
    //       }
    //       fetch("http://localhost:3000/pastmeetups", objConfig)
    //       .then(response => response.json())
    //       .then(userData=>this.setState({pastmeetups: userData}))
    // }

    render(){
        console.log(this.props.pastMeetups[0])
        return(
            <Container>
                {this.props.pastMeetups.map((meetup)=><Matched future_meetups={meetup}/>)}
            </Container>
        )
    }
}