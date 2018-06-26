// We have to keep track of the absolute min for each section
// Whenever the element stops increasing, we know we have reached the absolute max of that section, add the diff into maxSum and now the new min gets reset

var maxProfit = function(prices) {
    if (prices.length === 0) return 0;
    let min = prices[0];
    let max = prices[0];
    let maxSum = 0;
    for (let i = 1; i < prices.length; i++) {
      if (prices[i] < max) {
        maxSum += max - min;
        min = prices[i];
      }
      max = prices[i];
    }
    return maxSum += max - min;
};

// There is a slightly simpler solution, but time complexity is the same. This relies on the fact that the total maxSum will be equal to the sum of all peaks n valleys
// However this is more of a 'trick' rather than a legit solution in my opinion (feel free to disregard my comment or this solution)

var maxProfit = function(prices) {
	if (prices.length === 0) return 0;
	let maxSum = 0;
	for (let i = 1; i < prices.length; i++) {
		if (prices[i] > prices[i - 1]) {
				maxSum += prices[i] - prices[i - 1]
		}
	}
	return maxSum;
};