import React from "react"
import { Segment } from "semantic-ui-react"

export default class Matched extends React.Component{

    state={}

    componentDidMount(){
        const { id } = this.props.future_meetups[0]
        fetch(`http://localhost:3000/meetups/${id}`, {
            headers: {
              "Authorization": `Bearer ${localStorage.getItem("jwt")}`
            }
          })
            .then(response => response.json())
            .then(meetupData=>this.setState({meetupData}))
    }

    render(){
        console.log(this.props)
        return (
            <Segment>

            </Segment>
        )
    }

}