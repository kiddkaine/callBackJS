const addingNumbers = function (a, b) {
	return a + b;
}

const differenceNumbers = function (a, b) {
	return a - b;
}

const multiplicationNumbers = function (a, b) {
	return a * b;
}

const dividingNumbers = function (a, b) {
	return a / b;
}

let result = (function mainFunc (a, b, func) {
	return func (a, b);
})(10, 5, differenceNumbers);

console.log(result);