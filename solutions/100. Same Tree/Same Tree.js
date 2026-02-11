// 方法二
var isSameTree = function(p, q) {
  let queue = [[p, q]]

  while(queue.length > 0) {
    let [node1, node2] = queue.shift()
    if(!node1 && !node2) continue
    if(!node1 || !node2) return false
    if(node1.val !== node2.val) return false

    queue.push([node1.left, node2.left])
    queue.push([node1.right, node2.right])
  }
  return true
};


// 方法一
/*
var isSameTree = function(p, q) {
  if(!p && !q) return true
  if(!p || !q) return false
  if(p.val !== q.val) return false

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};
*/