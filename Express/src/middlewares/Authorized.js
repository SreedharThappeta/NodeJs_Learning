const adminAuth = (req,res, next) => {
    tokken = "xyz"
    if(tokken === "xyz"){
        next();
    }
    else{
        res.status(401).send("Unauthorized!");
    }
}


module.exports = {adminAuth};