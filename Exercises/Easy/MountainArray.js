var validMountainArray = function (arr) {
  if (arr.length <= 2) {  // O(1)
    return false;
  } else {
    //check that we have both increasing and decreasing
    i = 0;
    increasingSet = false;
    decreasingSet = false;
    while (i < arr.length - 1 && arr[i] < arr[i + 1]) {  //O(n)
      i++;
      increasingSet = true;
    }
    while (increasingSet && i < arr.length - 1 && arr[i] > arr[i + 1]) {  //O(n)
      i++;
      decreasingSet = true;
    }
    return increasingSet && decreasingSet && i == arr.length - 1;
  }
};
// O(n) is O(n)
console.log(validMountainArray([2,1]))
console.log(validMountainArray([3,5,5]))
console.log(validMountainArray([0,3,2,1]))
