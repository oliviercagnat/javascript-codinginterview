// Given a binary tree, find its minimum depth.
// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
// Note: A leaf is a node with no children.

// Input: root = [3,9,20,null,null,15,7]
// Output: 2

// Input: root = [2,null,3,null,4,null,5,null,6]
// Output: 5

// Therefore we would need to check if leaves exist before choosing which branch we will need to count. 
// I would still start to check if the root exists and return 0 if it doesn’t.
// So the only case we can safely use Math.min would be when both leaves exist. We will use if function to check that.
// Otherwise, we will check if the only root.left exist and apply similar logic, but without using Math.min, 
// since we already know that root.right is null.
// And finally if root.left doesn’t exist, then we will use root.right as an argument for our minDepth recursive function.
// That will allow for all scenarios to be covered and will provide the final result.



var minDepth = function(root) {
    if(root === null) {
        return 0
    }

    if (root.left && root.right) {
        return 1 + Math.min(minDepth(root.left),minDepth(root.right))
    } else if (root.left) {
        return 1 + minDepth(root.left)
    } else {
        return 1 + minDepth(root.right)
    }
};