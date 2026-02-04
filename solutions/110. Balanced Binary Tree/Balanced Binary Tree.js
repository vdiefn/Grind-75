// 方法一
/*
var isBalanced = function(root) {
  if(!root) return true

  let leftHeight = getHeight(root.left)
  let rightHeight = getHeight(root.right)

  return Math.abs(leftHeight - rightHeight) <=1 && (isBalanced(root.left) && isBalanced(root.right))
};

function getHeight(node) {
  if(node === null) return 0

  let leftHeight = getHeight(node.left)
  let rightHeight = getHeight(node.right)

  return Math.max(leftHeight, rightHeight)+1
}
*/
var isBalanced = function(root) {
  if(!root) return true

  let leftHeight = getHeight(root.left)
  let rightHeight = getHeight(root.right)

  return Math.abs(leftHeight - rightHeight) <= 1 && (isBalanced(root.left) && isBalanced(root.right))
};

function getHeight(node) {
  if(node === null) return 0

  let leftHeight = getHeight(node.left)
  if(leftHeight === -1) return -1

  let rightHeight = getHeight(node.right)
  if(rightHeight === -1) return -1

  return Math.abs(leftHeight-rightHeight) <= 1?  Math.max(leftHeight, rightHeight)+1 : -1
}

