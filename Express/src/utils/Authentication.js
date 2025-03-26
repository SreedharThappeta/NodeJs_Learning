
const jwt = require("jsonwebtoken");
const { User } = require("../models/model");


const userAuth = async function (req, res, next) {

    try{
        const token = req.cookies.token;
        if(!token){
            throw new Error("Token Not Found: Login Fisrt!");
        }
        const token_data = await jwt.verify(token, "SecretPr1vat3k#Y");

        if(!token_data.id)
        {
            throw new Error("Token doesn't contain data");
        }
        console.log(token_data.id);
        const userobj = await User.findOne({_id:token_data.id});
        req.user = userobj;
        console.log(req.user);
        next();
    }
    catch(err){
        
        res.status(400).send("Authetication Failed: "+err.message);
    }
}

module.exports = {userAuth};