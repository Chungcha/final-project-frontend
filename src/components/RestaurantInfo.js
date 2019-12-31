import React, { Fragment } from "react"
import { Card, Image, Button } from 'semantic-ui-react'
import regular_0 from "../web_and_ios/regular/regular_0.png"
import ReviewIcon from "./ReviewIcon"

export default class RestaurantInfo extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <Fragment>
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
                    <a href={this.props.info.url} target="_blank">
                        <ReviewIcon rating={this.props.info.rating}/> 
                        {this.props.info.review_count} Reviews
                    </a>
                </Card.Content>}
            </Card>
            {this.props.currentUser && <Card fluid 
                color={this.props.currentUser.userAttending ? "green" : this.props.currentUser.userAttending === false ? "red" : null}>
                
                <Card.Content>
                    <Image
                    floated='right'
                    size='small'
                    src={`http://localhost:3000/${this.props.currentUser.avatar}`}
                    />
                    <Card.Header>{this.props.currentUser.user.first_name} {this.props.currentUser.user.last_name}</Card.Header>
                    <Card.Meta>{this.props.currentUser.user.occupation}</Card.Meta>
                    <Card.Description>
                    You will be {this.props.currentUser.userAttending ? <strong>attending</strong> : this.props.currentUser.userAttending === false ? <strong>not attending</strong> : <strong>attending?</strong> }
                    </Card.Description>
                </Card.Content>
                {this.props.status == "completed" ? null : <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color='green' onClick={()=>this.props.submitAttending(true)}>
                            Attending
                        </Button>
                        <Button basic color='red' onClick={()=>this.props.submitAttending(false)}>
                            Not Attending
                        </Button>
                    </div>
                </Card.Content>}

            </Card>}
            </Fragment>
        )
    }
}