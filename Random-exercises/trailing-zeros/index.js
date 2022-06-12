Given an integer n, return the number of trailing zeroes in n!.

Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.

Example 1:

Input: n = 3
Output: 0
Explanation: 3! = 6, no trailing zero.
Example 2:

Input: n = 5
Output: 1
Explanation: 5! = 120, one trailing zero.
Example 3:

Input: n = 0
Output: 0


function findTrailingZeros(n)
{
 
    if(n < 0) //Negative Number Edge Case
      return -1;
     
    // Initialize result
    let count = 0;
 
    // Keep dividing n by powers of
    // 5 and update count
    for (let i = 5; Math.floor(n / i) >= 1; i *= 5)
        count += Math.floor(n / i);
 
    return count;
}
 
// Driver Code
    let n = 100;
    document.write("Count of trailing 0s in " + 100
        + "! is " + findTrailingZeros(n));
 
        function trailing_zeros_factorial(n) {
            var result = 0;
            for (var i = 5; i <= n; i += 5) {
                var num = i;
                while (num % 5 === 0) {
                    num /= 5;
                    result++;
                }
            }
            return result;
        }