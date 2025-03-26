

const express = require("express");

const cookiesRouter = express.Router();

const cookieParser = require("cookie-parser"); // for reading cookies

cookiesRouter.use(cookieParser());


cookiesRouter.use("/cookies/set", (req,res) => {

    const {name, data}  = req.body;

    console.log(name+" "+data);
    res.cookie(name, data); 
    res.send("cookie set succesfully!");
});

cookiesRouter.use("/cookies/get", (req,res) => {
    console.log(req.cookies);
    res.send(req.cookies);
});




cookiesRouter.use("/cookies", (req, res) => {

    const data = req.body;

    res.cookie("token", "My Custom Token!");

    res.send("Cookie sent");
});



module.exports = {cookiesRouter};