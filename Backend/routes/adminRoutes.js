const express = require("express")
const User = require("../models/User")
const {protect, admin} = require("../middleware/authMiddleware")

const router = express.Router()

router.get("/", protect,admin, async function (req,res) {
    try {
        const users = await User.find({})
        res.json(users)
    } catch (error) {
        console.error(error);
        res.status(500).json({messege:"server error"})
    }
})


router.post("/", protect,admin, async function (req,res) {
    const {name, email, password, role} = req.body
    try {
        let user = await User.findOne({email})
        if(user){
            return res.status(400).json({message:"User already exists"})
        }
        user = new User({
            name,
            email,
            password,
            role: role || "Customer"
        })
        await user.save()
        res.status(201).json({message:"User created succesfully", user})
    } catch (error) {
        console.error(error);
        res.status(500).json({messege:"server error"})
    }
})

router.put("/:id", protect,admin, async function (req,res) {
    try {
        let user = await User.findById(req.params.id)
        if(user){
            user.name = req.body.name || user.name
            user.email = req.body.email || user.email
            user.password = req.body.password || user.password
            user.role = req.body.role || user.role
        }
        const updatedUser = await user.save()
        res.status(201).json({message:"User updated succesfully", updatedUser})
    } catch (error) {
        console.error(error);
        res.status(500).json({messege:"server error"})
    }
})

router.delete("/:id", protect,admin, async function (req,res) {

    try {
        let user = await User.findById(req.params.id)
        if(user){
            await user.deleteOne()
        }
        res.status(201).json({message:"User deleted succesfully"})
    } catch (error) {
        console.error(error);
        res.status(500).json({messege:"server error"})
    }
})
module.exports = router