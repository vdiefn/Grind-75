## 題目說明
這道題目要求的是將一棵二叉樹（Binary Tree）進行鏡像翻轉。簡單來說，就是要把樹中每一個節點的左子節點和右子節點互相交換。


## 解題思路
### 方法一、使用遞迴
1. 使用遞迴將root.left和root.right放進函式中
2. 如果遇到node不存在，則return null
3. 最後將root return 出來
### 方法二、使用while+Queue
1. 如果這棵樹非常深（例如有幾萬層），遞迴可能會導致「堆疊溢位」(Stack Overflow)。
2. 如果root不存在可以直接return null
3. 建立一個queue專門用來放節點，一開始要先將root放進去
4. 當節點的長度小於0時，則代表沒有其他子節點存在了
5. 處理流程：
    - 從隊伍最前面取出一個節點。
    - 交換這個節點的左右子節點。
    - 如果子節點存在，就把它們送入 queue 排隊。
6. 最終回傳root



## 優化
1. 不用在函式中判斷root.left或root.right是否存在，因為進入遞迴後的第一件事就是將不存在的node return出去
2. node 左右交換可以使用解構來做
  ```
  // 原本這樣寫
  let temp = root.left
  root.left = root.right
  root.right = temp

  // 可以改成這樣寫
  [root.left, root.right] = [root.right, root.left]
  ```
3. 在 JavaScript 中，雖然分號有時可以省略，但在遇到以 [ 或 ( 開頭的行時，分號是必須的。