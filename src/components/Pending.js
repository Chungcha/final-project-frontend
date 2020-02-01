import React from "react"
import { Segment } from "semantic-ui-react"

const Pending = (props) => {
    return (
        <Segment>
            <h1 style={{"textAlign":"center"}}>{`Waiting for other people who dig ${props.wait_queue.food_choice} food`}</h1>
        </Segment>
    )
}

export default Pending