const express = require("express")
const Product = require("../models/Product")
const {protect,admin} = require("../middleware/authMiddleware")

const router = express.Router()

router.post("/",protect,admin, async(req,res)=>{
    try {
        const { name, description, price, discountPrice, countInStock, sku, category, brand, sizes, colors, collections, material, gender, images, isFeatured, rating, numReviews, tags, user, metaTitle, metaDescription, metaKeywords, dimensions, weight } = req.body
        const product = new Product({ name, description, price, discountPrice, countInStock, sku, category, brand, sizes, colors, collections, material, gender, images, isFeatured, rating, numReviews, tags, user, metaTitle, metaDescription, metaKeywords, dimensions, weight, user:req.user._id})
        const createdProduct = await product.save()
        res.status(201).json(createdProduct)
    } catch (error) {
       res.status(401).json({message: "server error"}) 
    }
})


router.put("/:id",protect,admin, async(req,res)=>{
    try {
        const { name, description, price, discountPrice, countInStock, sku, category, brand, sizes, colors, collections, material, gender, images, isFeatured, rating, numReviews, tags, user, metaTitle, metaDescription, metaKeywords, dimensions, weight } = req.body
const product = await Product.findById(req.params.id)
if(product){
    product.name = name || product.name;
    product.description = description || product.description;
    product.price = price || product.price;
    product.discountPrice = discountPrice || product.discountPrice;
    product.countInStock = countInStock || product.countInStock;
    product.sku = sku || product.sku;
    product.category = category || product.category;
    product.brand = brand || product.brand;
    product.sizes = sizes || product.sizes;
    product.colors = colors || product.colors;
    product.collections = collections || product.collections;
    product.material = material || product.material;
    product.gender = gender || product.gender;
    product.images = images || product.images;
    product.isFeatured = isFeatured !== undefined? isFeatured: product.isFeatured;
    product.rating = rating !== undefined? rating: product.rating;
    product.numReviews = numReviews || product.numReviews;
    product.tags = tags || product.tags;
    product.user = user || product.user;
    product.metaTitle = metaTitle || product.metaTitle;
    product.metaDescription = metaDescription || product.metaDescription;
    product.metaKeywords = metaKeywords || product.metaKeywords;
    product.dimensions = dimensions || product.dimensions;
    product.weight = weight || product.weight;

    const updatedProduct = await product.save()
        res.status(201).json(updatedProduct)
    
}

        
    } catch (error) {
        console.error(error)
        res.status(500).send("server error")
    }
})

router.delete("/:id",protect,admin, async(req,res)=>{
    try {
        const product = await Product.findById(req.params.id)
        if(product){
            await product.deleteOne()
            res.json({message:"product removed"})
        }
        else {
            res.status(401).json({message:"product not found"}) 
        }
    
}    
     catch (error) {
        console.error(error)
        res.status(500).send("server error")
    }
})

router.get("/",async(req,res)=>{
    try {
        const {collection, size, color, gender, minPrice, maxPrice, sortBy, search, category, material, brand, limit} = req.query
        let query ={}
        if(collection && collection.toLocaleLowerCase() !== "all"){ query.collection = collection }
        if(category && category.toLocaleLowerCase() !== "all"){ query.category = category }
        if(material){ query.material = {$in:material.split(",")} }
        if(brand){ query.brand = {$in:brand.split(",")} }
        if(size){ query.size = {$in:size.split(",")} }
        if(color){ query.color = {$in:[color]} }
        if(gender){ query.gender = {$in:[gender]} }


        if(minPrice||maxPrice){ query.price = {} 
        if(minPrice) query.price.$gte = Number(minPrice)
        if(maxPrice) query.price.$lte = Number(maxPrice)    }

        if(search){ query.$or = [
            {name:{$regex:search, $options:"i"}},
            {name:{$regex:search, $options:"i"}}
        ]
         }
         let sort = {}
         if(sortBy){
            switch (sortBy) {
                case "priceAsc":
                    sort = {price:1}
                    break;
                
                case "priceDesc":
                        sort = {price:-1}
                        break;

                case "popularity":
                            sort = {rating:-1}
                            break;
            
                default:
                    break;
            }
         }

         //fetch and apply sorting and limit

         let products = await Product.find(query).sort(sort).limit(Number(limit)|| 0)
         res.json(products)




    } catch (error) {
        res.status(500).json({message: "server error"}) 
    }
})

router.get("/best-seller", async(req,res)=>{
    try {
        
       const bestSeller = await Product.findOne().sort({rating: -1})
       if(bestSeller){
        res.json(bestSeller)
       }

       else{
        res.status(404).json({message: "No best seller"}) 
       }

    } catch (error) {
        res.status(500).json({message: "server error"}) 
    }
})

router.get("/:id",async(req,res)=>{
    try {

        let product = await Product.findById(req.params.id)
        if(product){
            res.json(product)
        }
       else{
        res.status(404).json({message:"product not found"})
       }




    } catch (error) {
        res.status(500).json({message: "server error"}) 
    }
})

router.get("/similar/:id", async(req,res)=>{
    const {id} = req.params
    try {
        
       const product = await Product.findById(id)
       if(!product){
        return res.status(404).json({message:"Product not found"})
       }

        const similarProducts = await Product.find({
            _id: {$ne:id},
            gender:product.gender,
            category:product.category
        }).limit(4)
       
       res.json(similarProducts)


    } catch (error) {
        res.status(500).json({message: "server error"}) 
    }
})




module.exports = router