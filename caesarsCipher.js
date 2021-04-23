function rot13(str) {

    var matched = str.match(/\w|[^A-Za-z0-9]/g);
    var newStr=[];
    for (let i=0;i<matched.length;i++){
        let myRegex = /\w/;
        if(myRegex.test(matched[i])){
        let char = matched[i].charCodeAt(0);
        if(char<78){
            char = 91-(78-char);
            newStr.push(String.fromCharCode(char));
        } else{
        newStr.push(String.fromCharCode(char-13));
        }
    }else{
        newStr.push(matched[i])
    }
    }
newStr=newStr.join('');
    return newStr;
  }
  
  rot13("SERR PBQR PNZC");