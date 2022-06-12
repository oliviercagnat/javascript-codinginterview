Question: Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

Example 1:

Input: n = 00000000000000000000000000001011

Output: 3

Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.

var hammingWeight = function(n) {
    var count = 0;
    var mask = 1;
    for (i=0; i<32; i++) {
        if ((mask & n) != 0 ) {            
            count++;
        }
        mask <<= 1;
    }
    return count;
};

const hammingWeight = value => [...value].filter(f => f == 1).length;

var hammingWeight = function(n) {
    let count = 0;
    while (n !== 0) {
      n = n & (n - 1);
      count++;
    }
  
    return count;
  };