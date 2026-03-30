# CS 456 – Web Programming (Spring 2026)
CS456 (Web programming) course from the Loyola University Maryland, Spring 2026.

Classroom coding for the Web Programming Course. All code under MIT license, authorship Prof. Rocha.

## Installing the Components

To install all the necessary components for this project, you need to use the following:

```
npm install
```

This command will look over the packages.json file and install all modules listed there. Therefore, it is a good idea to always keep you packages.json up to date.

## Running Node Express server

To run the most current version of our Node.js Express server just type the following in a command/terminal in the folder of your application.

```
node server.js
```

If the server is executing successfull you will see a message like "Server Running on localhost:4000...". The most common errors that prevent from running this server are:
- Not installing the components before running the server. Just run `npm install` to fix it.
- The port is already in use by another program. In this case, just changed the port in the `.env` file.

## Testing and Coverage

To run tests and display coverage in this repository, all you need to do is use the command:
```
npm run coverage
```

To configure tests in your own repository you need to:
- Install Jest as a module in your Node Express: `npm install jest --save-dev` on the root folder of your application.
- Add the test script in your `packages.json`file (slide 23 of Good Practices, or just look at the file in this repo).

# React

Soon (after the Easter Break).





