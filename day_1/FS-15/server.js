const   express   = require("express"), 
        app = express(),
        mongoose = require("mongoose"), 
        bodyParser = require("body-parser"), 
        path = require("path"), 
        port     = 3000

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect("mongodb://localhost/myFsDB", { useNewUrlParser: true, useUnifiedTopology: true })

const Schema = mongoose.Schema

const blaSchema    = new Schema({
    something : String,
    abitherThing: String
})

const Bla = mongoose.model("Bla" , blaSchema)

app.post("/something", async (req,res) =>{
    const newBla = await new Bla(req.body)
    await newBla.save()
    res.send()
})

app.get("/something", async (req,res) =>{
    res.send(await Bla.find({}))
})

module.exports = Bla
app.listen(port, function(){
    console.log("Runing on port " + port);
})