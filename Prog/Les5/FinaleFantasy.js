let PlayerName = "Lua";
let HP = 20;
let GoblinHP = 30;
let GoblinAttack = "3/5";
let Playermin = 5;
let Playermax = 8;
let GoblinMinDamage = 3;
let GoblinMaxDamage = 5;

const readlineSync = require('readline-sync');

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateGoblinRandomDamage() {
    return generateRandomNumber(GoblinMinDamage, GoblinMaxDamage);
}

function Fightscreen() {
    console.log("Hit");
    console.log("Check");
    console.log("Block");
    return readlineSync.question("Kies een van de keuzes ").toLowerCase();
}

console.log(PlayerName, "loopt door het bos");
console.log(PlayerName, "komt een goblin met een dolk tegen");
let Fightanswer = readlineSync.question("Wil je vechten of wegrennen? ").toLowerCase();

if (Fightanswer === "vechten") {
    console.log("Lua trekt zijn zwaard en staat klaar om te vechten");
    console.log("Je hebt", HP, "HP");
    Fightscreen();
} else if (Fightanswer === "wegrennen") {
    console.log("Je probeert weg te rennen maar struikelt over een stronk");
    console.log("De goblin heeft je gestoken met zijn dolk");
    HP -= 4;
    console.log("-4 HP");
    console.log("Je hebt", HP, "HP");
    Fightscreen();
} else {
    while (Fightanswer !== "vechten" && Fightanswer !== "wegrennen") {
        console.log("Ongeldige invoer");
        Fightanswer = readlineSync.question("Wil je vechten of wegrennen? ").toLowerCase();
    }
}

while (GoblinHP > 0 && HP > 0) {
    let FightscreenAnswer = Fightscreen();

    if (FightscreenAnswer === "check") {
        console.log("je checkt de Goblin zijn stats");
        console.log("Attack:", GoblinAttack);
        console.log("HP:", GoblinHP);
    } else if (FightscreenAnswer === "hit") {
        console.log("Je valt de Goblin aan");
        let randomPlayerDamage = generateRandomNumber(Playermin, Playermax);
        let randomGoblinDamage = generateGoblinRandomDamage();
        console.log(`Je doet ${randomPlayerDamage} schade aan de Goblin.`);
        console.log(`De Goblin doet ${randomGoblinDamage} schade aan jou.`);
        HP -= randomGoblinDamage;
        GoblinHP -= randomPlayerDamage;
        console.log(`Je hebt nu ${HP} HP.`);
    } else if (FightscreenAnswer === "block") {
        console.log("Je zet je zwaard in een defensieve positie");
        console.log("De goblin valt aan met zijn dolk");
        let randomGoblinDamage = generateGoblinRandomDamage();
        console.log(`De Goblin doet ${randomGoblinDamage} schade aan jou.`);
        HP -= randomGoblinDamage - 3;
        console.log(`Je hebt nu ${HP} HP.`);
    } else {
        console.log("Ongeldige invoer");
    }
}

if (HP <= 0 && GoblinHP <= 0){
    console.log("GAME OVER")
    console.log("jullie hebben het beide niet overleeft")
} else if (HP <= 0){
    console.log("GAME OVER")
    console.log("get good nerd")
} else if (GoblinHP <= 0){
    console.log("Goed gedaan de Goblin is verslagen")
}