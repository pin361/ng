// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
import { createBinaryTree } from '../../utils/binaryTree/createBinaryTree.js';
import isDefined from '../../utils/isDefined.js';

// [5,4,6,null,null,3,7]

const pushMaxValue = (array, value) => {
  if(array[array.length - 1] >= value) {
    return false;
  }

  array.push(value);

  return true;
}

export const isValidBST = function(root) {
  const queue = [];
  const values = [];

  queue.push(root);
  while(queue.length) {
    const currentNode = queue.shift();
    const leftNode = currentNode.left;

    if(isDefined(leftNode)) {
      if(!pushMaxValue(values, leftNode.val)) {
        return false;
      }
      queue.push(leftNode);
    }

    if(!pushMaxValue(values, currentNode.val)) {
      return false;
    }

    const rightNode = currentNode.right;
    if(isDefined(rightNode)) {
      if(!pushMaxValue(values, rightNode.val)) {
        return false;
      }
      queue.push(rightNode);
    }

  }

  return true;
};

const binTree = createBinaryTree([2,1,3]);

console.log(isValidBST(binTree));
