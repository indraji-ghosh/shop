import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";
import User from "./models/User.js";
import Cart from "./models/Cart.js";
import connectDB from "./config/db.js";
import products from "./data/product.js";

dotenv.config();

const seedDatabase = async () => {
  try {
    await connectDB(); // Ensure DB connection
    await Product.deleteMany();
    await User.deleteMany();
    await Cart.deleteMany();

    const createdUser = await User.create({
      name: "Admin User",
      email: "admin@example.com",
      password: 123456,
      role: "admin"
    });

    const userId = createdUser._id;
    const sampleProducts = products.map((product) => ({
      ...product,
      user: userId
    }));

    await Product.insertMany(sampleProducts);
    console.log("Database Seeded Successfully! ✅");
    process.exit();
  } catch (error) {
    console.error("Error Seeding Database ❌", error);
    process.exit(1);
  }
};

seedDatabase();
