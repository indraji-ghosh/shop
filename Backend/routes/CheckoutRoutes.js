const express = require("express");
const Order = require("../models/Order");
const Cart = require("../models/Cart");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Place Order (Cash on Delivery)
router.post("/place-order", protect, async function (req, res) {
  const { shippingAddress, cartItems, totalPrice } = req.body;

  if (!cartItems || cartItems.length === 0) {
    return res.status(400).json({ message: "No items in cart" });
  }

  try {
    // Create the order
    const newOrder = await Order.create({
      user: req.user._id,
      orderItems: cartItems,
      shippingAddress,
      paymentMethod: "Cash on Delivery",
      totalPrice,
      isPaid: false,
      isDelivered: false,
      paymentStatus: "Pending",
    });

    // Clear the user's cart
    await Cart.findOneAndDelete({ user: req.user._id });

    console.log(`Order created for user: ${req.user._id}`);
    res.status(201).json(newOrder);
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;