### 解題思路
#### 方法一、(O(n))
1. 使用正規表達式刪除除了英文以及數字以外的符號
2. 兩個指針分別從頭/尾向中間靠近，只要有一個不一樣就是false

### 注意事項
#### 方法一
1. 若是使用```s.toLowerCase().match(regex)```有可能回傳會是null，應該用```s.toLowerCase().replace(regex, "")```
2. 若是使用replace()，regex要寫成相反條件```/[^a-z0-9]+/```