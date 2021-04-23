function palindrome(str) {
let myRegex = /[^A-Za-z0-9]/g;
let newStr = str.replace(myRegex,'');
  newStr = newStr.toLowerCase();
  let newAr= newStr.split();
  
let chk = newAr.reverse();

console.log(newAr);
console.log(chk);

  return true;
}

palindrome("A man, a plan, a canal. Panamall");