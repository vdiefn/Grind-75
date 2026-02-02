###　題目說明
1. 題目要求用兩個「後進先出」（Stack / 堆棧）的結構，去模擬出一個「先進先出」（Queue / 隊列）的行為。
2. 這兩個 Stack 只能使用標準的 Stack 操作：
    - push(x)：將元素推入頂端。
    - pop()：從頂端移除元素。
    - peek()：查看頂端元素。
    - empty()：檢查大小或是否為空。

### 解題思路
1. 為了模擬後進先出以及先進先出的情景，要先建立兩個array，一個是stackIn，模擬後進先出，一個是stackOut，模擬先進先出
2. pop和peek這兩個方法都是stackOut使用的
3. 如果stackOut裡面還有資料，就直接pop/peek最後一筆
4. 如果stackOut裡沒有資料，就會需要到stackIn取得資料放到stackOut裡
5. 也就是說將stackIn的資料push到stackOut之前，要先確認stackOut是空的
6. stackIn push資料到stackOut的時候要反著把資料丟出去，也就是最後一個進來的資料第一個出去，這樣才能在stackOut實現先進先出情景
7. peek方法使用的時候，是看stackOut中下一個要被丟出去的資料