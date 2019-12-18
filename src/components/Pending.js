import React from "react"

const Pending = (props) => {
    return (
        <div>
            <h1>This is the pending container</h1>
            <h5>{`Waiting for other people who dig ${props.wait_queue.food_choice} food`}</h5>
        </div>
    )
}

export default Pending