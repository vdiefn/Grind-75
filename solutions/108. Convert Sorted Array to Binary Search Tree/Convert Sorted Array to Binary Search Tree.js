var sortedArrayToBST = function(nums) {
  let leftIndex = 0
  let rightIndex = nums.length-1

  function buildBST(nums, left, right){
    if(left > right) return null

    let mid = Math.floor(left+(right-left)/2)
    let node = new TreeNode(nums[mid])
    node.left = buildBST(nums, left, mid-1)
    node.right = buildBST(nums, mid+1, right)

    return node
  }

  return buildBST(nums, leftIndex, rightIndex)
};