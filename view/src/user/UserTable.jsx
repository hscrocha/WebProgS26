import React from "react";
import UserRow from "./UserRow";

async function fetchUsers(){
    let response = await fetch('/user'); //gets data
    return await response.json(); //converts to JavaScript Object
}

let userserverdata; //singleton pattern (lazy initiation)
function getServerData(){
    if(!userserverdata){
        userserverdata = fetchUsers();
    }
    return userserverdata
}

function UserTableContent(){
    const arraydata = React.use( getServerData() );
    return (
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th> ID </th>
                    <th> Name </th>
                    <th> Login </th>
                    <th> Permission </th>
                </tr>
            </thead>
            <tbody>
                {arraydata.map( singleuser => <UserRow key={singleuser._id} user={singleuser} /> ) }
            </tbody>
        </table>
    );
}

export default function UserTable(){
    return (
        <React.Suspense fallback={<h3>Loading users...</h3>}>
            <UserTableContent />
        </React.Suspense>
    );
}