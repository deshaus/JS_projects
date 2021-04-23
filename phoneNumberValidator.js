//  Telephone Number Validator

/* Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. 
The following are examples of valid formats for US numbers (refer to the tests below for other variants):

    555-555-5555
    (555)555-5555
    (555) 555-5555
    555 555 5555
    5555555555      <-- 10 digits
    1 555 555 5555

For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. 
Your job is to validate or reject the US phone number based on any combination of the formats provided above. 
The area code is required. If the country code is provided, you must confirm that the country code is 1. 
Return true if the string is a valid US phone number; otherwise return false. */

function telephoneCheck(str) {
    let myRegex = /\(\d{3}\)\s*\d{3}\W*\d{4}|\d{3}\W*\d{3}\W*\d{4}/g; // or [^0-9]\d+[^0-9] (for begining) // but /^\d|[^0-9]\d{3}[^0-9]|\d{3}[^0-9]|\d{4}/ will cover most of the cases (??)
    let amRegex = /\d/g;
    let begRegex = /^1/;
    let brakRegex = /\d|[^A-Za-z0-9]/;
    let adBrRegex = /\(\d{3}\)\s*\d{3}\W*\d{4}/g;

    let amCheck = str.match(amRegex);
    let brCheck = str.match(brakRegex);

    if (amCheck.length > 11 && begRegex.test(str)){
      return false;
    } else if (brCheck.length>=13 && !adBrRegex.test(str)){
      return false;
    } else if (myRegex.test(str)&&amCheck.length>=10){
      return true;
    } else {
        return false;
    }

    // /\(\d{3}\)\s*\d{3}\W*\d{4}/g for the whole  (555) 555-5555 and (555)555-5555
    // /\d{3}\W*\d{3}\W*\d{4}/g for 555 555 5555 and 555-555-5555 and for 5555555555
    // so.. the final variant will be /\(\d{3}\)\s*\d{3}\W*\d{4}|\d{3}\W*\d{3}\W*\d{4}/g

  }


telephoneCheck("555-555-5555");      //should return a boolean.
telephoneCheck("1 555-555-5555");    //should return true.
telephoneCheck("1 (555) 555-5555");  //should return true.
telephoneCheck("5555555555");        //should return true.
telephoneCheck("555-555-5555");      //should return true.
telephoneCheck("(555)555-5555");     //should return true.
telephoneCheck("1(555)555-5555");    //should return true.
telephoneCheck("555-5555");          //should return false.
telephoneCheck("5555555");           //should return false.
telephoneCheck("1 555)555-5555");    //should return false.
telephoneCheck("1 555 555 5555");    //should return true.
telephoneCheck("1 456 789 4444");    //should return true.
telephoneCheck("123**&!!asdf#");     //should return false.
telephoneCheck("55555555");          //should return false.
telephoneCheck("(6054756961)");      //should return false.
telephoneCheck("2 (757) 622-7382");  //should return false.
telephoneCheck("0 (757) 622-7382");  //should return false.
telephoneCheck("-1 (757) 622-7382"); //should return false.
telephoneCheck("2 757 622-7382");    //should return false.
telephoneCheck("10 (757) 622-7382"); //should return false.
telephoneCheck("27576227382");       //should return false.
telephoneCheck("(275)76227382");     //should return false.
telephoneCheck("2(757)6227382");     //should return false.
telephoneCheck("2(757)622-7382");    //should return false.
telephoneCheck("555)-555-5555");     //should return false.
telephoneCheck("(555-555-5555");     //should return false.
telephoneCheck("(555)5(55?)-5555");  //should return false.

// Version which almost works

