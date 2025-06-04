"use strict"

function solveEquation(a, b, c) {
	const arr = [];
	const discriminant = (b ** 2) - 4 * a * c;

	if (discriminant < 0) {
		return arr;
	}

	if (discriminant === 0) {
		arr.push(-b / (2 * a));
	}

	if (discriminant > 0) {
		arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
		arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	const shortPercent = percent / 100;
	let monthShortPercent = shortPercent / 12;

	if (contribution === amount) {
		return 0;
	}

	if (percent === 0) {
		monthShortPercent = 0;
	}

	const creditBody = amount - contribution;
	const monthPayment = creditBody * (monthShortPercent + (monthShortPercent / (((1 + monthShortPercent) ** countMonths) - 1)));

	return Number((monthPayment * countMonths).toFixed(2));
}