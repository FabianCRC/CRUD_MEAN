const express= require('express');
const morgan= require('morgan');
const cors= require('cors');


const app= express();

//enviroment variables
app.set('port',process.env.port||4000);

//for see request info
app.use(morgan('dev'));

//for request from other servers
app.use(cors())

//for use json
app.use(express.json())
//for use form
app.use(express.urlencoded({extend:false}))

//route
app.use("/api/employees",require('./routes/employees.routes'))

module.exports=app;