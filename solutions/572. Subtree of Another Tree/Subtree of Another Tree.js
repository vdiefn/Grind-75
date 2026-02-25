var isSubtree = function(root, subRoot) {
  if(!root) return false

  function isSameTree(p, q) {
    if(!p && !q) return true
    if(!p || !q) return false
    if(p.val !== q.val) return false

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
  }

  return isSameTree(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};