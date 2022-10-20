import { test } from './test.js';
import { createLinkedList, printLinkedList } from './utils.js';

const mergeTwoLists = (list1, list2) => {
  let current1 = list1;
  let current2 = list2;

  let result;
  let prev1 = current1;
  let needUsePrev = false;

  while(current1 && current2) {
    if(current2.val >= current1.val) {
      needUsePrev = true;

      if(!current1.next) {
        current1.next = current2;
        break;
      } else {
        prev1 = current1;
        current1 = current1.next;
      }
    } else { // current1.val > current2.val
      let next2 = current2.next;

      if(needUsePrev) {
        current2.next = prev1.next;
        prev1.next = current2;
        needUsePrev = false;
      } else {
        if(prev1) {
          prev1.next = current2;
        }
        current2.next = current1;
      }

      current2 = next2;
    }

    if(!result) {
      result = prev1;
    }
  };

  printLinkedList(result, 'result');

  return result;
};

const arr2 = [2,10,20,30];
const arr1 = [1,2,3,100];

const list1 = createLinkedList(arr1);
const list2 = createLinkedList(arr2);

const mergedList = mergeTwoLists(list1, list2);

test(arr1, arr2, mergedList);
