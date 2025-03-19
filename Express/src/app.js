const express = require("express");

const app = express();

const {adminAuth} = require("./middlewares/Authorized");


app.use("/admin", adminAuth);

app.get("/admin", (req,res) => {
    res.send("Admin Authorized!");
})

app.use("/user", (req,res,next) => {
    if(req.url == '/'){
        next();
    }
    else {
        res.status(500).send("error"+req.url);
    }

}, (req, res) => {
    res.send("user Authorized!");
}
)


app.use("/home", (req,res,next) => {
    console.log("Checking Auth for all /home");
    next();
})

app.get("/home/:name", (req, res, next) => {

    if(req.params.name == "sreedhar"){
        res.send("Hello Sreedhar!");
    }
    else{
        next();
    }
}, (req, res, next) => {
    res.status(401).send("your not sreedhar!!! (Unauthorized Request!)");

}
)



// ERROR HANDLING
app.get("/test", (req,res) => {

    throw new error("custom made error");
    res.send("hi");

})
 
app.use("/test", (err, req, res, next) => {
    res.status(500).send("Error! "+ err.name);
})

app.listen(420, () => {
    console.log("This is called when the sever starts successfully!");
});





// //testing PostMan

// app.get("/home", (request, response) => {

//     response.send({ "key":"value", "name":"sreedhar"});
//     // response.end("home get");
//     console.log("this is home get");
// }
// );

// app.post("/home", (req,res) => {
//     console.log(req.query);
//     // res.send(req.query);
//     res.end("home post got query!");
// })

// app.delete("/home",(q,r) => {
//     r.end("home delete");
// })

// app.use("/home/index",(req, res) => {
//     res.end("/home/index page")
// })

// app.put("/home/:dynamic", (req,res) => {
//     res.write(req.url);
//     console.log(req.params);
//     res.end("\nend put params");
// })

// app.put("/home/:dynamic/:testing", (req,res) => {
//     res.write(req.url);
//     console.log(req.params);
//     res.end("\nend testing put parems");
// })

// // Can use regex for routing

// app.use("/r*(repeat)+(maybe)?", (req,res) => {
//     res.end("regex end (*)means anything");
// })

// app.put(/s*h+(two){2}(h)?(end)$/,(req,res) => {
//     res.end("hello regex! doesn't work in use (app.use)");
// }) //ssssssshssshtwotwohend




// app.use("/test", (req,res) =>{
//     res.end("this is test page!");
// });

// app.use("/dev", (req, res) => {
//     res.end("this is dev page");
// });

// app.use("/",(req, res) => {
//     res.write(req.url)
//     res.end("\neverything else if it is placed at the last!.")
// });


// app.use((req, res) => {
//     res.write(req.url);
//     res.end("\nthis called for everything else if it is placed at the last!.");
// });

