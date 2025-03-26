
const express = require("express");

const {User} = require("../models/model");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const signup = express.Router();


signup.use("/signup", async (req, res) => {


    const {email, password} = req.body;

    const hash = await bcrypt.hash(password, 10); // 10 is salt rounds

    console.log(hash);

    const user = new User({emailId:email, password:hash});

    await user.save()
            .then(() => {
                res.send("sign up successful!");
            })
            .catch(err=> {
                res.status(500).send(err.message);
            });
});


signup.use("/login",  async (req, res) => {
    
    
    try{
        const {email, password} = req.body;
        
        const user = await User.findOne({emailId:email});
        console.log(user);
        if(!user){
            console.log("user not found in db");
            throw new Error("Invalid Credentials!");
        }

        const isPasswordMatched = await bcrypt.compare(password,user.password);

        if(!isPasswordMatched)
        {
            console.log("password didn't match!");
            throw new Error("Invalid Credentials!");
        }

        const token = await jwt.sign({id:user._id},"SecretPr1vat3k#Y");

        res.cookie("token", token);
        res.send("login successful!");
    }catch(err){
        res.status(404).send("Error: "+err.message);
    }
}); 




module.exports = {signup};

