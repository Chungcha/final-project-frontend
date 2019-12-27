import React from "react"
import { Grid } from "semantic-ui-react"

export default class UserCard extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        const { first_name, last_name }  = this.props.user
        return(
            <Grid.Column>
                {`${first_name} ${last_name[0]}`}
            </Grid.Column>
        )
    }

}