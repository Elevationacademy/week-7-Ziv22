const mongoose = require("mongoose")
const path = require("path")
const express = require("express")
const bodyParser = require("body-parser")
const port = 3000
const app = express()


app.use(express.static(path.join(__dirname,"dist")))
app.use(express.static(path.join(__dirname,"node_modules")))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect("mongodb://localhost/myFsDB", { useNewUrlParser: true, useUnifiedTopology: true })

const Schema = mongoose.Schema
const dogSchema = new Schema({
    name:String,
    breed:String
})

const Dog = mongoose.model("Dog",dogSchema)


app.get("/dogs", async (req, res) =>{
    const dogs = await Dog.find({})
    res.send(dogs)
})

app.post("/dogs", async (req, res) =>{
    const dog = new Dog(req.body)
    await dog.save()
    res.send()
})


app.listen(port, function(){
    console.log(`runs on port ${port}`);
})
