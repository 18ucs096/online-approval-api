const connection=require('./model/connection');
const express=require('express');
const person=require('./model/person');
const bodyParser=require("body-parser");
const signup=require('./signup');
const path = require("path");
var indexRouter = require('./routes/index');
const port=process.env.PORT||3000;
const app=express();


app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(path.join(__dirname, 'views')));


app.use('/', indexRouter);

app.use('/signup',signup);

app.listen(port,()=>{
    console.log("Server Started"+port);
});