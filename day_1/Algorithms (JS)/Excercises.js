// Exc1 
// const printStars = num =>{
//     let line =""
//     for(let i = 0; i<num; i++){
//         line += "*"
//         console.log(line)
//     }
// }

// printStars(5)

// Exc2 
// const printBackwardsStars = num =>{
//     let line = ""
//     for (let i = 0; i < num; i++) {
//         line += "*"
//     }
//     for(let i = num; i > 0; i--){
//         console.log(line)
//         line = line.slice(1)
//     }
    
// }
// printBackwardsStars(6)

// const printStarSeries = (num, count) =>{
//     for(let i = 0; i < count; i++){
//         printStars(num -1 )
//         printBackwardsStars(num)
//     }
// }

// printStarSeries(5, 5)
// Exc4 
const reverse = function(str){
    let reversed = "";
    for(let i = str.length-1; i >= 0; i-- ){
        reversed += str[i]
    }
    return reversed
  }
  
  console.log(reverse("dog")) //should return "god"
  console.log(reverse("race car")) //should return "rac ecar"
  