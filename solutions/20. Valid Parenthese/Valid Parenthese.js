var isValid = function(s) {
  const stack = []
  const map = {
    ")":"(",
    "]":"[",
    "}":"["
  }
  for( let i = 0; i < s.length; i++){
    const char = s[i]

    if(map[char]){
      if(stack.length === 0 || stack.at(-1) !== map[char]) return false
      if(stack.at(-1) === map[char]) {
        stack.pop()
      }

    } else {
      stack.push(char)
    }
  }
  return stack.length === 0
};

console.log(isValid("()")) //true
console.log(isValid("(]")) //false
console.log(isValid("([])")) //true