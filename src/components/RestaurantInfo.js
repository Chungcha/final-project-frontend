import React from "react"
import { Card, Icon } from 'semantic-ui-react'
import regular_0 from "../web_and_ios/regular/regular_0.png"
import ReviewIcon from "./ReviewIcon"

export default class RestaurantInfo extends React.Component{

    constructor(props){
        super(props)
    }

    render(props){
        // console.log(this.props.info)
        // debugger
        return(
            <Card fluid>
                {this.props.info && <Card.Content>
                    <Card.Header href={this.props.info.url} target="_blank">{this.props.info.name}</Card.Header>
                    <Card.Meta>{this.props.info.display_phone}</Card.Meta>
                    <Card.Description>
                        {this.props.info.location.display_address[0]}
                        {this.props.info.location.display_address[1]}
                    </Card.Description>
                </Card.Content>}
                {this.props.info && <Card.Content extra>
                    <a href={this.props.info.url}>
                        <ReviewIcon rating={this.props.info.rating}/> 
                        {this.props.info.review_count} Reviews
                    </a>
                </Card.Content>}
            </Card>
        )
    }
}