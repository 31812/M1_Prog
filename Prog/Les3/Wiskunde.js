const rl = require('readline-sync')
console.log("Wat moet ik uitrekenen?")
console.log("A ik kan de inhoud van een kubus")
console.log("B ik kan de inhoud van een cylinder")
console.log("C ik kan de lange zijde van een driehoek")
console.log("D en het gemiddelde van 7 getallen")
Startanswer = rl.question("A, B, C of D?")

if (Startanswer === "A"){
    Kubus()
} 
if (Startanswer === "B"){
    Cylinder()
}
if (Startanswer === "C"){
    Driehoek()
}
if (Startanswer === "D"){
    Gemiddelde()
}
function Kubus(){
function KubusBereken(){
    console.log(LengteKubus*BreedteKubus*HoogteKubus, "M^3")
}
const rl = require('readline-sync')

LengteKubus = rl.question("Wat is de Lengte van de kubus in meters? ")
BreedteKubus = rl.question("Wat is de Breedte van de kubus in meters? ")
HoogteKubus = rl.question("Wat is de hoogte van de kubus in meters? ")

console.log("De inhoud van de kubus =")
KubusBereken()
}

function Cylinder(){
function CylinderBerekenen(){
    console.log(RadiusCylinder*3.14159265359*LengteCylinder, "L")
}
const rl = require('readline-sync')

RadiusCylinder = rl.question("wat is de r^2 van de Cylinder ")
LengteCylinder = rl.question("wat is de lengte van de Cylinder in meters?")
console.log("De inhoud van de Cylinder =")
CylinderBerekenen()
}

function Driehoek(){
    function DriehoekBerekenen(lengte, hoogte) {
   
    
        const langeZijde = Math.sqrt(Math.pow(lengte, 2) + Math.pow(hoogte, 2));
        return langeZijde;
    }
    
    const lengte = rl.question("Wat is de lengte van hoek A in centimeters?")
    const hoogte = rl.question("Wat is de lengte van hoek B in centimeters?")
    
    const langeZijde = DriehoekBerekenen(lengte, hoogte);
    
    console.log(`Lengte van de lange zijde = ${langeZijde}`);
}
function Gemiddelde(){
    function GemiddeldeBerekenen(getal1, getal2, getal3, getal4, getal5, getal6, getal7) {
        const som = getal1 + getal2 + getal3 + getal4 + getal5 + getal6 + getal7;
        const gemiddelde = som / 7;
        return gemiddelde;
    }
    const getal1 = rl.question("wat is het eerste getal?")
    const getal2 = rl.question("wat is het tweede getal?")
    const getal3 = rl.question("wat is het derde getal?")
    const getal4 = rl.question("wat is het vierde getal?")
    const getal5 = rl.question("wat is het vijfde getal?")
    const getal6 = rl.question("wat is het zesde getal?")
    const getal7 = rl.question("wat is het zevende getal?")
    
    // const gemiddeld = GemiddeldeBerekenen(getal1, getal2, getal3, getal4, getal5, getal6, getal7);
    const gemiddelde = GemiddeldeBerekenen(4, 5, 6, 19, 20, 10, 5);
    
    console.log(`Het gemiddelde van de zeven getallen = ${gemiddelde}`);
}