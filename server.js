const express = require('express');
const path = require("path");
const app = new express();


app.use(express.static("./dist/frontend"));

app.get('/*',(req,res)=>
    res.sendFile("index.html",{root:"dist/frontend/"})

);

app.listen(process.env.PORT || 8080);