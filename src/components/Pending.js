import React from "react"
import { Segment } from "semantic-ui-react"

const Pending = (props) => {
    return (
        <Segment>
            <h1>This is the pending container</h1>
            <h5>{`Waiting for other people who dig ${props.wait_queue.food_choice} food`}</h5>
        </Segment>
    )
}

export default Pending