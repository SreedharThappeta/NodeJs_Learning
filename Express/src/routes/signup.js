
const express = require("express");

const {User} = require("../models/model");

const signup = express.Router();


signup.use("/signup", async (req, res) => {


    const {email, password} = req.body;
    const user = new User({emailId:email, password:password});

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
        if(password != user.password)
        {
            console.log("password didn't match!");
            throw new Error("Invalid Credentials!");
        }
        res.send("login successful!");
    }catch(err){
        res.status(404).send("Error: "+err.message);
    }

}); 







module.exports = {signup};

