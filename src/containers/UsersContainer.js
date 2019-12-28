import React, { Fragment } from "react"
import UserCard from "../components/UserCard"

const UsersContainer = (props) => {
    console.log(props.users)
    return (
        <Fragment>
                {props.users.map((userObj)=><UserCard user={userObj.user} avatar ={userObj.avatar} key={userObj.user.username}/>)}
        </Fragment>
    )
}

export default UsersContainer