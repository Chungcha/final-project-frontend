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
            .then(meetupData=>{
              debugger
              this.setState({meetupData})})
    }

    render(){
        console.log(this.props)
        return (
            <Segment>
              <div >
                <iframe width="100%" height="600" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=4551%20Forest%20Drive+(Home)&amp;ie=UTF8&amp;t=&amp;z=15&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a href="https://www.maps.ie/coordinates.html">gps coordinates finder</a></iframe>
              </div>
            </Segment>
        )
    }

}