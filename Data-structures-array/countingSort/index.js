Challenge
Given a list of integers, count and return the number of times each value appears as an array of integers.

Function Description

Complete the countingSort function in the editor below.

countingSort has the following parameter(s):

arr[n]: an array of integers
Returns

int[100]: a frequency array
Input Format

The first line contains an integer , the number of items in .
Each of the next  lines contains an integer  where .

Constraints



Sample Input

100
63 25 73 1 98 73 56 84 86 57 16 83 8 25 81 56 9 53 98 67 99 12 83 89 80 91 39 86 76 85 74 39 25 90 59 10 94 32 44 3 89 30 27 79 46 96 27 32 18 21 92 69 81 40 40 34 68 78 24 87 42 69 23 41 78 22 6 90 99 89 50 30 20 1 43 3 70 95 33 46 44 9 69 48 33 60 65 16 82 67 61 32 21 79 75 75 13 87 70 33  
Sample Output

0 2 0 2 0 0 1 0 1 2 1 0 1 1 0 0 2 0 1 0 1 2 1 1 1 3 0 2 0 0 2 0 3 3 1 0 0 0 0 2 2 1 1 1 2 0 2 0 1 0 1 0 0 1 0 0 2 1 0 1 1 1 0 1 0 1 0 2 1 3 2 0 0 2 1 2 1 0 2 2 1 2 1 2 1 1 2 2 0 3 2 1 1 0 1 1 1 0 2 2 
Explanation

Each of the resulting values  represents the number of times  appeared in .


function countingSort(arr){
    var helper = []; // This helper will note how many times each number appeared in the arr
                     // Since JS arrary is an object and elements are not continuously stored, helper's Space Complexity minor that n
    for(var i = 0; i<arr.length; i++){
      if(!helper[arr[i]]){
          helper[arr[i]] = 1;
      }else{
          helper[arr[i]] += 1;
      }
    }
  
    var newArr = []; 
    for(i in helper){
      while(helper[i]>0){
          newArr.push(parseInt(i));
          helper[i]--;
      }
    }
    return newArr; 
  }
  
  var arr = [5,4,3,2,1,0];
  console.log(countingSort(arr)); // [0, 1, 2, 3, 4, 5]

function countingSort(arr) {
    var helper = new Array(100).fill(0);
    for(var i = 0; i<arr.length; i++){
       helper[arr[i]] += 1;
    }
  
  return helper;
  
  }