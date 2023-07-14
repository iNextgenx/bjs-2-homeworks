function getArrayParams(...arr) {
	if (arr.length == 0) {
		console.log("Функция должна иметь хотя бы 1 параметр!")
		return 0;
	}
	const min = Math.min(...arr);
	const max = Math.max(...arr);
	const sum = [...arr].reduce(function(a, b) {
		return a + b;
	});
	const avg = Number((sum / arr.length).toFixed(2));
	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	if (arr.length == 0) {
		console.log("Функция должна иметь хотя бы 1 параметр!")
		return 0;
	}
	const sum = [...arr].reduce(function(a, b) {
		return a + b;
	});
	return sum;
}

function differenceMaxMinWorker(...arr) {
	if (arr.length == 0) {
		console.log("Функция должна иметь хотя бы 1 параметр!")
		return 0;
	}
	const diff = Math.max(...arr) - Math.min(...arr);
	return diff;
}

function differenceEvenOddWorker(...arr) {
	if (arr.length == 0) {
		console.log("Функция должна иметь хотя бы 1 параметр!")
		return 0;
	}
	let sumEvenElement = 0;
	let sumOddElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement = sumEvenElement + arr[i];
		} else sumOddElement = sumOddElement + arr[i];
	}
	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	if (arr.length == 0) {
		console.log("Функция должна иметь хотя бы 1 параметр!")
		return 0;
	}
	sumEvenElement = 0;
	countEvenElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			sumEvenElement = sumEvenElement + arr[i];
			countEvenElement++;
		}
	}
	return sumEvenElement / countEvenElement
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		let result = func(...arrOfArr[i]);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}
	return maxWorkerResult;
}