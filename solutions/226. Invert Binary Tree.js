// 方法一: 遞迴
/*
var invertTree = function(root) {
  if(!root) return null;

  [root.left, root.right] = [ root.right, root.left]

  invertTree(root.left)
  invertTree(root.right)

  return root
};
*/

// 方法二：佇列
var invertTree = function(root) {
  if(!root) return null

  let queue = []
  queue.push(root)
  while(queue.length > 0) {
    const cur = queue.shift();
    [cur.left, cur.right] = [cur.right, cur.left]
    if(cur.left) queue.push(cur.left)
    if(cur.right) queue.push(cur.right)
  }
  return root
};