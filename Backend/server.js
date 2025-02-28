const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const connectDB = require("./config/db")
const userRoutes = require("./routes/UserRoutes")
const productRoutes = require("./routes/ProductRoutes")
const cartRoutes = require("./routes/CartRoutes")
const checkoutRoutes = require("./routes/CheckoutRoutes") // Corrected typo
const orderRoutes = require("./routes/OrderRoutes")
const uploadRoutes = require("./routes/uploadRoutes")
const adminRoutes = require("./routes/adminRoutes")
const adminProductRoutes = require("./routes/productAdminRoutes")
const adminOrderRoutes = require("./routes/orderAdminRoutes")

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())
app.use(cors({ origin: '*' }));
connectDB()

const PORT = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send("welcome")
})

app.use("/api/users", userRoutes)
app.use("/api/products", productRoutes)
app.use("/api/cart", cartRoutes)
app.use("/api/checkout", checkoutRoutes) // Corrected typo
app.use("/api/orders", orderRoutes)
app.use("/api/upload", uploadRoutes)
app.use("/api/admin/users", adminRoutes)
app.use("/api/admin/products", adminProductRoutes)
app.use("/api/admin/orders", adminOrderRoutes)

app.listen(PORT, () => {
    console.log("█▓▒▒░░░boom app is running░░░▒▒▓█")
})
