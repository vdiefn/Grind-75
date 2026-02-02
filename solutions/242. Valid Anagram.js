var isAnagram = function(s, t) {
  if(s.length !== t.length ) return false
  const obj = s.split("").reduce((acc, cur) => {
    if(acc[cur]) {
      acc[cur] ++
    } else {
      acc[cur] = 1
    }
    return acc
  }, {})
  for(const char of t) {
    if(!obj[char]) return false
    obj[char]--
  }
  return true
};

console.log(isAnagram("anagram", "nagaram"))