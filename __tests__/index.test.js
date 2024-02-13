const {
  wordsStartingWithCapital,
  sumOfOddNumbersGreaterThanTen,
  countLettersInEachWord,
} = require('../index');

test("wordsStartingWithCapital should return an array of words starting with a capital letter", () => {
  // Test case 1: stringsArray contains words starting with a capital letter
  expect(wordsStartingWithCapital(["Apple", "Banana", "Cat"])).toEqual([
    "Apple",
    "Banana",
    "Cat",
  ]);

  // Test case 2: stringsArray contains words starting with a lowercase letter
  expect(wordsStartingWithCapital(["apple", "banana", "cat"])).toEqual([]);

  // Test case 3: stringsArray contains a mix of words starting with a capital and lowercase letter
  expect(wordsStartingWithCapital(["Apple", "banana", "Cat"])).toEqual([
    "Apple",
    "Cat",
  ]);

  // Test case 4: stringsArray is empty
  expect(wordsStartingWithCapital([])).toEqual([]);
});

test("sumOfOddNumbersGreaterThanTen should return the sum of odd numbers greater than 10", () => {
  // Test case 1: numbersArray contains odd numbers greater than 10
  expect(sumOfOddNumbersGreaterThanTen([5, 12, 15, 20])).toBe(15);

  // Test case 2: numbersArray contains odd numbers less than or equal to 10
  expect(sumOfOddNumbersGreaterThanTen([3, 8, 9, 10])).toBe(0);

  // Test case 3: numbersArray is empty
  expect(sumOfOddNumbersGreaterThanTen([])).toBe(0);

  // Test case 4: numbersArray contains only even numbers
  expect(sumOfOddNumbersGreaterThanTen([2, 4, 6, 8])).toBe(0);

  // Test case 5: numbersArray contains a mix of odd and even numbers greater than 10
  expect(sumOfOddNumbersGreaterThanTen([11, 12, 13, 14, 15])).toBe(39);
});


test("countLettersInEachWord should return an object with the count of letters in each word", () => {
  // Test case 1: sentence contains multiple words
  expect(countLettersInEachWord("Hello world")).toEqual({
    Hello: 5,
    world: 5,
  });

  // Test case 2: sentence contains a single word
  expect(countLettersInEachWord("JavaScript")).toEqual({
    JavaScript: 10,
  });

  // Test case 3: sentence contains words with different lengths
  expect(countLettersInEachWord("I love coding")).toEqual({
    I: 1,
    love: 4,
    coding: 6,
  });

  // Test case 4: sentence is empty
  expect(countLettersInEachWord("")).toEqual({});

  // Test case 5: sentence contains numbers
  expect(countLettersInEachWord("Hello 123")).toEqual({
    Hello: 5,
    123: 3,
  });
});
