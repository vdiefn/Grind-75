//方法二
var singleNumber = function(nums) {
  let result = 0
  for(let i = 0; i < nums.length; i++){
    result = nums[i]^result
  }
  return result
}

/*
var singleNumber = function(nums) {
  let obj = new Map()
  for(let i = 0; i < nums.length; i++){
    if(obj.has(nums[i])){
      obj.set(nums[i], obj.get(nums[i])+1)
    } else {
      obj.set(nums[i], 1)
    }
  }
  for(const [key, value] of obj){
    if(value === 1) return key
  }
};
*/

console.log(singleNumber([4,1,2,1,2]))//4