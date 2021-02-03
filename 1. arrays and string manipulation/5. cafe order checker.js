function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {

  let lastServedTakeOutOrderIndex = -1
  let lastServedDineInOrderIndex  = -1
  
  // Check if we're serving orders first-come, first-served
  for (let i = 0; i < servedOrders.length; i++) {
    if (servedOrders[i] === takeOutOrders[lastServedTakeOutOrderIndex + 1]) {
      lastServedTakeOutOrderIndex++
    } else if (servedOrders[i] === dineInOrders[lastServedDineInOrderIndex + 1]) {
      lastServedDineInOrderIndex++
    } else {
      // greedy evaluation
      return false
    }
  }

  // check that, in addition to respecting FIFO for each queue, all orders have been served
  if (lastServedTakeOutOrderIndex + 1 === takeOutOrders.length &&
      lastServedDineInOrderIndex + 1 === dineInOrders.length
  ) {
    return true
  }
  
  return false
}

// Time complexity: O(n)
// Space complexity: O(1)