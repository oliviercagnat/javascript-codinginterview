median([10, 15, 16, 9, 1, 11, 22]); //11
median([99, 45, 26, 7, 11, 122, 22]); //26

const median = arr => {
    let middle = Math.floor(arr.length / 2);
      arr = [...arr].sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? arr[middle] : (arr[middle - 1] + arr[middle]) / 2;
  };