Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function minMax(arr)
    {
        // Initialize the min_value
        // and max_value to 0
        let min_value = 0;
        let max_value = 0;
        let n = arr.length;
        
        // Sort array before calculating
        // min and max value
        arr.sort(function(a,b){return a-b;});
                            
        for (let i = 0, j = n - 1;
             i < n - 1; i++, j--)
        {
            // All elements except
            // rightmost will be added
            min_value += arr[i];
            
            // All elements except
            // leftmost will be added
            max_value += arr[j];
        }
         
        // Output: min_value and max_value
        console.log(
            min_value + " "
            + max_value);
    }