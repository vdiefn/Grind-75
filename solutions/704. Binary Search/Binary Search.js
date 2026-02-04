var search = function(nums, target) {
  let leftIndex = 0
  let rightIndex = nums.length -1
  while(leftIndex <= rightIndex) {
    let middleIndex = Math.floor((rightIndex+leftIndex)/2)
    if(nums[middleIndex] === target) return middleIndex
    if(nums[middleIndex] > target) rightIndex = middleIndex-1
    if(nums[middleIndex] < target) leftIndex = middleIndex+1
  }
  return -1
};

console.log(search([-1,0,3,5,9,12], 9)) //4