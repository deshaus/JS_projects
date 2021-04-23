function convertToRoman(num) {
const LOWEST = {0:'',1:'I',2: 'II', 3: 'III', 4: 'IV', 5:'V', 6:'VI', 7:'VII', 8:'VIII', 9:'IX'};
const MIDDLE = {0:'',1:'X',2: 'XX', 3: 'XXX', 4: 'XL', 5:'L', 6:'LX', 7:'LXX', 8:'LXXX', 9:'XC'};
const HIGHEST = {0:'',1:'C',2: 'CC', 3: 'CCC', 4: 'CD', 5:'D', 6:'DC', 7:'DCC', 8:'DCCC', 9:'CM'};
const ADD = {1:'M',2:'MM',3:'MMM'}
var fin;
let numStr = num.toString();
let numAr = numStr.match(/\d/g);

if(numAr.length==1){
    fin = LOWEST[num];
} else if(numAr.length==2){
    fin = MIDDLE[numAr[0]]+LOWEST[numAr[1]];
} else if(numAr.length==3){
    fin = HIGHEST[numAr[0]]+MIDDLE[numAr[1]]+LOWEST[numAr[2]];
} else{
    fin = ADD[numAr[0]]+HIGHEST[numAr[1]]+MIDDLE[numAr[2]]+LOWEST[numAr[3]];
}

return fin;

}

convertToRoman(1023);