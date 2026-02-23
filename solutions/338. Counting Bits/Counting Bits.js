var countBits = function(n) {
  let arr = new Array(n+1).fill(0)
  for(let i = 1; i < n+1; i++){
    if(i%2 === 0) {
      arr[i] = arr[i/2]
    } else {
      arr[i] = arr[i-1]+1
    }
  }
  return arr
};