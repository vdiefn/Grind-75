var isPalindrome = function(s) {
  const regex = /[^a-z0-9]+/g
  const str = s.toLowerCase().replace(regex, "")

  if(str.length === 0) return true

  let indexStart = 0
  let indexEnd = str.length - 1

  while(indexStart < indexEnd) {
    if(str[indexStart] !== str[indexEnd]) {
      return false
    }
    indexStart++
    indexEnd--
  }
  return true

};



console.log(isPalindrome("A man, a plan, a canal: Panama"))//true
console.log(isPalindrome("race a car"))//false