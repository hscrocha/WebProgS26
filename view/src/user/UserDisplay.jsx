import React from "react";

export default function UserDisplay(){
    const [user, setUser] = React.useState({_id:1, name:"unregistered", login:"youremail@domain.com",password:"123456", permission:2});

    return (
        <div>
            <ul>
                <li> Name: {user.name}  </li>
                <li> Login: {user.login}   </li>
                <li> Permission: {user.permission==1?"Admin":"Common"}   </li>
            </ul>
        </div>
    );
}