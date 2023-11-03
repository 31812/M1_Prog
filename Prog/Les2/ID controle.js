const readlineSync = require('readline-sync')
var Leeftijd = readlineSync.question("Hoe oud ben jij?")
if (Leeftijd <= 16){
    console.log("nee jij bent te jong")
}else if (Leeftijd > 16){
    console.log("jij bent oud genoeg kom verder")
}