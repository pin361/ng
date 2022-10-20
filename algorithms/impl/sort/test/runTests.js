import { bubbleSort } from '../bubbleSort.js';
import { selectionSort } from '../selectionSort.js';
import { insertionSort } from '../insertionSort.js';
import { countSort } from '../countSort.js';
import { mergeSort } from '../mergeSort.js';
import { quickSort } from '../quickSort.js';
import { testSorting } from "./testSorting.js";
import { testPerformance } from "./testPerformance.js";

import { plot } from 'plot';
import "@plotex/render-image";

testSorting(bubbleSort, 'bubble sort');
testSorting(selectionSort, 'select sort');
testSorting(insertionSort, 'insertion sort');
testSorting(countSort, 'count sort');
testSorting(mergeSort, 'merge sort');
testSorting(quickSort, 'quick sort');

const testPerformanceAndRenderPlot = () => {
  const plotData = { };
  const slowSortArrayLengths = [1000, 10000, 20000, 30000];
  const fastSortArrayLengths = [100000, 200000, 500000, 700000, 1000000];

  console.log('\nTest performance & render Plot');

  plotData.quickSort = testPerformance(fastSortArrayLengths, quickSort, 'quick sort');
  plotData.bubbleSort = testPerformance(slowSortArrayLengths, bubbleSort, 'bubble sort');
  plotData.selectionSort = testPerformance(slowSortArrayLengths, selectionSort, 'select sort');
  plotData.insertionSort = testPerformance(slowSortArrayLengths, insertionSort, 'insertion sort');
  plotData.countSort = testPerformance(fastSortArrayLengths, countSort, 'count sort');
  plotData.mergeSort = testPerformance(fastSortArrayLengths, mergeSort, 'merge sort');

  console.log('\x1b[36m%s\x1b[0m', 'Create plot');

  plot({
    values: plotData
  })
    .renderImage(
      './preformanceTestResult.png',
      { openImage: true },
    );
}

testPerformanceAndRenderPlot();
