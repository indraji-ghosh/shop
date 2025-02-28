const express = require('express');
const Cart = require('../models/Cart');
const Product = require('../models/Product');
const {protect} = require("../middleware/authMiddleware")

const router = express.Router();

const getCart = async (userId, guestId) => {
    if (userId) {
        return await Cart.findOne({ user: userId });
    } else if (guestId) {
        return await Cart.findOne({ guestId });
    }
    return null;
};

// @route POST /cart
router.post('/', async function (req, res) {
    const { productId, quantity, size, color, guestId, userId } = req.body;
    try {
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Determine if the user is logged in
        let cart = await getCart(userId, guestId);
        let productIndex = -1;

        if (cart) {
            productIndex = cart.products.findIndex(
                (p) => 
                    p.productId.toString() === productId && 
                    p.size === size && 
                    p.color === color
            );

            if (productIndex > -1) {
                // Update existing product quantity
                cart.products[productIndex].quantity += Number(quantity);
            } else {
                // Add new product to cart
                cart.products.push({
                    productId,
                    name: product.name,
                    image: product.images[0].url,
                    price: product.price,
                    size,
                    color,
                    quantity
                });
            }

            // Update total price
            cart.totalPrice = cart.products.reduce(
                (acc, curr) => acc + curr.price * curr.quantity,
                0
            );

            await cart.save();
            return res.status(200).json(cart);
        } else {
            // Create a new cart if none exists
            const newCart = await Cart.create({
                user: userId ? userId : undefined,
                guestId: guestId ? guestId : "guest_" + new Date().getTime(),
                products: [{
                    productId,
                    name: product.name,
                    image: product.images[0].url,
                    price: product.price,
                    size,
                    color,
                    quantity:Number(quantity)
                }],
                totalPrice: product.price * quantity
            });

            return res.status(201).json(newCart);
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
});

// @route put /cart

router.put('/', async function (req, res) {
    const { productId, quantity, size, color, guestId, userId } = req.body;

    try {
        const cart = await getCart(userId, guestId);
        
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        const productIndex = cart.products.findIndex(
            (p) => 
                p.productId.toString() === productId &&
                p.size === size &&
                p.color === color
        );

        if (productIndex > -1) {
            if (quantity > 0) {
                cart.products[productIndex].quantity = quantity;
            } else {
                cart.products.splice(productIndex, 1);
            }

            // Update total price
            cart.totalPrice = cart.products.length > 0
                ? cart.products.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
                : 0; // If cart is empty, total price should be 0

            await cart.save();
            return res.status(200).json(cart);
        } else {
            return res.status(404).json({ message: 'Product not found in the cart' });
        }
    } 
    catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
    }
});
router.delete('/', async function (req, res) {
    const { productId, quantity, size, color, guestId, userId } = req.body;

    try {
        const cart = await getCart(userId, guestId);
        
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        const productIndex = cart.products.findIndex(
            (p) => 
                p.productId.toString() === productId &&
                p.size === size &&
                p.color === color
        );

        if (productIndex > -1) {
            if (quantity > 0) {
                cart.products[productIndex].quantity = quantity;
            } else {
                cart.products.splice(productIndex, 1);
            }

            // Update total price
            cart.totalPrice = cart.products.length > 0
                ? cart.products.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
                : 0; // If cart is empty, total price should be 0

            await cart.save();
            return res.status(200).json(cart);
        } else {
            return res.status(404).json({ message: 'Product not found in the cart' });
        }
    } 
    catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
    }
});

router.get('/', async function (req, res) {
    const {userId, guestId } = req.query;

    try {
        const cart = await getCart(userId, guestId);
        
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        else {
            res.status(200).json(cart);
        }
    } 
    catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
    }
});


// @route Post api/cart/merge

// @route POST /cart/merge
router.post('/merge', protect, async function (req, res) {
    const { guestId } = req.body;

    try {
        const guestCart = await Cart.findOne({ guestId });
        const userCart = await Cart.findOne({ user: req.user._id });

        

        if (guestCart) {
            if (guestCart.products.length === 0) {
                return res.status(400).json({ message: 'Guest cart is empty' });
            }

            guestCart.products.forEach((guestItem) => {
                const productIndex = userCart.products.findIndex(
                    (item) => item.productId.toString() === guestItem.productId.toString() && item.size === guestItem.size && item.color === guestItem.color
                );

                if (productIndex > -1) {
                    userCart.products[productIndex].quantity += guestItem.quantity;
                } else {
                    userCart.products.push(guestItem);
                }
            });

            userCart.totalPrice = userCart.products.reduce(
                (acc, curr) => acc + curr.price * curr.quantity,
                0
            );

            await userCart.save();
            await Cart.findOneAndDelete({ guestId });

            return res.status(200).json(userCart);
        } else {
            return res.status(404).json({ message: 'Guest cart not found' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
});
module.exports = router;


