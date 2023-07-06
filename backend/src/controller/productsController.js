import express from "express";
import Product from "../models/product.js";

const productRouter = express.Router()

productRouter.get("/", async (req, res) =>{
    return res.send(await Product.find())
})

productRouter.get("/:productId", async (req, res) =>{
    const productId = req.params.productId
    return res.send(await Product.findById(productId))
})

productRouter.post("/", async (req, res) =>{
    const newProduct = await Product.create(req.body)
    return res.send(newProduct)
})

productRouter.patch("/:productId", async (req, res) =>{
    const productId = req.params.productId
    await Product.findByIdAndUpdate(productId,req.body)
    return res.send(await Product.findById(productId))
})

productRouter.delete("/:productId", async (req, res) =>{
    const productId = req.params.productId
    await Product.findByIdAndDelete(productId)
    return res.send("Produto Deletado!")
})



export default productRouter