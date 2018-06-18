function helloWorld() {
    let message = `Hello webtrainee!`;
    return `>> helloWorld() > ${message}`;
}

// Types
function sum(a: number, b: number) {
    return a + b;
}

console.log(helloWorld());
console.log(sum(1, -4));