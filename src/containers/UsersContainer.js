import React, { Fragment } from "react"
import UserCard from "../components/UserCard"

const UsersContainer = (props) => {

    return (
        <Fragment>
                {props.users.map((userObj)=><UserCard 
                    user={userObj.user} 
                    avatar ={userObj.avatar} 
                    key={userObj.user.username}
                    attending={userObj.userAttending}
                    />)}
        </Fragment>
    )
}

export default UsersContainer