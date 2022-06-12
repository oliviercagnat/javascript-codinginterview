Given a non-negative integer x, compute and return the square root of x.

Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

 

Example 1:

Input: x = 4
Output: 2
Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.

var mySqrt = function(x) {
    let start = 0, end = x, middle = 0;

    while (start < end) {
        middle = parseInt((start + end)/2);
        if (middle * middle === x) {
            return middle;
        }
        if (x < middle * middle) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }

    return x < end * end ? end - 1 : end;
};