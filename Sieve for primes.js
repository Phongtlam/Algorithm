// Create a list of consecutive integers from 2 through n: (2, 3, 4, ..., n).
// Initially, let p equal 2, the smallest prime number.
// Enumerate the multiples of p by counting to n from 2p in increments of p, and mark them in the list (these will be 2p, 3p, 4p, ...; the p itself should not be marked).
// Find the first number greater than p in the list that is not marked. If there was no such number, stop. Otherwise, let p now equal this new number (which is the next prime), and repeat from step 3.
// When the algorithm terminates, the numbers remaining not marked in the list are all the primes below n.

// Sieve for all primes

function sieve(n) {
  let aux = [];
	let primes = [];
	// initialize aux array from 2 - n - 1
  for (let i = 2; i < n; i++) {
    aux.push(i);
	}
	// loop and sieve
  for (let i = 0; i < aux.length; i++) {
		let currentNum = aux[i];
		// if it is not false, this is the next prime
    if (currentNum !== false) {
			primes.push(aux[i]);
			// loop to sieve by a factor of prime
      for (let j = i + currentNum; j < aux.length; j += currentNum) {
        aux[j] = false;
      }
    }
  }
  return primes;
}

// Can we improve? 
// We notice that a few operations can be improved drastically

function sieve(n) {
  let aux = [];
	let primes = [];
	// instead of putting raw numbers and having to iterate through the entire list, we can just initilize with all true
	// assuming everything is prime at the start
  for (let i = 0; i < n; i++) {
    aux.push(true);
  }
	// starting from 2(first prime) we only need to iterate up to square root of n
  for (let i = 2; i < Math.sqrt(n); i++) {
		// if the aux array indx is true, this is the prime, we then can loop to sieve
    if (aux[i]) {
      // multiple of is have already been cleaned up in previous loops
			// we can start at i * i instead of i for better performance
      for (let j = i * i; j < n; j += i) {
        aux[j] = false;
      }
    }
	}
	// all true values in the aux now are primes, loop and collect
  for (let i = 2; i < aux.length; i++) {
    if (aux[i]) {
      primes.push(i)
    }
  }
  return primes;
}
