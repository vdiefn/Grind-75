### Map 常見操作方法包括：

- set(key, value)：新增元素至 Map 中
- get(key)：通過鍵 (Key) 查詢特定元素並返回
- has(key)：檢查 Map 中是否存在特定鍵 (Key)
- delete(key)：透從 Map 中刪除特定元素
- size：獲取 Map 中元素的數量

---
### 重點整理
1. 使用map.has(key)的時候，不會再去遍歷一次，而是透過底層Hash Table(雜湊表)實現的，平均查詢時間是O(1)
2. 使用Map來儲存時，key是數字本身，value是index
3. 實現重點在於確認complement(補數)是否存在Map裡
4. 若有重複數字(當前數字和補數相同)出現，因為會先確認Map中是否有符合條件，故會先找到該數字並進行return