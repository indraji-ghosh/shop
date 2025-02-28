const express = require("express")
const Product = require("../models/Product")
const {protect, admin} = require("../middleware/authMiddleware")


const router = express.Router()

router.get("/", protect,admin, async function (req,res) {
    try {
        const product = await Product.find({})
        res.json(product)
    } catch (error) {
        console.error(error);
        res.status(500).json({messege:"server error"})
    }
})


module.exports=router