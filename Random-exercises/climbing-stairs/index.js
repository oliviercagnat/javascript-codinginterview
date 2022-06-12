// A Javascript program to count
// number of ways to reach
// n'th stair when a person
// can climb 1, 2, ..m stairs
// at a time.
 
// A simple recursive
// function to find n'th
// fibonacci number
function fib(n)
{
if (n <= 1)
    return n;
return fib(n - 1) +
       fib(n - 2);
}
 
// Returns number of
// ways to reach s'th stair
function countWays(s)
{
    return fib(s + 1);
}
 
// Driver Code
let s = 4;
document.write("Number of ways = " + countWays(s));



// A Javascript program to count
// number of ways to reach
// n'th stair when a person
// can climb either 1 or 2
// stairs at a time

// A recursive function
// used by countWays
function countWaysUtil(n, m)
{
	if (n <= 1)
		return n;
	let res = 0;
	for (let i = 1; i <= m &&
				i <= n; i++)
		res += countWaysUtil(n - i, m);
	return res;
}

// Returns number of ways
// to reach s'th stair
function countWays(s, m)
{
	return countWaysUtil(s + 1, m);
}

// Driver Code
let s = 4;
let m = 2;
document.write("Number of ways = " + countWays(s, m));


// JavaScript program to count number of
// ways to reach Nth stair
 
 
// A simple recursive program to
// find N'th fibonacci number
function fib(n, dp)
{
    if (n <= 1)
        return dp[n] = 1;
   
    if(dp[n] != -1 ){
        return dp[n] ;
    }
    dp[n] = fib(n - 1, dp) + fib(n - 2, dp);
    return  dp[n] ;
}
 
// Returns number of ways to
// reach s'th stair
function countWays(n)
{
    let dp = new Array(n+1).fill(-1) ;
    fib(n, dp) ;
    return dp[n] ;
}
 
// Driver Code
 
let n = 4;
 
document.write("Number of ways = " + countWays(n));