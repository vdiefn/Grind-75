### 基本概念
1. 建立新節點： ```const n0 = new listNode()```
2. 節點之間的引用：```n0.next = n1```
3. 取得節點的值：```n0.val```

### 解題思路
```
var mergeTwoLists = function(list1, list2) {
  //建立初始值 dummy

  //建立目前位置

  //建立迴圈：如果list1或list2其中一個到底了就結束迴圈
  while(list1 !== null && list2 !== null){
    //如果list1的值比較小，目前指針指向list1，反之指向list2
    if(list1.val <= list2.val){

      //移動list1指針

    } else {

    }
    //修改目前指針位置

  }
  //當list1或lis2其中一個到底了，要將剩餘的直接接到curr後面

  //回傳結果(直接回傳dummy會將第一個位置的空值也傳出去)
  return dummy.next
};
```