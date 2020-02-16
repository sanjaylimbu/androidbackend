const express = require ('express');
require('./Database/database')

const bodyParser = require ('body-parser');

const taskrouter= require('./Routes/routes')
const uploadRouter = require('./Routes/upload');
const taskEnroll= require('./Routes/routeEnroll')
const taskContact= require('./Routes/routeContact')

const path = require("path");
const app=express();
const publicdirectory= path.join(__dirname,'public');
app.use(express.static(publicdirectory))

app.use(express.json())
app.use (bodyParser.urlencoded({extended:false}))
app.use(taskrouter)
app.use(taskEnroll)
app.use(taskContact)
app.use('/upload/image', uploadRouter);

app.listen(8000);