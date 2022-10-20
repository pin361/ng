import { mergeSorted } from '../../impl/array/mergeSorted.js';

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
export const findMedianSortedArrays = (nums1, nums2) => {
    const merge = mergeSorted(nums1, nums2);
    const length = merge.length;

    if(length % 2 !== 0) {
        return merge[Math.floor(length / 2)];
    }

    const right = length / 2;

    return (merge[right] + merge[right - 1]) / 2;
};
