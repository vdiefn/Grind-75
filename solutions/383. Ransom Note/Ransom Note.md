## 題目說明
提供兩個字串，ransomNote以及magazine，如果ransomNote中包含ransomNote中的每個字母，則回傳true，不然回傳false
- 字串一定是小寫英文字母
- magazine中的字母只能於ransomNote中使用一次

## 解題思路
1. 需要計算出magazine中每個字母出現的次數
2. 每使用過一次字母，就要把統計次數減一
3. 如果ransonNote中的某個字母於magazine中找不到，或者發現可使用次數是0時就要回傳false