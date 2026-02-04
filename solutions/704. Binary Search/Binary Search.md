## 題目說明
1. 在一個已完成排序(升冪)的陣列中，找到target的index，並回傳該index，若沒找到則回傳-1
2. 時間複雜度必須要在 O(\log n)

## 解題思路
1. 最直覺的方法是從index 0 開始遍歷，直到找到 target 為止，但是這個時間複雜度會是 O(n)
2. 因此解決方法是使用二分搜尋法 (Binary Search)，透過不停的對半切，進而縮小查找範圍
3. 首先會設定兩個index，分別為index的起點以及index的終點
4. 設定while迴圈不斷輪迴的條件，一般來說都是設定leftIndex <= rightIndex，一旦不符合這個條件就代表跑完整個陣列了，然後還沒有找到target
    - 接著比較middleIndex的值和target誰比較，若target比較大，代表leftIndex=middleIndex+1，若target比較小，則代表rightIndex=middleIndex-1
    - 如果middleIndex的值等於target則可以回傳index