const Hospital = require("../model/hospital")
const asyncHandler = require("express-async-handler")
const mongoose = require("mongoose")

const getAllHospitals =asyncHandler(async(req,res)=>{
    const hospital = await Hospital.find()
    return res.status(200).json(hospital)
})

const getHospital = asyncHandler(async(req,res)=>{
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid Hospital ID format' });
      }

    const hospital = await Hospital.findById(id)
    
    if (!hospital) {
        return res.status(404).json({ message: 'Hospital not found' });
    } 
    return res.status(200).json(hospital)
})

const createHospital =asyncHandler(async(req,res)=>{
    const hospital = new Hospital(req.body);
    const savedHospital = await hospital.save();
    res.status(201).json(savedHospital);
})

const updateHospital=asyncHandler(async(req,res)=>{
    const { id } = req.params;
    // Validate the ObjectID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid Hospital ID format' });
    }
  
      // Check if the Hospital exists
      const hospital = await Hospital.findById(id);
      if (!hospital) {
        return res.status(404).json({ message: 'Hospital not found' });
      }
      // Update the Hospital
      const updatedHospital = await Hospital.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
  
      // Return the updated Hospital
      return res.status(200).json(updatedHospital);    
})

const deleteHospital=asyncHandler(async(req,res)=>{
    const {id} = req.params
    
    const hospital = await Hospital.findById(id)
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid Hospital ID format' });
    }

    if (!hospital) {
        return res.status(404).json({ message: 'Hospital not found' });
      }   
    await Hospital.findByIdAndDelete(id)
    return res.status(200).json({msg:`${id} has been deleted`})
})

module.exports ={getAllHospitals,getHospital,getHospital,createHospital,updateHospital,deleteHospital }