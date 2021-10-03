/**
 * @param {number[]} nums
 * @return {number}
 */
// Time Complexity O(n) Space Complexity O(1)
var removeDuplicates = function (nums) {
  if (nums.length == 0) {
    return 0;
  }
  var targetIndex = 1;
  var OG = nums[0];
  for (var i = 1; i < nums.length; i++) {
    //rememeber can have multiple elements be the same
    if (nums[i] != OG) {
      OG = nums[i];
      nums[targetIndex] = OG; //just modifying values of the array not the length
      targetIndex++;
    }
  }
  for (var i = targetIndex; i < nums.length; i++) {
    nums[i] = "_";
  }
  return targetIndex;
};
// Time Complexity O(n) Space Complexity 0(n)
var removeDuplicatesEasy = function (nums) {
  arr = [];
  additionalSpaces = 0;
  arr.push(nums[0]);
  for (var i = 1; i < nums.length; i++) {  // O(n) time
    // two pointer if current and next element are the same remove next elemenet
    if (nums[i] === nums[i - 1]) {
      //skip elemenjt
      additionalSpaces++;
    } else {
      arr.push(nums[i]);
    }
  }
  k = arr.length;
  for (var i = 0; i < additionalSpaces; i++) {  // O(n) time
    arr.push("_");
  }
  return k;
};

arr = [1, 1, 2];
arr2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicatesEasy(arr));
console.log(removeDuplicatesEasy(arr2));
