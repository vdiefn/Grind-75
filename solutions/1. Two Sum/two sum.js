//方法一、暴力解 (O(n^2))
/*
function twoSum(nums, target) {
  for(let i = 0; i<nums.length-1;i++){
    for(let j=i+1; j< nums.length; j++){
      if(nums[i]+nums[j] === target){
        return [i, j]
      }
    }
  }
};
*/

//方法二、使用map ($O(n))
function twoSum(nums, target) {
  const map = new Map()
  for(let i=0; i<nums.length; i++){
    const complement = target - nums[i]
    //如果找到了可以湊成target的值就可以return
    if(map.has(complement)) {
      return [i, map.get(complement)]
    }

    //找不到的話加入map
    map.set( i, nums[i],)
  }
}


console.log(twoSum([3,2,4], 6))