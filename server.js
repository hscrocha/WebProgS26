const ExpApp = require('./app');

let hostname = "localhost";
let port = 4000;

const server = ExpApp.app.listen(port,hostname,function(){ // Asynchronous Listen to client requests in hostname:port
    console.log(`Server running on ${hostname}:${port}`); // Must be here due to the asynchronous nature of the app.listen()
});

