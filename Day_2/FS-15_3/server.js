const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const bodyParser = require("body-parser")
const port = 3000
const app = express()


app.use(express.static(path.join(__dirname,"dist")))
app.use(express.static(path.join(__dirname,"node_modules")))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect("mongodb://localhost/myFsDB", { useNewUrlParser: true, useUnifiedTopology: true })

const Schema = mongoose.Schema
const horseSchema = Schema({
    name:String
})
const Horse = mongoose.model("Horse" , horseSchema)


app.get("/horses", async (req,res) =>{
    const horses = await Horse.find({})
    res.send(horses)
})
app.post("/horses", async (req,res) =>{
    const newHorse = await new Horse(req.body)
    const saved = newHorse.save()
    res.send(saved)
})


app.listen(port,()=>{
    console.log(`listening on ${port}`);
})
