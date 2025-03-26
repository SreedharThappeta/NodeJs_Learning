
const express = require("express");

const profileRouter = express.Router();

const cookieParser = require("cookie-parser");

const jwt = require("jsonwebtoken");

const { userAuth } = require("../utils/Authentication");




profileRouter.use(cookieParser());

profileRouter.use("/profile", userAuth, async (req,res) => {

    try{
        const user = req.user;
        console.log(user._id);
       res.send(user);
    }
    catch(err){
        res.status(400).send("Something Went Wrong: "+err.message);
    }
});

profileRouter.use("/home", userAuth, (req,res) => {

    const user = req.user;

    console.log("hi");
    console.log(user);

    res.send(user);
});


module.exports = {profileRouter};