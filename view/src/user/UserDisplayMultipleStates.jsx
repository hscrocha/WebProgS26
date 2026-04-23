import React from "react";

export default function UserDisplayMultipleStates(){
    const [name, setName] = React.useState("Jhonny Test");
    const [login, setLogin] = React.useState("jt@test.com");
    const [perm, setPerm] = React.useState(2);

    return (
        <div>
            <ul>
                <li> Name: {name}  </li>
                <li> Login: {login}   </li>
                <li> Permission: {perm}   </li>
            </ul>
        </div>
    );
}