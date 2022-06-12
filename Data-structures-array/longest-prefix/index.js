Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

function prefix(words){
    // check border cases size 1 array and empty first word)
    if (!words[0] || words.length ==  1) return words[0] || "";
    let i = 0;
    // while all words have the same character at position i, increment i
    while(words[0][i] && words.every(w => w[i] === words[0][i]))
      i++;
    
    // prefix is the substring from the beginning to the last successfully checked i
    return words[0].substr(0, i);
  }
  
  console.log(1, prefix([]));
  console.log(2, prefix([""]));
  console.log(3, prefix(["abc"]));
  console.log(4, prefix(["abcdefgh", "abcde", "abe"]));
  console.log(5, prefix(["abc", "abc", "abc"]));
  console.log(6, prefix(["abc", "abcde", "xyz"]));

  var longestCommonPrefix = function(strs) {
    let prefix = strs.reduce((acc, str) => str.length < acc.length ? str : acc);
    
    for (let str of strs) {
        while (str.slice(0, prefix.length) != prefix) {
            prefix = prefix.slice(0, -1);
        }
    }
    return prefix;
};

let res = longestCommonPrefix(["flower","flow","flight"]);

console.log(res);

var longestCommonPrefix = function (strs) {
    // Return early on empty input
    if (!strs.length) return '';

    // Loop through the letters of the first string
    for (let i = 0; i <= strs[0].length; i++) {
        // Loop through the other strings
        for (let j = 1; j < strs.length; j++) {
            // Check if this character is also present in the same position of each string
            if (strs[0][i] !== strs[j][i]) {
                // If not, return the string up to and including the previous character
                return strs[0].slice(0, i);
            }
        }
    }

    return strs[0];
};

var longestCommonPrefix = function (strs) {
    // Return early on empty input
    if (!strs.length) return '';

    // Loop through the letters of the first word
    for (let i = 0; i <= strs[0].length; i++) {
        // Check if this character is present in the same position of every string
        if (!strs.every((string) => string[i] === strs[0][i])) {
            // If not, return the string up to and including the previous character
            return strs[0].slice(0, i);
        }
    }

    return strs[0];
};