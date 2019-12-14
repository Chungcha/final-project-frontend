import React from "react"
import Pending from "../components/Pending"
import SubmitReq from "../components/SubmitReq"
import Matched from "../components/Matched"

class Home extends React.Component{

    render(){
        return (
            <div>
                <Pending />
                <SubmitReq submitFoodChoice={this.props.submitFoodChoice}/>
                <Matched />
            </div>
        )
    }
}

export default Home