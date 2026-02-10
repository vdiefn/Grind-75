var addBinary = function(a, b) {
  let aIndex = a.length -1
  let bIndex = b.length -1
  let res = ""
  let carry = 0
  while(aIndex >=0 || bIndex >=0 || carry >0){
    let aVal = a[aIndex]? Number(a[aIndex]):0
    let bVal = b[bIndex]? Number(b[bIndex]):0
    let sum = aVal + bVal + carry
    carry = Math.floor(sum/2)
    let current = sum%2
    res = current + res
    aIndex--
    bIndex--
  }
  return res
};

console.log(addBinary("11", "1"))