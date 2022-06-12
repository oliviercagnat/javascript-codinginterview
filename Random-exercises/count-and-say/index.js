The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

countAndSay(1) = "1"
countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
To determine how you "say" a digit string, split it into the minimal number of substrings such that each substring contains exactly one unique digit. Then for each substring, say the number of digits, then say the digit. Finally, concatenate every said digit.

For example, the saying and conversion for digit string "3322251":


Given a positive integer n, return the nth term of the count-and-say sequence.

 

Example 1:

Input: n = 1
Output: "1"
Explanation: This is the base case.
Example 2:

Input: n = 4
Output: "1211"
Explanation:
countAndSay(1) = "1"
countAndSay(2) = say "1" = one 1 = "11"
countAndSay(3) = say "11" = two 1's = "21"
countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"
 

Constraints:

1 <= n <= 30


<script>

// Javascript program to find n'th
// term in look and say sequence
	
// Returns n'th term in
// look-and-say sequence
function countnndSay(n)
{
	
	// Base cases
	if (n == 1)	
		return "1";
	if (n == 2)	
		return "11";

	// Find n'th term by generating
	// all terms from 3 to n-1.
	// Every term is generated
	// using previous term
	
	// Initialize previous term
	let str = "11";
	
	for(let i = 3; i <= n; i++)
	{
		
		// In below for loop, previous
		// character is processed in
		// current iteration. That is
		// why a dummy character is
		// added to make sure that loop
		// runs one extra iteration.
		str += '$';
		let len = str.length;
		
		// Initialize count
		// of matching chars
		let cnt = 1;
		
		// Initialize i'th
		// term in series
		let tmp = "";
		let arr = str.split("");
		
		// Process previous term
		// to find the next term
		for(let j = 1; j < len; j++)
		{
			
			// If current character
			// doesn't match
			if (arr[j] != arr[j - 1])
			{
				
				// Append count of
				// str[j-1] to temp
				tmp += cnt + 0;

				// Append str[j-1]
				tmp += arr[j - 1];

				// Reset count
				cnt = 1;
			}

			// If matches, then increment
			// count of matching characters
			else cnt++;
		}

		// Update str
		str = tmp;
	}
	return str;
}

// Driver Code
let N = 3;

document.write(countnndSay(N));
