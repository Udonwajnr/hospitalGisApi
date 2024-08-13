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
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/api/hospital",require("./route/hospitalRoute"))

app.listen(port,()=>{
    console.log("I'm back")
})
// const migrateAddPostalCode = async () => {
//     try {
//       // Connect to MongoDB
//       await connectDB();
  
//       // Update documents
//       const result = await Hospital.updateMany(
//         {}, // Filter to match all documents
//         { $set: { "contact.address.postalCode": "" } } // Add `postalCode` field with default value
//       );
  
//       console.log('Update Result:', result);
  
//       // Close the connection after the migration
//       mongoose.connection.close();
//     } catch (error) {
//       console.error('Error during migration:', error);
//       mongoose.connection.close();
//     }
//   };
  
//   migrateAddPostalCode();

connectDb()