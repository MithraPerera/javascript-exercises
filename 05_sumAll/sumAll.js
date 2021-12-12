const sumAll = function (num1, num2) {
	if (
		num1 < 0 ||
		num2 < 0 ||
		typeof num1 != "number" ||
		typeof num2 != "number"
	) {
		return "ERROR";
	}
	let startNum = num1;
	let endNum = num2;
	if (num1 > num2) {
		startNum = num2;
		endNum = num1;
	}
	let sum = 0;
	for (let index = startNum; index <= endNum; index++) {
		sum += index;
	}
	return sum;
};

// Do not edit below this line
module.exports = sumAll;
