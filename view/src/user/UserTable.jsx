import React from "react";
import UserRow from "./UserRow";

async function fetchUsers(){
    let response = await fetch('/user'); //gets data
    return await response.json(); //converts to JavaScript Object
}

let serveruserdata = null;
function getServerData(){
    if(serveruserdata==null){
        serveruserdata = fetchUsers();
    }
    return serveruserdata;
}

function UserTableContent(props){
    const arraydata = props.lstUsers ? props.lstUsers : React.use( getServerData() );
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

export default function UserTable(props){
    return (
        <React.Suspense fallback={<h3>Loading users...</h3>}>
            <UserTableContent lstUsers = {props.lstUsers} />
        </React.Suspense>
    );
}