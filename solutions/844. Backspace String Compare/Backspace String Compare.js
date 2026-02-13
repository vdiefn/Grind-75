
var backspaceCompare = function(s, t) {

  function helper(str) {
    let stack = []
    for(let i = 0; i < str.length; i++){
      if(str[i] !== "#") {
        stack.push(str[i])
      } else {
        stack.pop()
      }
    }
    return stack.join("")
  }

  return helper(s) === helper(t)
};


console.log(backspaceCompare("ab#c", "ad#c")) //true
console.log(backspaceCompare("ab##", "c#d#")) //true
console.log(backspaceCompare("a#c", "b")) //false