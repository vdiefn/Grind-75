var isPalindrome = function(head) {
  let fast = head
  let slow = head
  while(fast.next !== null && fast.next.next !== null ){
    slow = slow.next
    fast = fast.next.next
  }

  let cur = slow.next
  let prev = null
  while(cur !== null) {
    let temp = cur.next
    cur.next = prev
    prev = cur
    cur = temp
  }

  let p1 = head
  let p2 = prev
  while(p2 !== null) {
    if(p2.val !== p1.val) return false
    p1 = p1.next
    p2 = p2.next
  }
  return true
};