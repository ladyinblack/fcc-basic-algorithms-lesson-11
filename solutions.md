## SOLUTIONS

### Alternate Solution 1
```js
function titleCase(str) {
  const newTitle = str.split(" ");
  const updatedTitle = [];
  for (let st in newTitle) {
    updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
  }
  return updatedTitle.join(" ");
}
```
### Code Explanation
Split the string by white spaces, and craete a variable to track the updated title.  Then we use a loop to turn the first character of the word to uppercase and the rest to lowercase.  By creating concatenated string composed of the whole word in lowercase with the first character replaced by its uppercase.

### REFERENCE LINKS
- [JS For Loops Explained](http://forum.freecodecamp.com/t/javascript-for-loop/14666)
- [JS String Prototype Split](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
- [JS String Prototype Substr](http://forum.freecodecamp.com/t/javascript-string-prototype-substr/15945)
- [JS Array Prototype Join](http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292)


### Alternate Solution 2
```js
function titleCase(str) {
  return str
      .toLowerCase()
      .split(" ")
      .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
      .join(" ");
}

titleCase("I'm a little tea pot");
```
### Code Explanation
We are making entire string lowercase and then converting it into array.  Then we are using map function to replace the lowercase character with uppercase.  Finally, we are returning the string using `join` method.

### REFERENCE LINKS
- [JS Array Prototype Map](http://forum.freecodecamp.com/t/javascript-array-prototype-map/14294)


### Alternate Solution 3
```js
function titleCase(str) {
  return str
      .toLowerCase()
      .replace(/(^|\s)\S\g, L => L.toUpperCase());
}
```
### Code Explanation
The solution works by first lowercasing all the characters in the string and then only uppercasing the first character of each word.
- Lowercase the whole string using `str.toLowerCase()`.
- Replace every word's first character to uppercase using `.replace`.
- Search for character at the beginning of each word i.e. matching any character following a `space` or matching the first character of the whole string, by using the following pattern.
- Regex explanation:
  - Find all non-whitespace characters `(\S)`.
  - At the beginning of string `(^)`.
  - Or after any whitespace character `(\s)`.
- The `g` modifier searches for other such word pattern in the whole string and replaces them.
- This solution works with national symbols and accented letters as illustrated by following examples:
  - `international characters`: 'бабушка курит трубку' // → 'Бабушка Курит Трубку' 
  - `accented characters`: 'località àtilacol' // → 'Località Àtilacol'

### REFERENCE LINKS
- [JS Regex Resources](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

