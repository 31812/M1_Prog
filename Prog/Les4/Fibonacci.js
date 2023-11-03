function generateFibonacci(limit) {
    let a = 0;
    let b = 1;

    console.log(a);

    while (b <= limit) {
        console.log(b);
        const next = a + b;
        a = b;
        b = next;
    }
}

const limit = 10000000;
generateFibonacci(limit);