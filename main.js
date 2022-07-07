const addingNumbers = (a, b) => a + b;
const differenceNumbers = (a, b) => a - b;
const multiplicationNumbers = (a, b) => a * b;
const dividingNumbers = (a, b) => a / b;

const result = (function (a, b, func) {return func(a, b);})(10, 5, multiplicationNumbers);

document.write(`<h1 align="center">Результат: ${result}</h1>`);