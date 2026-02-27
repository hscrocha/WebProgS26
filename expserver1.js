let lstUsers = [
    {_id:1,name:'Henrique Rocha', login:'hsrocha@loyola.edu', password:'123456',permission:1},
    {_id:2,name:'John Doe', login:'jd@aol.com', password:'123456', permission:2},
    {_id:3,name:'Jane Doe', login:'janed@compuserve.com', password:'123456', permission:2}
];

let hostname = "localhost";
let port = 4000;

const express = require('express'); //imports express
const morgan = require('morgan'); //imports morgan

const app = express(); //creates a new Express Application

app.use(morgan('dev')); //For better logging, we use morgan

app.use( express.static('public_html') ); // Static page server will use the folder 'public_html'

app.get("/user",function(req,res){
    res.status(200); // Ok status
    res.send(lstUsers); // Sending the array
    res.end(); // Ends the response (optional but important)
});

app.get("/user/:uid",function(req,res){
    let uid = parseInt( req.params.uid ); //takes the URL parameter

    let user = null;
    for(let i=0; i<lstUsers.length; i++){ //search for the user with the requested ID
        if(lstUsers[i]._id === uid ){ // found ID match
            user = lstUsers[i]; 
            break;
        }
    }

    res.status(200);
    res.send(user);
    res.end();

});


const server = app.listen(port,hostname,function(){ // Asynchronous Listen to client requests in hostname:port
    console.log(`Server running on ${hostname}:${port}`); // Must be here due to the asynchronous nature of the app.listen()
});

