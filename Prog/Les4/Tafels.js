let i = 1;

while (i <= 50) {
    let j = 1;

    while (j <= 50) {
        const result = i * j;
        console.log(`${j} * ${i} = ${result}`);
        j++;
    }

    i++;
}

