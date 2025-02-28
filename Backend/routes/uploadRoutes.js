const express = require("express")
const multer = require("multer")
const cloudinary = require("cloudinary").v2 // Ensure you're using .v2
const streamifier = require("streamifier")

require("dotenv").config()

const router = express.Router()

// ✅ Cloudinary Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_API_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

// ✅ Memory Storage for Multer
const storage = multer.memoryStorage()
const upload = multer({ storage })

// ✅ Helper: Upload to Cloudinary via Stream
const streamUpload = (fileBuffer) => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            { folder: "uploads" }, // Optional: Upload to a folder
            (error, result) => {
                if (error) {
                    console.error("❌ Cloudinary Upload Error:", error) // Log any Cloudinary errors
                    return reject(error)
                }
                console.log("✅ Cloudinary Upload Success:", result) // Log the successful upload
                resolve(result)
            }
        )
        streamifier.createReadStream(fileBuffer).pipe(stream)
    })
}

// ✅ POST: Upload Image
router.post("/", upload.single("image"), async (req, res) => {
    try {
        // Check if file exists
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" })
        }

        // Upload image to Cloudinary
        const result = await streamUpload(req.file.buffer)

        // Send success response
        res.status(200).json({ url: result.secure_url })
        

    } catch (error) {
        console.error("❌ Upload Route Error:", error) // Log the catch error
        res.status(500).json({ message: "Server error", error: error.message })
    }
})

module.exports = router
