function isPalindrome(word) {
  // Write your algorithm here
  const wordArray = turnString(word)
  const wordArrayRev = [...wordArray].reverse();
  for (let i = 0; i < wordArray.length; i++) {
    if(wordArray[i] === wordArrayRev[i]) {
      return true
    } else {
      return false
    }
  }  
}

// turn the word variable in to an array of letters //
function turnString(word) {
  return word.split('')
}




/* 
  Add your pseudocode here
  need to turn word variable into an array so the order can be
  flipped and compared against one another. 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome('Collin'));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));
}

module.exports = isPalindrome;
