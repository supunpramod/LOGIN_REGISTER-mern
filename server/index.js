const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app=express();
app.use(express.json());
app.use(cors());

const mongourl="mongodb+srv://admin:admin123@cluster0.doyjlyw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(mongourl,{})
const connection=mongoose.connection


connection.once('open',() =>{
    console.log("MongoDB connected");
})

connection.once('error',() =>{
    console.log("MongoDB connection error");
})


app.listen(3000,()=>{
    console.log("server is running on port 3000");
});