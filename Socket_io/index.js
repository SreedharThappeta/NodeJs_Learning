
const express = require("express");

const {join} = require("node:path");

const http = require("http");

const app = express();

const server = http.createServer(app);

const socket = require("socket.io");

const io = new socket.Server(server);

app.use("/", (req,res) =>{
    // res.send("hello!");
    // console.log(join(__dirname,"index.html"));
    res.sendFile(join(__dirname,"index.html"));
});
 
io.on("connection", (socket)=>{
    console.log("socket connection successful!");

    socket.broadcast.emit('hello',"first broadcast.emit");

    // console.log(socket);

    socket.on("chat message", (msg) => {
        console.log("message: ",msg);

        io.emit('chat message', msg);
    });


    socket.on("disconnect", () => {
        console.log('user disconnected');
    });
})

// io.on("disconnect", ()=>{
//     console.log('user111 disconnected');
// }
// );


server.listen(5000, ()=>[
    console.log("Server is Listening at: 5000")
]);