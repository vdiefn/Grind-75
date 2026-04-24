var detectCycle = function(head) {
    let fast = head
    let slow = head
    while(fast !== null && fast.next !== null){
        fast = fast.next.next
        slow = slow.next
        if(slow === fast){
            slow = head
            while(slow !== fast){
                slow = slow.next
                fast = fast.next
            }
            return fast
        }
    }
    return null
};