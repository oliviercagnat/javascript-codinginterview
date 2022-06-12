A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

const isPalindrome = value => {
    const REGEX = /[\W_]/g;
    const cleanValue = value.toLowerCase().replace(REGEX, "");
    const reverseValue = cleanValue.split("").reverse().join(""); 
    return cleanValue === reverseValue;
  };
  
  isPalindrome("I am not a palindrome"); // false
  isPalindrome("_Civic_"); // true
  isPalindrome("Race car"); // true 

  const isPalindrome = value => {
    const REGEX = /[\W_]/g;
    const cleanValue = value.toLowerCase().replace(REGEX, "");
    const { length } = cleanValue;
    for (let i = 0; i < Math.floor(length / 2); i++) {
      if (cleanValue[i] !== cleanValue[length - 1 - i]) {
        return false;
      }
    }
    return true;
   };
   
   isPalindrome("I am not a palindrome"); // false
   isPalindrome("_Civic_"); // true
   isPalindrome("Race car"); // true 