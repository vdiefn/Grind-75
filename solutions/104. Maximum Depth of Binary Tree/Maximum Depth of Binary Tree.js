var maxDepth = function(root) {
  function dfs(node) {
    if(!node) return 0
    let leftHeight = dfs(node.left)
    let rightHeight = dfs(node.right)
    return Math.max(leftHeight, rightHeight)+1
  }
  return dfs(root)
};