var thirdMax = function (nums) {
  //little trick to get the right solution
  nums= new Set(nums)  //O(n)
  nums= Array.from(nums) //O(n)
  if (nums.length == 0) {
    return -1;
  } else if (nums.length == 1) {
    return nums[0];
  } else if (nums.length == 2) {
    if (nums[0] > nums[1]) {
      return nums[0];
    } else {
      return nums[1];
    }
  } else {
      //length is three or more we need to find third maximum
      //main logic
      maxVal=Number.NEGATIVE_INFINITY;
      secondMax=Number.NEGATIVE_INFINITY;
      thirdVal=Number.NEGATIVE_INFINITY;
      for( i=0;i<nums.length;i++){ //O(n) * (1) = O(n)
          if(nums[i]>maxVal){
              if(maxVal!=secondMax){
                thirdVal=secondMax
                secondMax=maxVal
                maxVal=nums[i]
              }
              else{
              secondMax=maxVal
                maxVal=nums[i]
              }
             
          }
          else if(nums[i]>secondMax){
              
              thirdVal=secondMax
              secondMax=nums[i]
          }
          else if(nums[i]>thirdVal ){
              thirdVal=nums[i]
          }
          
      }
      
        return thirdVal;
      
     
  }

  
};

//test the code 
nums = [3, 2, 1];
console.log(thirdMax(nums));

nums = [1, 2];

console.log(thirdMax(nums));

nums = [2, 2, 3, 1];

console.log(thirdMax(nums));

nums=[1,1,2]

console.log(thirdMax(nums));

nums=[1,2,2]

console.log(thirdMax(nums));

//expected 2 value gotten is 5
[1,2,2,5,3,5]

console.log(thirdMax(nums));

nums=[1,2,-2147483648]

console.log(thirdMax(nums));

