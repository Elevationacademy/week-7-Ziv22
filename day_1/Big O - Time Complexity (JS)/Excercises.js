//Excercise 6

// const findDuplicates = function (ages) {
//     let appearances = {}
//     for (let i = 0; i < ages.length; i++) {
//         if(appearances[ages[i]]){
//             appearances[ages[i]]++
//             console.log(`${ages[i]} has ${appearances[ages[i]]} duplicates`)
//         } else { 
//             appearances[ages[i]] = 1
//         }
//     }
// }
// findDuplicates([6,6,6,6,2,3,2,4,4,4,3,5,6,4])

// Exercise 7
// const emps = {
//     "ax01":{_id:"ax01",name:"Ray","age":28,salary:1300},
//     "qs84":{_id:"qs84",name:"Lucius", "age":31, salary:840},
//     "bg33":{_id:"bg33",name:"Taylor", "age":18, salary:2700},
// }

// const findEmployeeSalary = employeeID =>{
//     return emps[employeeID].salary
// }

// console.log(findEmployeeSalary("ax01"))

//Exercise 8

let numbers = [24, 33, 66, 102, 108, 140, 146, 177, 182, 217, 341, 357, 372, 390, 418, 427, 442, 444, 469, 480, 572, 624, 627, 665, 680, 694, 743, 768, 790, 794, 852, 896, 919, 942, 982, 991, 1026, 1055, 1086, 1137, 1141, 1157, 1167, 1271, 1272, 1273, 1301, 1337, 1340, 1344, 1388, 1455, 1465, 1466, 1509, 1555, 1640, 1667, 1667, 1689, 1824, 1897, 1928, 1950, 1987, 2056, 2059, 2070, 2123, 2140, 2198, 2215, 2260, 2304, 2383, 2403, 2433, 2454, 2472, 2480, 2481, 2535, 2543, 2554, 2557, 2580, 2630, 2634, 2671, 2745, 2792, 2839, 2849, 2871, 2873, 2893, 2932, 2962, 2984, 2987]
findIndex = (numbers, num) =>{
    let first = 0
    let last = numbers.length
    let middle = Math.round((last + first) /2)

    while(numbers[middle] != num){
        if(numbers[middle] > num){
            last = middle
        } else{
            first = middle
        }
        middle =  Math.round((last + first) / 2 )
    }
    return `the index is ${middle}`
}

console.log(findIndex(numbers,2630))
