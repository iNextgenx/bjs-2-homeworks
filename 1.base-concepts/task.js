"use strict"

function solveEquation(a, b, c) {

	let arr = [];
	let d = Math.pow(b, 2) - 4 * a * c;

	if (d < 0) {
		return arr;

	} else if (d === 0) {
		let answer = -b / (2 * a);
		arr.push(answer);
		return arr;

	} else if (d > 0) {
		let answer1 = (-b + Math.sqrt(d)) / (2 * a);
		let answer2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(answer1);
		arr.push(answer2);
		return arr;
	}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	//Суть проверки в том, что если какое-то из значений функции нельзя привести в числовому типу вернет false.
	if (Number.isNaN(Number(percent)) || Number.isNaN(Number(contribution)) || Number.isNaN(Number(amount)) || Number.isNaN(Number(countMonths))) {
		return false;
	}

	//Также значения функции по логике задачи должны быть больше или равны 0
	if (percent >= 0 && contribution >= 0 && amount >= 0 && countMonths >= 0) {
		percent = Number(percent);
		contribution = Number(contribution);
		amount = Number(amount);
		countMonths = Number(countMonths);
		let percent01 = percent / 100 / 12;
		let payment = (amount - contribution) * (percent01 + (percent01 / (((1 + percent01) ** countMonths) - 1)));
		return Number((payment * countMonths).toFixed(2));
	} else
		console.log("Значения функции должны быть больше или равны нулю!")
	return false;
}