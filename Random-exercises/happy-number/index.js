Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

Input :  23
Output : Yes
Explanation : 
First Iteration:
22 + 32 = 4 + 9 = 13
Second Iteration:
12 + 32 = 1 + 9 = 10
Third Iteration:
12 + 02 = 1 + 0 = 1
Since we reach 1, 23 is Happy.

function sumDigitSquare(n)
    {
        let sq = 0;
        while (n != 0)
        {
            let digit = n % 10;
            sq += digit * digit;
            n = parseInt(n / 10, 10);
        }
        return sq;
    }
 
    // Returns true if n is Happy
    // number else returns false.
    function isHappy(n)
    {
        // Keep replacing n with
        // sum of squares of digits
        // until we either reach 1
        // or we end up in a cycle
        while (true)
        {
 
            // Number is Happy if
            // we reach 1
            if (n == 1)
                return true;
 
            // Replace n with sum
            // of squares of digits
            n = sumDigitSquare(n);
 
            // Number is not Happy
            // if we reach 4
            if (n == 4)
                return false;
        }
 
    }
     
    let n = 23;
    if (isHappy(n))
        document.write("Yes");
    else
        document.write("No" );