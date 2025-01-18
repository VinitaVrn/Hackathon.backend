import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose"
import { userRouter } from "./router/user.route.js";
import { foodRouter } from "./router/food.route.js";
const app=express();

// app.use(cors())
app.use(express.json())
app.use("/users",userRouter)
app.use("/foods",foodRouter)

app.listen(9000,async()=>{
    await mongoose.connect("mongodb+srv://vinitaveerani:6vMLzhfGOwHaRjqg@foodcount.4dzb2.mongodb.net/?retryWrites=true&w=majority&appName=Foodcount");
    console.log("Database connected");
    console.log("server started at http://localhost:9000")
})