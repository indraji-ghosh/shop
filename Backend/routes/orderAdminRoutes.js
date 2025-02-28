const express = require("express")
const Order = require("../models/Order")
const {protect,admin} = require("../middleware/authMiddleware")

const router = express.Router()
router.get("/", protect,admin, async function (req,res) {
    try {
        const orders = await Order.find({}).populate("user","name email",)
        res.json(orders)
    } catch (error) {
        console.error(error);
        res.status(500).json({messege:"server error"})
    }
})

router.put("/:id", protect,admin, async function (req,res) {
    try {
        let order = await Order.findById(req.params.id)
        if(order){
           order.status = req.body.status || order.status,
           order.isDelivered = req.body.status === "Delivered" ? true : order.isDelivered,
           order.deliveredAt = req.body.status === "Delivered" ? Date.now() : order.deliveredAt
        }
        else{
            res.status(400).json({messege:"order not found"})
        }
        const updatedOrder = await order.save()
        res.status(201).json({message:"order updated succesfully", updatedOrder})
    } catch (error) {
        console.error(error);
        res.status(500).json({messege:"server error"})
    }
})
router.delete("/:id", protect,admin, async function (req,res) {
    try {
        let order = await Order.findById(req.params.id)
        if(order){
            await order.deleteOne()
            res.json({messege:"Order removed"})
        }
        else{
            res.status(400).json({messege:"order not found"})
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({messege:"server error"})
    }
})
module.exports = router