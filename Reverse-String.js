// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse 
// ex. reverseString('hello') === 'olleh'


// Option 1: My first attempt
function reverseString(){
  return str
    .split('')
    .reverse()
    .toString()
    .replace(/,/g, '')
}
 
//////////////////////////
 
// Option 2: Answer Given
function reverseString(){
  return str
    .split('')
    .reverse()
    .join('')
}
return revString; 
 
///////////////////////// 
 
// Option 3: For Loop  
let revString = ''; 
for(let i = str.length-1; i >= 0; i--){
  revString = revString + str[i]
}
return revString; 
 
//////////////////////// 
 
// Option 4:  
let revString = ''; 
for(let i = 0; i <= str.length - 1; i++){
  revString = str[i] + revString; 
}
return revString; 
 
///////////////////////// 
 
// Option 5: 
let revString = ''; 
for(let char of str){
  revString = char + revString; 
}
return revString
 
 ////////////////////////

// Option 6: 
let revString = ''; 
str.split('').forEach(char => revString = char + revString); 
return revString; 

////////////////////////

// Option 7:  
return str.split('').reduce((revString, char) => char + revString, '');  
