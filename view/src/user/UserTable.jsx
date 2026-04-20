import React from "react";
import UserRow from "./UserRow";

export default function UserTable(){
    const lstUsers = [
                {_id:1,name:'H. Rocha', login:'hsrocha@loyola.edu', password:'123456',permission:1},
                {_id:2,name:'John Doe', login:'jd@aol.com', password:'123456', permission:2},
                {_id:3,name:'Jane Doe', login:'janed@compuserve.com', password:'123456', permission:2}
            ];
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
                {lstUsers.map( singleuser => <UserRow user={singleuser} /> ) }
            </tbody>
        </table>
    );

}