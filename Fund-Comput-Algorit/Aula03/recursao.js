function fatorial(number) {
    if(number < 0) return undefined;
    if (number === 0 || number === 1) return 1;

    return number * fatorial(number -1);
}

console.log(fatorial(0)); // 120