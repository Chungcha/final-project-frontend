import React from "react"
import { Grid, Card, Image } from "semantic-ui-react"

export default class UserCard extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        const { first_name, last_name }  = this.props.user
        return(
            <Grid.Column>
                <Card>
                    <Card.Content>
                        <Image
                            floated="right"
                            size="mini"
                            src={`http://localhost:3000/${this.props.avatar}`}
                        />
                        <Card.Header>{`${first_name} ${last_name[0]}`}</Card.Header>
                        <Card.Meta>Occupation</Card.Meta>
                        <Card.Description>
                            Something about the user
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Grid.Column>
        )
    }
}