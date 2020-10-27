function Binary(arr, value, start, end, count = 0) {
    const array = arr.sort((a, b) => a - b);
    start = start === undefined ? 0 : start;
    end = end === undefined ? array.length : end;
    count++;
    
    if (start > end) {
        return `Not found in ${count} tries.`;
    }
    if (value > array.length || value < 0) {
        return `Number outside the range of numbers.`;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    console.log('start ', start, 'end ', end);
    console.log('index ', index);
    
    if (item === value) {
        return count;
    }
    else if (item < value) {
        return Binary(array, value, index + 1, end, count);
    }
    else if (item > value) {
        return Binary(array, value, start, index - 1, count);
    }
}

module.exports = Binary;