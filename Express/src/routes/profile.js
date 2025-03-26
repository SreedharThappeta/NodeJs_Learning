
const express = require("express");

const profileRouter = express.Router();

const cookieParser = require("cookie-parser");

const jwt = require("jsonwebtoken");

const { userAuth } = require("../utils/Authentication");




profileRouter.use(cookieParser());

profileRouter.use("/profile", async (req,res) => {

    try{
        const token = req.cookies.token;
        if(!token){
            throw new Error("Login First");
        }

        console.log(token);
        const user_data = await jwt.verify(token,"SecretPr1vat3k#Y");
        console.log(user_data.id);

       res.send(user_data);
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