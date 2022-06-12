

function isPowerOfFour( n)
{
  if(n == 0)
    return false;
  while(n != 1)
  {   
   if(n % 4 != 0)
      return false;
    n = n / 4;     
  }
  return true;
}
 
/*Driver program to test above function*/
let test_no = 64;
  if(isPowerOfFour(test_no))
    document.write(test_no+" is a power of 4");
  else
    document.write(test_no+" is not a power of 4");