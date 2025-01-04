import express from "express"
import dotenv from "dotenv"
import { router } from "./routers/router.js"

dotenv.config({path:"./config.env"})

let app = express()

let port = process.env.PORT || 3077

app.use(express.json())

app.use(router)

app.listen(port,()=>{
    console.log(`server is running on port ${port} | http://localhost:${port}`)
})