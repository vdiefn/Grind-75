var diameterOfBinaryTree = function(root) {
  let biggest = 0

  function dfs(node){
    if(!node) return 0
    let leftHeight = dfs(node.left)
    let rightHeight = dfs(node.right)
    biggest = Math.max(biggest, leftHeight+rightHeight)

    return Math.max(leftHeight, rightHeight)+1
  }

  dfs(root)
  return biggest
};