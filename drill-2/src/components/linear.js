function Linear(array, value) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        count++
        if (array[i] === value) {
            return count;
        }
    }
    if (value > array.length || value < 0) {
        return `Number outside the range of numbers.`;
    }
    return `Not found in ${count} tries.`
}

module.exports = Linear;