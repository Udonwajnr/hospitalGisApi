const mongoose = require("mongoose")

const hospitalSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    location:{
        type:{
            type:String,
            enum:["Point"],
            default:"Point"
        },
        coordinates:{
            type:[Number],
            required:true
        }
    },
    contact:{
        phone:{
            type:String,
            trim:true
        },
        email:{
            type:String,
            trim:true
        },
        address:{
            street:{
                type:String,
                trim:true
            },
            city:{
                type:String,
                trim:true
            },
            state:{
                type:String,
                trim:true
            },
            postalCode:{
                type:String,
                trim:true
            }
        }
    },
    
    services:[
        {
            type:String,
            trim:true
        },
    ],
    description: {
        type: String,
        trim: true
      },
      operatingHours: {
        monday: {
          open: String,
          close: String
        },
        tuesday: {
          open: String,
          close: String
        },
        wednesday: {
            open: String,
            close: String
          },
          thursday: {
            open: String,
            close: String
          },
          friday: {
            open: String,
            close: String
          },
          saturday: {
            open: String,
            close: String
          },
        sunday: {
          open: String,
          close: String
        }
      },
      createdAt: {
        type: Date,
        default: Date.now
      },
      updatedAt: {
        type: Date,
        default: Date.now
      }
},{ timestamps: true })

module.exports = mongoose.model('Hospital', hospitalSchema);