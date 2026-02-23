// 方法二
var hammingWeight = function(n) {
  let count = 0
  while(n !== 0) {
    if(n % 2 === 1) count++
    n = Math.floor(n/2)
  }
  return count
}

// 方法一
/*
var hammingWeight = function(n) {
  const str = n.toString(2)
  return str.split("").reduce((acc, cur) => {
    if(cur === "1") acc++
    return acc
  },0)
};


*/
console.log(hammingWeight(11))