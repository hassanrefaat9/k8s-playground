import express from "express";
import os from 'os'

const app = express()
const PORT =  3000

app.get("/",(req,res)=>{
    const message = `Hello world, I am Pod ${os.hostname()} : version 1.1.4`
    res.send(message)
})

app.listen(PORT,()=>{
    console.log(`Web Server running on port ${PORT}`)
    console.log(os.hostname())
})