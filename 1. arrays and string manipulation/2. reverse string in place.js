function reverse(arrayOfChars) {

  // Reverse the input array of characters in place
  if (!arrayOfChars.length) {
    return []
  } else if (arrayOfChars.length === 1) {
    return arrayOfChars
  } else {
    let aux = null
    
    for (let i = 0; i < Math.floor(arrayOfChars.length / 2); i++) {
      aux = arrayOfChars[i]
      arrayOfChars[i] = arrayOfChars[arrayOfChars.length - 1 - i]
      arrayOfChars[arrayOfChars.length - 1 - i] = aux
    }  
  }
}

// Time complexity
// O(n) (O(n/2) should have the constant ignored)

// Space complexity
// O(1) (because we store a constant number of new variables (in this case, 1) regardless of the size of the input)

// Official answer

function reverse(arrayOfChars) {

  let leftIndex = 0;
  let rightIndex = arrayOfChars.length - 1;

  while (leftIndex < rightIndex) {

    // Swap characters
    const temp = arrayOfChars[leftIndex];
    arrayOfChars[leftIndex] = arrayOfChars[rightIndex];
    arrayOfChars[rightIndex] = temp;

    // Move towards middle
    leftIndex++;
    rightIndex--;
  }
}
