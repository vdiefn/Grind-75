//方法二
var middleNode = function(head) {
  let list = head
  let fast = list
  let slow = list
  while(fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}

//方法一
/*
var middleNode = function(head) {
  let list = head
  let count = 0
  while(list !== null){
    count++
    list = list.next
  }
  let times = 0
  let resultList =head
  if(count%2===0){
    times = count/2
  } else {
    times = Math.floor(count/2)
  }
  while(times > 0) {
    resultList = resultList.next
    times--
  }
  return resultList
};
*/