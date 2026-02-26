## 題目說明
給一個單向連結串列(Singly Linked List)，請確認該串列是否為回文（Palindrome）
## 解題思路
- 主要概念是找到這個連結串列的中間位置，然後將指標進行反轉，這時就可以比較兩個連結串列的值是否一致
### 第一步：使用快慢指標（Slow & Fast Pointers）找到串列的中間位置
- 建立兩個變數：fast 和 slow
- 只要fast.next和fast.next.next非null，就要一直往下走
- 當快指標走到底的時候，慢指標會停在中間位置
- 慢指標停留位置的下一個位置就是進行反轉的起點
### 第二步：進行反轉
- 建立兩個變數：cur 和 prev
- cur的起始點是slow.next(中間點的下一個點)
- prev的起點會是null，主要是斷掉cur和cur.next的關聯後，用來記憶前一個位置(這樣才能反轉)
- 在while迴圈中，設置一個變數temp用來記憶斷掉cur和cur.next後，cur.next的位置
- 只要cur不是null，就要一直進行迴圈
### 第三步：比較兩個連結串列的值是否一致
- 這時會有兩個連結串列，p1是從head開始，p2是從cur開始
- 只要while迴圈中的p2不是null，就可以一直進行比較
- 比較的內容為：
  - 若p1.val !== p2.val 返回false
  - 若兩個點的數值一致，則讓p1和p2往下個點移動繼續比較
- 全部比較完後回傳true

