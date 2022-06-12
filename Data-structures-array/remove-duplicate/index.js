// Keep at least 2

var removeDuplicates = function(nums) {
    let k = 2;
    let n = nums.length;

    if(n <= 2) {
        return n;
    }

    for(let i = 2; i < n; i++) {
        if(nums[i] != nums[k - 2] || nums[i] != nums[k - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};


// Keep 1

var removeDuplicates = function(nums) {
    const length = nums.length;

    if( length <= 1 ){
        return length;
    }

    let i = 0;

    for(let j = 1; j < length; j++){
        if( nums[i] != nums[j] ){
            i++;
            nums[i] = nums[j];
        }
    }

    return i + 1;
};