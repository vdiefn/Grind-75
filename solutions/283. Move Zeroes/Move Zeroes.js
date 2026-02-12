// 方法二
var moveZeroes = function(nums) {
  if(nums.length <= 1) return nums
  let slow = 0
  for(let fast = 0; fast < nums.length; fast++){
    if(nums[fast] !== 0){
      nums[slow] = nums[fast]
      slow++
    }
  }
  for(let i = slow; i < nums.length; i++) {
    nums[i] = 0
  }
  return nums
};

console.log(moveZeroes([0,1,0,3,12])) // [1,3,12,0,0]
console.log(moveZeroes([1,2,3]))

// 方法一
/*
var moveZeroes = function(nums) {
  if(nums.length <= 1) return nums
  let slow = 0
  for(let fast = 0; fast < nums.length; fast++){
    if(nums[fast] !== 0){
      [nums[fast], nums[slow]] = [nums[slow], nums[fast]]
      slow++
    }
  }
  return nums
};
*/