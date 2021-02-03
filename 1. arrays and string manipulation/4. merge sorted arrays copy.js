function mergeArrays(myArray, alicesArray) {
  // Combine the sorted arrays into one large sorted array
  // return [...myArray, ...alicesArray].sort(); // this has O(n lg(n)) time complexity
  
  const biggerArray = myArray.length >= alicesArray.length ? myArray : alicesArray
  const smallerArray = myArray.length < alicesArray.length ? myArray : alicesArray
  const mergedArray = []
  let lastAddedItemIndex = -1

  // this loop will give O(n) time complexity
  for (let i =  0; i < biggerArray.length; i++) {
    // if small array exhausted
    // or if biggerArray item is lesser
    // add biggerArray item to mergedArray
    if ((lastAddedItemIndex + 1) === smallerArray.length ||
        biggerArray[i] < smallerArray[lastAddedItemIndex + 1]
    ) {
      mergedArray.push(biggerArray[i])
      
      // if we're in the last element of the bigger array and
      // it's the same size of the smaller array, we need to
      // make sure we include the last element of the smaller
      // array as well
      if (biggerArray.length === smallerArray.length &&
          i === (biggerArray.length - 1)
      ) {
        mergedArray.push(smallerArray[lastAddedItemIndex + 1])
        lastAddedItemIndex++ // for the sake of consistency
      }
    } else {
      // add smallerArray item to mergedArray
      // increase pointer index of last added item
      // stay at the same item in biggerArray
      mergedArray.push(smallerArray[lastAddedItemIndex + 1])
      lastAddedItemIndex++
      i--
    }
  }
  
  return mergedArray
}