function hasPalindromePermutation(theString) {

  // Check if any permutation of the input is a palindrome
  const charCountList = {} // O(n) space*
  let charsOccurringOddTimesCount = 0
  
  // go over the string and count char occurrences // O(n) time
  for (let i = 0; i < theString.length; i++) {
    const currentChar = theString[i]
    
    // first time a char appears, initialize property
    if (!charCountList[currentChar]) {
      charCountList[currentChar] = 1
    } else {
      // repeated char, increase count
      charCountList[currentChar]++
    }
  }

  // verify that the rule for a palindrome is satisfied:
  // there can be at most only one char occurring odd times
  counts = Object.values(charCountList) // Array [2, 2, 1]
  
  for (let i = 0; i < counts.length; i++) { // O(n) time
    if (counts[i] % 2 !== 0) {
      charsOccurringOddTimesCount++
    }
    
    if (charsOccurringOddTimesCount > 1) {
      return false;
    }
  }
  
  return true;
}

// * We could say O(n) space complexity but given we can consider
// a character set to be limited (ASCII ~128, Unicode ~110.000),
// it is possible to say that the space complexity is constant O(1)

// Official answer

function hasPalindromePermutation(theString) {

  // Track characters we've seen an odd number of times
  const unpairedCharacters = new Set();

  for (let char of theString) {
    if (unpairedCharacters.has(char)) {
      unpairedCharacters.delete(char);
    } else {
      unpairedCharacters.add(char);
    }
  }

  // The string has a palindrome permutation if it
  // has one or zero characters without a pair
  return unpairedCharacters.size <= 1;
}