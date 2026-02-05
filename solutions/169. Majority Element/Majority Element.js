// 方法二
var majorityElement = function(nums) {
  let candidate = null
  let counts = 0
  for(let i = 0; i < nums.length; i++){
    if(counts === 0) {
      candidate = nums[i]
      counts = 1
    } else if(nums[i] === candidate) {
      counts+=1
    } else if(nums[i] !== candidate) {
      counts-=1
    }
  }
  return candidate
}

/*
優化方法一
var majorityElement = function(nums) {
  const half = nums.length/2
  const counts = new Map()
  for(let i = 0; i < nums.length; i++){
    if(counts.has(nums[i])) {
      counts.set(nums[i], counts.get(nums[i])+1)
    } else {
      counts.set(nums[i], 1)
    }
    if(counts.get(nums[i]) > half) return nums[i]
  }
}
*/


/*
方法一
var majorityElement = function(nums) {
  const count = nums.length/2
  let max = null
  const result = nums.reduce((acc,cur) => {
    if(acc[cur]) {
      acc[cur]++
    } else {
      acc[cur] = 1
    }
    return acc
  }, {})
  for(const [key,value] of Object.entries(result)) {
    if(value > count){
      max = key
      return Number(max)
    }
  }
};
*/


console.log(majorityElement([2,2,1,1,1,2,2]))