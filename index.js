// 1. Write a js program to find length of a string.
let word1 = "New World"
let word = "Hello World"
console.log(word.length)

// 5. Write a js program to convert lowercase string to uppercase.
console.log(word.toLowerCase)
// 6. Write a js program to convert uppercase string to lowercase.
console.log(word.toUpperCase)
// 7. Write a js program to toggle case of each character of a string.

// 8. Write a js program to find total number of alphabets, digits or special character in a string.
const str = "Hello, World! 123";
const alphabets = str.match(/[a-zA-Z]/g).length;
const digits = str.match(/\d/g).length;
const specialChars = str.match(/[^\w\s]/g).length;

console.log(`Alphabets: ${alphabets}`);
console.log(`Digits: ${digits}`);
console.log(`Special Characters: ${specialChars}`);

// 9. Write a js program to count total number of vowels and consonants in a string.
const str1 = "Hello, World!";
const vowels = str1.match(/[aeiou]/gi).length;
const consonants = str1.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;

console.log(`Vowels: ${vowels}`);
console.log(`Consonants: ${consonants}`);

// 10. Write a js program to count total number of words in a string.
const str2 = "Hello, World!";
const words = str2.split(" ").length;

console.log(`Total Words: ${words}`);

// 11. Write a js program to find reverse of a string.
const str3 = "Hello, World!";
const reversed = str3.split("").reverse().join("");

console.log(`Reversed String: ${reversed}`);

// 12. Write a js program to check whether a string is palindrome or not.
const str4 = "racecar";
const reversed1 = str4.split("").reverse().join("");

if (str === reversed1) {
  console.log(`${str4} is a palindrome`);
} else {
  console.log(`${str4} is not a palindrome`);
}

// 13. Write a js program to reverse order of words in a given string
const str5 = "Hello World!";
const reversed2 = str.split(" ").reverse().join(" ");

console.log(`Reversed String: ${reversed2}`);

// 14. Write a js program to find first occurrence of a character in a given string.
const str6 = "Hello, World!";
const index = str6.indexOf("o");

console.log(`First occurrence of 'o' is at index ${index}`);

// 15. Write a js program to find last occurrence of a character in a given string.
const str7 = "Hello, World!";
const index1 = str7.lastIndexOf("o");

console.log(`Last occurrence of 'o' is at index ${index1}`);


// 17. Write a js program to count occurrences of a character in given string.
const str9 = "Hello, World!";
const char = "l";
let count = 0;

for (let i = 0; i < str9.length; i++) {
  if (str[i] === char) {
    count++;
  }
}

console.log(`The character '${char}' occurs ${count} times in the string.`);

// 18. Write a js program to find highest frequency character in a string.
const str10 = "Hello, World!";
const freq = {};

for (let i = 0; i < str10.length; i++) {
  if (freq[str10[i]]) {
    freq[str10[i]]++;
  } else {
    freq[str10[i]] = 1;
  }
}

let maxFreq = 0;
let maxChar = "";

for (const char in freq) {
  if (freq[char] > maxFreq) {
    maxFreq = freq[char];
    maxChar = char;
  }
}

console.log(`The highest frequency character in the string is '${maxChar}' with a frequency of ${maxFreq}.`);

// 19. Write a js program to find lowest frequency character in a string.
const str11 = "Hello, World!";
const freq1 = {};

for (let i = 0; i < str11.length; i++) {
  if (freq1[str11[i]]) {
    freq1[str11[i]]++;
  } else {
    freq1[str11[i]] = 1;
  }
}

let minFreq = Infinity;
let minChar = "";

for (const char in freq1) {
  if (freq1[char] < minFreq) {
    minFreq = freq1[char];
    minChar = char;
  }
}

console.log(`The lowest frequency character in the string is '${minChar}' with a frequency of ${minFreq}.`);

// 20. Write a js program to count frequency of each character in a string.

// 21. Write a js program to remove first occurrence of a character from string.
const str12 = "Hello, World!";
const char12 = "l";
const newStr = str12.replace(new RegExp(char12), "");

console.log(`The new string is: ${newStr}`);

// 22. Write a js program to remove last occurrence of a character from string.

// 23. Write a js program to remove all occurrences of a character from string.
const str13 = "hello world";
const char13 = "l";
const regex = new RegExp(char13, "g"); // use "g" flag for global match

const newStr1 = str13.replace(regex, "");

console.log(newStr); // output: "heo word"

// 24. Write a js program to remove all repeated characters from a given string.
const str15 = "hello world";
const chars = {};
let newStr15 = "";

for (let i = 0; i < str15.length; i++) {
  const char = str15[i];
  if (!chars[char]) {
    newStr += char;
    chars[char] = true;
  }
}

console.log(newStr); // output: "helo wrd"

// 25. Write a js program to replace first occurrence of a character with another in a string.
const str17 = "hello world";
const oldChar = "l";
const newChar = "x";

const regex17 = new RegExp(oldChar);
const newStr116 = str17.replace(regex17, newChar);

console.log(newStr116); // output: "hexlo world"

// 26. Write a js program to replace last occurrence of a character with another in a string.
const str19 = "hello world";
const oldChar12 = "l";
const newChar1 = "x";

const reversed12 = str19.split("").reverse().join("");
const regex15 = new RegExp(oldChar12);
const newReversed = reversed12.replace(regex15, newChar1);
const newStr66 = newReversed.split("").reverse().join("");

console.log(newStr66); // output: "hello worxd"

// 27. Write a js program to replace all occurrences of a character with another in a string.

// 28. Write a js program to find first occurrence of a word in a given string.

// 29. Write a js program to find last occurrence of a word in a given string.

// 30. Write a js program to search all occurrences of a word in given string.

// 31. Write a js program to count occurrences of a word in a given string.

// 32. Write a js program to remove first occurrence of a word from string.

// 33. Write a js program to remove last occurrence of a word in given string.

// 34. Write a js program to remove all occurrence of a word in given string.

// 35. Write a js program to trim leading white space characters from given string.

// 36. Write a js program to trim trailing white space characters from given string.

// 37. Write a js program to trim both leading and trailing white space characters from given string.

// 38. Write a js program to remove all extra blank spaces from given string.

// Array Handling

// 1. Write a js program to read and print elements of array.

// 2. Write a js program to print all negative elements in an array.

// 3. Write a js program to find sum of all array elements. 

// 4. Write a js program to find maximum and minimum element in an array.

// 5. Write a js program to find second largest element in an array.

// 6. Write a js program to count total number of even and odd elements in an array.

// 7. Write a js program to count total number of negative elements in an array.

// 8. Write a js program to copy all elements from an array to another array.

// 9. Write a js program to insert an element in an array.

// 10. Write a js program to delete an element from an array at specified position.

// 11. Write a js program to count frequency of each element in an array.

// 12. Write a js program to print all unique elements in the array.

// 13. Write a js program to count total number of duplicate elements in an array.

// 14. Write a js program to delete all duplicate elements from an array.

// 15. Write a js program to merge two array to third array.

// 16. Write a js program to find reverse of an array.

// 17. Write a js program to put even and odd elements of array in two separate array.

// 18. Write a js program to search an element in an array.

// 19. Write a js program to sort array elements in ascending or descending order.

// 20. Write a js program to sort even and odd elements of array separately.

// 21. Write a js program to left rotate an array.

// 22. Write a js program to right rotate an array.