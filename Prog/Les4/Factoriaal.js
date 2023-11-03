function factoriaal(n) {
    if (n === 0 || n === 1) {
        return 1; 
    } else {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}

let result = factoriaal(8);
console.log(result);