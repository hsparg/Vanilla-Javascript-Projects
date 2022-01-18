// CHALLENGE 4: CAPITIALIZE LETTERS 
// Return a string with the first letter of every word capitialized 
// ex. capitalizeLetters('i love javascript') === 'I love JavaScript'

function capitializeLetters(str){
  
  const strArr = str.toLowerCase().split(' ');
  
  for(let i = 0; i < strArr.length; i++){
        strArr[i] = strArr[i].substring(0, 1).toUpperCase()
    + strArr[i].substring(1);
  }
   return strArr.join(' '); 

///////////////////////////////////  Option 2
  return str 
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.substr(1)
      )
    .join(' ');
}

//////////////////////////////////  Option 3

return str.replace(/\b[a-z]/gi, (char) => char.toUpperCase(); 
});
    
}  

//Call Function 
const output = capitializeLetters('i love javascript')

console.log(output)
