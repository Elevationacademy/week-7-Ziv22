class UniqueArray{
    constructor(){
        this.existanceList = {}
        this.length = 0
    }

    exists(item){
        return this.existanceList[item] ? true : false
    }

    add(item){
        JSON.stringify(item)
        if(!this.existanceList[item]){
            this.existanceList[item] = true
            this.length++
        }
    }

    showAll(){
        let toShow = ""
        for(let i =0; i < this.length; i++){
            toShow += `${this[i]},`
        }
        toShow = toShow.substring(0 ,toShow.length -1)
        console.log(`[${toShow}]`)
    }

    get(index){
        return this[index] ? this[index] : -1 
    }
}

const uniqueStuff = new UniqueArray()
// uniqueStuff.add("toy")
// uniqueStuff.showAll() //prints ["toy"]
// uniqueStuff.add("toy")
// uniqueStuff.showAll() //prints ["toy"]
// uniqueStuff.exists("toy") //returns true
// uniqueStuff.add("poster")
// uniqueStuff.add("poster")
// uniqueStuff.add("hydrogen")
// console.log(uniqueStuff.get(34))
// console.log(uniqueStuff.get(2)) //prints "hydrogen"
// console.log(uniqueStuff) //prints "hydrogen"
const obj = {bla:"bla"}
uniqueStuff.add(obj)
const func = ziv = function(){console.log(ziv)}
uniqueStuff.add(func)
uniqueStuff.add(func)
// console.log(uniqueStuff)
// uniqueStuff.add(func)
// console.log(uniqueStuff)