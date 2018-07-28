// get a list of prime number from 0 - n

function getPrimes(n) {
	let result = [];
	for (let i = 2; i < n; i++) {
		if (isPrime1(i)) {
			result.push(i)
		}
	}
	return result;
}

// Naive method, check for every possible solution
function isPrime(n) {
	for (let i = 2; i < n; i++) {
		if (n % i === 0) {
			return false;
		}
	}
	return true;
}

// Better way, we can actually skip some numbers
function isPrime1(n) {
	if (n === 2 || n === 3) return true;
	if (n % 2 === 0 || n % 3 === 0) return false;
	// only need to check up to square root of n
	let sqrt = Math.sqrt(n);
	for (let i = 5; i < sqrt; i+=6) {
		if (n % i === 0) return false;
	}
	return true;
}

console.log(getPrimes(20))