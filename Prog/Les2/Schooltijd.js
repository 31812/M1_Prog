let huidigeTijd = new Date();
let openingstijd = 9; 
let sluitingstijd = 16; 

if (huidigeTijd.getHours() >= openingstijd && huidigeTijd.getHours() < sluitingstijd) {
  console.log("Ik moet op school zijn.");
} else {
  console.log("Ik hoef niet op school te zijn.");
}