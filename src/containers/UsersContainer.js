import React, { Fragment } from "react"
import UserCard from "../components/UserCard"

const UsersContainer = (props) => {
    return (
        <Fragment>
                {props.users.map((user)=><UserCard user={user} key={user.username}/>)}
        </Fragment>
    )
}

export default UsersContainer