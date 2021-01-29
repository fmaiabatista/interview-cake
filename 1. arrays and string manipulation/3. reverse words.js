// Official answer

function reverseCharacters(arrayOfCharacters, leftIndex, rightIndex) {
  while (leftIndex < rightIndex) {
    const temp = arrayOfCharacters[leftIndex];
    arrayOfCharacters[leftIndex] = arrayOfCharacters[rightIndex];
    arrayOfCharacters[rightIndex] = temp;
    leftIndex++;
    rightIndex--;
  }
}

function reverseWords(message) {
  // Decode the message by reversing the words
  reverseCharacters(message, 0, message.length - 1);

  currentWordStartIndex = 0;
  for (let i = 0; i <= message.length; i++) {
    if (message[i] === " " || i === message.length) {
      reverseCharacters(message, currentWordStartIndex, i - 1);
      currentWordStartIndex = i + 1;
    }
  }
}
