const addingNumbers = (a, b) => a + b;
const differenceNumbers = (a, b) => a - b;
const multiplicationNumbers = (a, b) => a * b;
const dividingNumbers = (a, b) => a / b;

let result = (function (a, b, func) {
	return func (a, b);
})(15, 5, addingNumbers);

console.log(result);