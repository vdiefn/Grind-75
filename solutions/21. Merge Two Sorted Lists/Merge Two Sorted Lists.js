var mergeTwoLists = function(list1, list2) {
  //建立初始值 dummy
  const dummy = new listNode()
  //建立目前位置
  const curr = dummy
  //建立迴圈：如果list1或list2其中一個到底了就結束迴圈
  while(list1 !== null && list2 !== null){
    //如果list1的值比較小，目前指針指向list1，反之指向list2
    if(list1.val <= list2.val){
      curr.next = list1
      //移動list1指針
      list1 = list1.next
    } else {
      curr.next = list2
      list2 = list2.next
    }
    //修改目前指針位置
    curr = curr.next
  }
  //當list1或lis2其中一個到底了，要將剩餘的直接接到curr後面
  curr.next = list1 === null ? list2 : list1
  //回傳結果(直接回傳dummy會將第一個位置的空值也傳出去)
  return dummy.next
};