import React from "react"
import Pending from "../components/Pending"
import SubmitReq from "../components/SubmitReq"
import Matched from "../components/Matched"



class Home extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        const {future_meetups, wait_queue, past_meetups} = this.props.currentUser
        return (
            <div style={{"margin":"5%"}}>
                {wait_queue ? <Pending wait_queue={wait_queue}/> : future_meetups.length > 0 ? <Matched future_meetups={future_meetups[0]} currentUser={this.props.currentUser} /> : <SubmitReq submitFoodChoice={this.props.submitFoodChoice}/> }
                
                {/* Might need to make nested terinary?? */}
                {/* {future_meetups.length > 0 ? <Matched future_meetups={future_meetups}/> : <SubmitReq submitFoodChoice={this.props.submitFoodChoice}/> } */}
            </div>
        )
    }
}

export default Home