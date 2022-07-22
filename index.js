// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Title Case a Sentence</h1>`;

/** TODO:
 * Return the provided string with the first letter of each word capitalized.  Make sure the rest of the word is in lower case.
 * For the purpose of this exercise, you should also capitalize connecting words like `the` and `of`.
 * 
 
 function titleCase(str) {
   return str;
 }
 
 titleCase("I'm a little tea pot");
 */

function titleCase(str) {
  let strArr = str.split(' ');
  let newStrArr = [];
  let newStr = '';
  for (let i = 0; i < strArr.length; i++) {
    newStr = strArr[i].substr(0, 1).toUpperCase();
    newStr += strArr[i].substr(1).toLowerCase();
    newStrArr.push(newStr);
    newStr = newStrArr.join(' ');
  }
  // console.log(newStrArr);
  return newStr;
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase('sHoRt AnD sToUt'));
console.log(titleCase('HERE IS MY HANDLE HERE IS MY STOUT'));
