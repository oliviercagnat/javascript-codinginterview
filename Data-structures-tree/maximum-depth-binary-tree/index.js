// Given the root of a binary tree, return its maximum depth.

// A binary tree’s maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// https://javascript.plainenglish.io/leetcode-algorithm-challenges-minimum-maximum-depth-of-binary-tree-d075a271fbda

// We will use the recursive function on the left and right branches of each node. 
// But first, we will check if the root exists. Therefore if the root doesn’t exist we will return 0, 
// since the branch doesn’t exist.

// However, if the root exists, it gives us the depth of 1. 
// Now we will use Math.max() Javascript function that returns the largest of the zero or more numbers given 
// as input parameters, and use our maxDepth function with root.left and root.rightas parameters. 
// It will compare branches of each of the nodes and eventually will return the longest branch depth, 
// which will be added to 1 that represents our root.


var maxDepth = function(root) {
    return !root ? 0 : 1 + Math.max(maxDepth(root.left),maxDepth(root.right));
};

