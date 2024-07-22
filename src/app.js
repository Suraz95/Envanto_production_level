import express, { urlencoded } from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
const app = express()
app.use(express.json({limit:"16kb"}))
app.use(cors({
    origin: process.env.Cross_origin,
    credentials:true
}))
app.use(cookieParser())
app.use(express.urlencoded({ extended: "true", limit: "16kb" }))
app.use(express.static("public"))
export {app}