function telephoneCheck(str) {
  let myRegex = /\(\d{3}\)\s*\d{3}\W*\d{4}|\d{3}[^\)]\W*\d{3}\W*\d{4}/g; // or [^0-9]\d+[^0-9] (for begining) // but /^\d|[^0-9]\d{3}[^0-9]|\d{3}[^0-9]|\d{4}/ will cover most 
   let amRegex = /\d/g;
   let begRegex = /^1/;
   let brakRegex = /\d|[^A-Za-z0-9]/

   let amCheck = str.match(amRegex);
   let brCheck = str.match(brakRegex);

   if (amCheck.length == 11 && !begRegex.test(str)){
     return false;
   } else if (brCheck.length>=13 && myRegex.test(str)){
     return false;
   } else if (myRegex.test(str)&&amCheck.length>=10){
return true;
   } else {
     return false;
   }


 }

telephoneCheck("555-555-5555");



// One more

function telephoneCheck(str) {
  let myRegex = /\(\d{3}\)\s*\d{3}\W*\d{4}|\d{3}[^\)]\W*\d{3}\W*\d{4}|^\d{10}/g; // or [^0-9]\d+[^0-9] (for begining) // but /^\d|[^0-9]\d{3}[^0-9]|\d{3}[^0-9]|\d{4}/ will cover most 
   let amRegex = /\d/g;
   let begRegex = /^1/;
   let brakRegex = /\d|[^A-Za-z0-9]/

   let amCheck = str.match(amRegex);
   let brCheck = str.match(brakRegex);

   if (amCheck.length == 11 && !begRegex.test(str)){
     return false;
   } else if (brCheck.length>=13 && myRegex.test(str)){
     return false;
   } else if (myRegex.test(str)&&amCheck.length>=10){
return true;
   } else if(amCheck.length>11){
     return false;
    } else {
     return false;
   }


 }
telephoneCheck("555-555-5555");

// should meet:

telephoneCheck("(6054756961)") should return false.
telephoneCheck("10 (757) 622-7382") should return false.
telephoneCheck("(555-555-5555") should return false.

// Closest to the final

function telephoneCheck(str) {
  let myRegex = /\(\d{3}\)\s*\d{3}\W*\d{4}|\d{3}[^\)]\W*\d{3}\W*\d{4}|^\d{10}/g; // or [^0-9]\d+[^0-9] (for begining) // but /^\d|[^0-9]\d{3}[^0-9]|\d{3}[^0-9]|\d{4}/ will cover most 
   let amRegex = /\d/g;
   let begRegex = /^1/;
   let brakRegex = /\d|[^A-Za-z0-9]/

   let amCheck = str.match(amRegex);
   let brCheck = str.match(brakRegex);

   if (amCheck.length == 11 && !begRegex.test(str)){
     console.log('starts not from one');
     return false;
   } else if (brCheck.length>=13 && myRegex.test(str)){
     console.log('something wrong with brackets');
     return false;
   } else if (myRegex.test(str)&&amCheck.length<=11){
     console.log('Everything is OK');
return true;
   } else if(amCheck.length>11){
     console.log('Too long number');
     return false;
    } else {
      console.log('something else is not OK');
     return false;
   }

 }

// should reject "(555-555-5555"

// FINAL SOLUTION (but could be improved a little bit)

function telephoneCheck(str) {
  let myRegex = /\(\d{3}\)\s*\d{3}\W*\d{4}|\d{3}[^\)]\W*\d{3}\W*\d{4}|^\d{10}/g; // or [^0-9]\d+[^0-9] (for begining) // but /^\d|[^0-9]\d{3}[^0-9]|\d{3}[^0-9]|\d{4}/ will cover most 
   let amRegex = /\d/g;
   let begRegex = /^1/;
   let brakRegex = /\d|[^A-Za-z0-9]/

   let amCheck = str.match(amRegex);
   let brCheck = str.match(brakRegex);

   if (amCheck.length == 11 && !begRegex.test(str)){

     return false;
   } else if (brCheck.length>=13 && myRegex.test(str)){

     return false;
   } else if (myRegex.test(str)&&amCheck.length<=11){
if (/\(/g.test(str) && !/\)/g.test(str)){  // added test for wrong brackets
  return false;
} else {
return true;
}
   } else if(amCheck.length>11){

     return false;
    } else {

     return false;
   }

 }

telephoneCheck("(555-555-5555");