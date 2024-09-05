let random = Math.random()
console.log(random)
let a = prompt("enter  first  number")
let c = prompt("enter opration") 
let b= prompt("enter  second  number")

let obj = {
    "+" :"-",
    "*":"+",
    "-":"/",
    "/":"**",
}

if (random > 0.5){
    console.log(`the result is ${a} ${c} ${b} `)
    alert(`the result os ${eval(`${a} ${c} ${b}`)}`)

}

else {
    c = obj[c]
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}

