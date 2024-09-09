const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const connectDb = require("./config/db")
const color = require("colors")
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose');
let cors = require("cors")
const port=3000

app.use(cookieParser())
app.use(cors())
const corsOptions = {
    origin: 'https://hospital-admin-neon.vercel.app', // Replace with your client application's URL
    methods: 'GET,POST,PUT,DELETE', // Allow the HTTP methods you need
    allowedHeaders: 'Content-Type,Authorization', // Allow the headers you need
  };
  
  // Use CORS middleware with options
  app.use(cors(corsOptions));
  
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/api/hospital",require("./route/hospitalRoute"))

app.listen(port,()=>{
    console.log("I'm back")
})

connectDb()