// 方法二
var missingNumber = function(nums) {
  let result = nums.length
  for(let i = 0; i < nums.length; i++){
    result ^= nums[i]^i
  }
  return result
};

/*
var missingNumber = function(nums) {
  let length = nums.length
  let set = new Set(nums)
  for(let i = 0; i <= length; i++){
    if(!set.has(i)) return i
  }
};
*/

console.log(missingNumber([0,1]))//2
console.log(missingNumber([9,6,4,2,3,5,7,0,1]))//8