// Solution 1

function LongestWord(sen) { 
    // we use the regex match function which searches the string for the
    // pattern and returns an array of strings it finds
    // in our case the pattern we define below returns words with
    // only the characters a through z and 0 through 9, stripping away punctuation
    // e.g. "hello$% ##all" becomes [hello, all]
    var arr = sen.match(/[a-z]+/gi); 
    // the array sort function takes a function as a parameter
    // which is used to compare each element in the array to the
    // next element in the array
    var sorted = arr.sort(function(a, b) {
      return b.length - a.length;
    });
    // this array now contains all the words in the original
    // string but in order from longest to shortest length
    // so we simply return the first element
    return sorted[0];
  }

// Solution 2

// function LongestWord(sen) {

//     sen = sen.trim();
//     sen = sen.replace(/[^a-zA-Z0-9 ]/g, '');   
//     let longest = ""
//     var arr = sen.split(" ").forEach(word => {
//         if(word.length > longest.length) longest = word;
//     })
//     return longest;
//   }

// Solution 3

// function LongestWord(sen) {
//     sen=sen.replace(/[^a-zA-Z ]/ig,'')
//     words = sen.split(" ")
//     LongestWord = words[0]
//     for (i = 0; i<words.length; i ++) {
//         if (words[i].length > LongestWord.length) {
//           LongestWord = words[i]
//         }
//     }
//    return LongestWord
//   }

// Solution 4

// function LongestWord(sen) { 

//     // get individual words
//     var words = sen.match(/\w+/g);
    
//     // set initial longest word
//     var longest = words[0];
 
//     // compare words to longest
//      for (var i=0; i<words.length; i++) {
//          if (words[i].length > longest.length) {
//              longest = words[i];
//          }
//      }  
     
//     return longest;
// }