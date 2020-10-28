'use strict';

// 3. Find a book
// Imagine you are looking for a book in a library with a Dewey Decimal index. 
// How would you go about it? Can you express this process as a search algorithm? 
// Implement your algorithm to find a book whose Dewey and book title is provided.

const books = [
    {dewey: '302.30285', title: 'Chaos monkeys : obscene fortune and random failure in Silicon Valley'},
    {dewey: '359.0092', title: 'Can\'t hurt me : master your mind and defy the odds'},
    {dewey: '658.409', title: 'Delivering happiness: a path to profits, passion, and purpose'},
    {dewey: '813.6', title: 'The Martian : a novel'},
    {dewey: '823.912', title: 'Brave new world'}
]

function findBook(arr, dewey, title, start, end) {
    start = start === undefined ? 0 : start;
    end = end === undefined ? arr.length - 1 : end;

    if (start > end) {
        return 'Dewey number not found';
    }

    const index = Math.floor((start + end) / 2);
    const book = arr[index];

    console.log('start: ', start, 'end: ', end);
    console.log('book.dewey: ', book.dewey, 'dewey: ', dewey);
    console.log('book.title: ', book.title, 'title: ', title);

    // verify both dewey number and title match
    if (parseFloat(book.dewey) == dewey) {
        if (book.title == title) {
            return `Index: ${index}`;
        } else if (book.title != title) {
            return 'Title not found'
        }
    }
    else if (parseFloat(book.dewey) < dewey) {
        return findBook(arr, dewey, title, index + 1, end);
    }
    else if (parseFloat(book.dewey) > dewey) {
        return findBook(arr, dewey, title, start, index - 1);
    }
};

console.log(findBook(books, '823.912', 'Brave new world'));