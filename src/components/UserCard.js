import React from "react"
import { Grid, Card, Image } from "semantic-ui-react"

export default class UserCard extends React.Component{

    render(){
        const { first_name, last_name, occupation, mantra}  = this.props.user
        return(
            <Grid.Column>
                <Card color={this.props.attending ? "green" : this.props.attending === false ? "red" : null}>
                        <Image
                            centered
                            size="medium"
                            src={`http://localhost:3000/${this.props.avatar}`}
                            style={{"height":"290px", "marginBottom": "10px"}}
                        />
                        <Card.Content>
                        <Card.Header>{`${first_name} ${last_name[0]}`}</Card.Header>
                        <Card.Meta>{occupation}</Card.Meta>
                        <Card.Description>
                            {mantra}
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Grid.Column>
        )
    }
}