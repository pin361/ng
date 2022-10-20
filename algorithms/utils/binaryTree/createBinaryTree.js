import isDefined from '../isDefined.js';
import { createNode } from './createNode.js';

export const createBinaryTree = (array) => {
  let root = createNode(array[0]);
  let leftIndex = 1;
  const stack = [];

  stack.push(root);

  while(stack.length) {
    const currentNode = stack.shift();

    const leftValue = array[leftIndex];
    if(isDefined(leftValue)) {
      const leftNode = createNode(leftValue);
      currentNode.left = leftNode;
      stack.push(leftNode);
    }

    const rightValue = array[leftIndex + 1];
    if(isDefined(rightValue)) {
      const rightNode = createNode(rightValue);
      currentNode.right = rightNode;
      stack.push(rightNode);
    }

    leftIndex += 2;
  }

  return root;
};

const tree = createBinaryTree([5,4,6,null,null,3,7]);
