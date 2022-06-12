// Given an integer n, return true if it is a power of three. Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n == 3x.

// Recursive approach :

// Check if the number is divisible by 3, if yes then keep checking the same for number/3 recursively. 
// If the number can be reduced to 1, then the number is divisible by 3 else not.

function isPower_of_Three(n)
{
    if (n <= 0)
        return false;
    if (n % 3 == 0)
        return isPower_of_Three(n / 3);
    if (n == 1)
        return true;
    return false;
}
 
     
    let num1 = 243;
    if (isPower_of_Three(num1))
      document.write("Yes");
    else
          document.write("No");
    let num2 = 6;
    if (isPower_of_Three(num2))
      document.write("Yes");
    else
        document.write("</br>No");



        // Time Complexity: O(log3n), where n represents the given integer.
        // Auxiliary Space: O(log3n).
        
        // Approach:
        // The logic is very simple. Any integer number other than power of 3 which divides highest power of 3 value 
        // that integer can hold 3^19 = 1162261467 (Assuming that integers are stored using 32 bits) will give reminder non-zero. 



        function check(n)
        {
             
            /* The maximum power of 3 value that
            integer can hold is 1162261467
            ( 3^19 ) . */
            return 1162261467 % n == 0;
        }
         
            // Driver code
            let n = 9;
            if (check(n))
                document.write("Yes");
            else
                document.write("No");