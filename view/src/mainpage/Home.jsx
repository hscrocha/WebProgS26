import React from "react";
import PasswordField from "../util/PasswordField";
import UserDisplay from "../user/UserDisplay";

export default function Home(){
    return (
        <div class="container">
            <h1> Home </h1>
            <UserDisplay /> <hr />
            <PasswordField />
        </div>
    );
}