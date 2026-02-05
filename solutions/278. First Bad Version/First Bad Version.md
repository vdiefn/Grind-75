## 題目說明
1. 版本編號從1開始一直到n
2. 提供一個isBadVersion的函式，會回傳true或false
3. 要找出第一個版本號使用isBadVersion查詢後回傳為true的版本

## 解題思路
1. 使用二分搜尋法
2. 建立兩個變數left和right，分別代表1和n
3. while持續條件為right<left
4. 建立mid來確認該版本經過isBadVersion結果為true或false
5. 若為true，right = mid
6. 若為false，left = mid+1


