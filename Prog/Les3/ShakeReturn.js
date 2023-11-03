function schudWoord(woord) {
    const characters = woord.split('');
    for (let i = characters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [characters[i], characters[j]] = [characters[j], characters[i]];
    }
    const geschudWoord = characters.join('');
    return geschudWoord;
}

var woord1 = schudWoord("Boekenkast");
var woord2 = schudWoord("Appels");
var woord3 = schudWoord("Programmeren");

console.log(woord1);
console.log(woord2);
console.log(woord3);
