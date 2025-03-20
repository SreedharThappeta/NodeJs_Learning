const mongoose = require("mongoose");

const connectDB = async () => { //returns a promise
   await mongoose.connect(
    "mongodb+srv://sreedhar:sreedhar96@firstcluster.6vi7p.mongodb.net/?retryWrites=true&w=majority&appName=FirstCluster/userData"
    )
}

console.log("starting Connection....")

module.exports = { connectDB }





    
 
