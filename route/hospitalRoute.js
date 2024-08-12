const express = require("express")
const router = express.Router()
const {getAllHospitals,getHospital,createHospital,deleteHospital,updateHospital} = require("../controller/hospitalController")

router.route("/").get(getAllHospitals)
router.route("/:id").get(getHospital)
router.route("/").post(createHospital)
router.route("/:id").put(updateHospital)
router.route("/:id").delete(deleteHospital)
module.exports = router
