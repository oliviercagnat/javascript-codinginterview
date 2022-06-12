var firstUniqChar = function(s) {

    const letterCounter = {}

  for(const letter of s) {
    if(letterCounter[letter]) letterCounter[letter]++
    else letterCounter[letter] = 1
  }

  for( let i = 0; i < s.length; i++) {
    const stringLetter = s[i]

    if (letterCounter[stringLetter] === 1) {
        return i
    }
  }

  return -1

};