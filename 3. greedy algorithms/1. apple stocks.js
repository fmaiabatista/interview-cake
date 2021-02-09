function getMaxProfit(stockPrices) {

  // Calculate the max profit
  // time complexity O(n), space complexity O(1)
  
  if (stockPrices.length < 2) {
    throw new Error('Getting a profit requires at least 2 prices')
  }

  let minPrice = stockPrices[0]
  let maxProfit = stockPrices[1] - stockPrices[0]

  for (let i = 1; i < stockPrices.length; i++) {
    const currentPrice = stockPrices[i]

    maxProfit = Math.max(maxProfit, currentPrice - minPrice)
    minPrice = Math.min(minPrice, currentPrice)
  }

  return maxProfit;
}

// greedy algorithm
// works by holding the best value at each pass (best answer so far)
// and asking if it can be improved when a related value is updated