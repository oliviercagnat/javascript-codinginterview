// Given two integers a and b, return the sum of the two integers without using the operators + and -.

function add(a , b) {
         // for loop will start from 1 and move till the value of second
        // number , first number(a) is incremented in for loop
        for (i = 1; i <= b; i++)
        {
            a++;
        }
        return a;
    }
 
    // first number is 10 and second number is 32 , for loop will start
    var a = add(10, 32);
    