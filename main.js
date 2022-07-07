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

function mainFunc (a, b, func) {
	return func (a, b);
}

let result = mainFunc (10, 5, addingNumbers);

alert(result);