//First we import modules that we want to use
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();
console.log('Hello!');

const route = require('./routes/route')
//Adding middleware --cors to parse the data

app.use(cors());

//Connect with mongodb
mongoose.connect('mongodb://localhost:27017/Mean_Application',{ useNewUrlParser: true });
mongoose.connection.on('connected',()=>{
    console.log('Database connected Successfully');
});

mongoose.connection.on('error',(err)=>{
   if(err){
       console.log('Error in Database connection:'+err);
   }
});



//body-parser
app.use(bodyparser.json());


//static files
app.use(express.static(path.join(__dirname,'public')));

app.use('/api',route);

console.log('####')
//Set port number
const port = 7070;

app.get('/',(req,res)=>{
    res.send('Hello World!')
});
//test your server connection
app.listen(port,()=>{
    console.log('Server Started at port:'+port);
});