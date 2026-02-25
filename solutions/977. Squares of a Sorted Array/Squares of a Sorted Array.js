// 方法二
var sortedSquares = function(nums) {
  let arr = new Array(nums.length)
  let startIndex = 0
  let endIndex = nums.length - 1
  let currentIndex = nums.length - 1
  while(startIndex <= endIndex) {
    let first = Math.pow(nums[startIndex],2)
    let second = Math.pow(nums[endIndex],2)
    if(first > second) {
      arr[currentIndex] = first
      startIndex++
    } else {
      arr[currentIndex] = second
      endIndex--
    }
    currentIndex--
  }
  return arr
}

/*
var sortedSquares = function(nums) {
  const result = nums.map(i => i*i).sort((a,b)=>a-b)
  return result
};
*/
console.log(sortedSquares([-4,-1,0,3,10])) //[0,1,9,16,100]