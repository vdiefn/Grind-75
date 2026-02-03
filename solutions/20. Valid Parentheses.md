### 解題重點
1. 先建立一個stack，來接收左括號
2. 遍歷字串時可以有連續多個左邊的小中大括號，但是只要遍歷到一個右邊的小中大括號，這個右括號一定會和最後一個左括號是可以進行配對的
3. 若無法進行配對則此字串就是非法的字串(無法順利閉合括號)
4. 若配對成功就將stack中最後一個符號pop出去
5. 為了進行左右括號的配對，需要建立一個map的物件，key為右括號，value為左括號
6. 一旦字串遍歷結束，並且stack中為空的時後，代表這是一個合法的字串
---
### 虛擬碼
```
var isValid = function(s) {
  // 建立用於比對的map

  // 建立stack


  for(let i = 0; i < s.length; i++){
    const char = s[i]
    if(map中可以找到char) {
      const item = stack.at(-1)
      if(stack的長度為0 或 stack中最後一個item無法配對上char) 代表這是非法的字串
      if(item 和 char 配對成功) 將stack中的item pop出去
    } else {
      將char push 到 stack 裡面
    }
  }
  return 若stack為空代表全部配對成功為合法字串
}
```