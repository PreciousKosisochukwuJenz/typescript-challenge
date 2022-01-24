import assert from "assert";

// Write a function to print the first word in a given sentence

function firstWord(text: string): string {return text.split(" ")[0]};

console.log('Example:');
console.log(firstWord('Hello world'));

// These "asserts" are used for self-checking
assert.equal(firstWord('Hello world'), 'Hello');
assert.equal(firstWord('a word'), 'a');
assert.equal(firstWord('hi'), 'hi');