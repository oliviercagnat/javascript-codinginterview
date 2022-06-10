Given a column title as appears in an Excel sheet, return its corresponding column number.

column  column number
  A  ->  1
  B  ->  2
  C  ->  3
  ...
  Z  ->  26
  AA ->  27
  AB ->  28 

Input: A
Output: 1
A is the first column so the output is 1.

Input: AA
Output: 27
The columns are in order A, B, ..., Y, Z, AA ..
So, there are 26 columns after which AA comes.

function titleToNumber(s)
{
    // This process is similar to
    // binary-to-decimal conversion
    let result = 0;
    for (let i = 0; i < s.length; i++)
    {
        result *= 26;
        result += s[i].charCodeAt(0) - 'A'.charCodeAt(0) + 1;
    }
    return result;
}