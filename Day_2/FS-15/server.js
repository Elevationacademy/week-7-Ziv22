const express        = require("express"),
      mongoose       = require("mongoose"),
      path           = require("path"),
      bodyParser     = require("body-parser"),
      port           = 3000,
      app           = express()

app.use(express.static(path.join(__dirname,"dist")))
app.use(express.static(path.join(__dirname,"node_modules")))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

mongoose.connect("mongodb://localhost/myFsDB", { useNewUrlParser: true, useUnifiedTopology: true })

const Schema = mongoose.Schema

const carsSchema = new Schema({
    model: String
})

const Car = mongoose.model("Car",carsSchema)



app.get("/cars" , async (req,res)=>{
    const cars = await Car.find({})
    res.send(cars)
})
app.post("/cars" , async (req,res)=>{
    const car = await new Car(req.body)
    await car.save()
    res.send(car)
})

app.listen(port, function(){
    console.log(`up and runng on port ${port}`);
})
      