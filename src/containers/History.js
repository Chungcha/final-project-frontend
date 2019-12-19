import React from "react"
import { Container } from "semantic-ui-react"

export default class History extends React.Component{

    componentDidMount(){
        let objConfig = {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("jwt")}`,
                "Content-Type": "Application/json",
                "Accept": "Application/json"
            },
            body: JSON.stringify({pastmeetups:this.props.pastmeetups})
          }
          fetch("http://localhost:3000/pastmeetups", objConfig)
          .then(response => response.json())
          .then(userData=>console.log(userData))
    }

    render(){
        return(
            <Container>
                This be that History
            </Container>
        )
    }
}