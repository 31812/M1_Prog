function Mock(zin) {
    let result = "";
    for (let i = 0; i < zin.length; i++) {
        if (Math.random() < 0.5) {
            result += zin[i].toUpperCase();
        } else {
            result += zin[i].toLowerCase();
        }
    }
    return result;
}

const inputZin = "Isaiah"
const outputZin = Mock(inputZin);
console.log(outputZin);