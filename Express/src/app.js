const express = require("express");

const app = express();



app.use("/test", (req,res) =>{
    res.end("this is test page!");
})

app.use("/dev", (req, res) => {
    res.end("this is dev page");
})

app.use((req, res) => {
    res.write(req.url);
    res.end("\nthis called for everything else if it is placed at the last!.");
})


app.listen(420, () => {
    console.log("This is called when the sever starts successfully!");
})