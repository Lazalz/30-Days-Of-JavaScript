// 1. Declare a variable named challenge and assign it to an initial value **'30 Days Of JavaScript'**.

const challenge = "30 Days of Javascript";

// 2. Print the string on the browser console using console.log()
console.log(challenge);

// Print the length of the string on the browser console using console.log()
console.log(challenge.length)

// 4. Change all the string characters to capital letters using toUpperCase()
console.log(challenge.toUpperCase())

// 5. Change all the string characters to lowercase letters using toLowerCase()
console.log(challenge.toLowerCase())

// 6. Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substring(0, 3))

// 7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.substring(3))

// 8. Check if the string contains a word Script using includes()
console.log(challenge.includes())

// 9. plit the string into an array using split() method
console.log(challenge.split())

// 10. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array
const companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
const array = companies.split(', ');
console.log(array);

// 11.  Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
const str1 = '30 Days Of JavaScript';
console.log(str1.replace('JavaScript', 'Python'));
const str2 = '30 Days Of JavaScript';
console.log(str2.charAt(15));

// 12. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
const str3 = '30 Days Of JavaScript';
console.log(str3.charCodeAt(str3.indexOf('J')));

// 13. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
const str4 = '30 Days Of JavaScript';
console.log(str4.indexOf('a')); // 4
// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
const str5 = '30 Days Of JavaScript';
console.log(str5.lastIndexOf('a')); // 14
// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const sentence1 = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence1.indexOf('because')); // 31
// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const sentence2 = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence2.lastIndexOf('because')); // 47
// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const sentence3 = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence3.search('because')); // 31
// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
const str6 = ' 30 Days Of JavaScript ';
console.log(str6.trim()); // "30 Days Of JavaScript"
// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
const str7 = '30 Days Of JavaScript';
console.log(str7.startsWith('30')); // true
// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
const str8 = '30 Days Of JavaScript';
console.log(str8.endsWith('JavaScript')); // true
// Use match() method to find all the a’s in 30 Days Of JavaScript
const str9 = '30 Days Of JavaScript';
console.log(str9.match(/a/g)); // ["a", "a", "a"]
// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
const part1 = '30 Days of';
const part2 = 'JavaScript';
console.log(part1.concat(' ', part2)); // "30 Days of JavaScript" (note: original has "Of", but concat doesn't change case)
// Use repeat() method to print 30 Days Of JavaScript 2 times
const str10 = '30 Days Of JavaScript';
console.log(str10.repeat(2)); 
