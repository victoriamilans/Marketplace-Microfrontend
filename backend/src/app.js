import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import productRouter from "./controller/productsController.js";

const app = express();
const port = process.env.PORT || 3001

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use("/products", productRouter)

app.get("/", (req, res) =>{
    res.send("Rodando...")
})

app.listen(port, async () =>{
    console.log("Server running!")
})