var longestPalindrome = function(s) {
  let length = 0
  let hasAdd = false
  const counts = s.split("").reduce((acc, cur) => {
    if(acc[cur]) {
      acc[cur]+=1
    } else {
      acc[cur]=1
    }
    return acc
  }, {})

  for(const char in counts) {
    if(counts[char]%2===0){
      length += counts[char]
    } else {
      length += counts[char]-1
      if(!hasAdd) hasAdd = true
    }
  }
  return hasAdd ? length +1 : length
};

console.log(longestPalindrome("abccccdd")) //7