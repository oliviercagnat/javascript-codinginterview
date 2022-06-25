Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.


Example

There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:

0.400000
0.400000
0.200000

function plusMinus(arr) {
    // Write your code here
    let positiveValues = 0;
    let negativeValues = 0;
    let zeros = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            positiveValues += 1;
        } else if (arr[i] < 0) {
            negativeValues += 1;
        } else {
            zeros += 1;
        }
    }
    
    console.log((positiveValues/ arr.length).toFixed(6) + " ");
    console.log((negativeValues/ arr.length).toFixed(6) + " ");
    console.log((zeros / arr.length).toFixed(6) + " ");
}