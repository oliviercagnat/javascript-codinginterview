Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21

var reverse = function(x) {
    var num = Math.abs(x);
    var flag = 1;
    var answer = 0, reminder = 0;

    if ( x < 0 ) {
        flag = -1;
    }

	while( num > 0 ) {
		reminder = num % 10;
		answer = answer*10 + reminder;
        num = (num - reminder) / 10;
	}

	if ( answer >= Math.pow(2,31) ) {
        return 0;
    }

    return answer*flag;
};

function reversDigits(num)
{
    let rev_num = 0;
    while (num > 0)
    {
        rev_num = rev_num*10 + num%10;
        num = Math.floor(num/10);
    }
    return rev_num;
}

// With no overflow handling
// Function to reverse digits of num
function reverseDigits(num) {
    let rev_num = 0;
    while(num > 0)
    {
        rev_num = rev_num * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return rev_num;
}