'use strict';

// 1. How many searches?
// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm...

// identify the sequence of numbers that each recursive call will search to try and find 8.
// Answer: start 0, end 10 ... start 0, end 4 ... start 3, end 4

const arr = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];

function binarySearch(array, value, start, end) {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;

    if (start > end) {
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    console.log(start, end);
    if (item == value) {
        return index;
    }
    else if (item < value) {
        return binarySearch(array, value, index + 1, end);
    }
    else if (item > value) {
        return binarySearch(array, value, start, index - 1);
    }
};

// console.log('index: ', binarySearch(arr, 8));

// identify the sequence of numbers that each recursive call will search to try and find 16.
// Answer: start 0, end 10 ... start 6, end 10 ... start 6, end 7 ... start 7, end 7

console.log('index: ', binarySearch(arr, 16));