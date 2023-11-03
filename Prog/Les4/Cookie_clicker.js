const readlineSync = require('readline-sync')

let score = 0
while(score < 100){
    let answer = readlineSync.question("Wil je klikken?")

if (answer == "nee"){
    console.log("Game Over")
    console.log("Score =",score)
    break
}
else{
    score++
    console.log("Score =",score)

}
}
