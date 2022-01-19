// CHALLENGE 5: Max Character 
// Return the character that is most common in a string 
// ex. maxCharacter('javascript') == 'a'

function maxCharacter(str){
  const charMap = {}; 
  let maxNum = 0; 
  let maxChar = ''; 
  
  str.split('').forEach(function(char){
    if(charMap[char]){
      charMap[char]++;
    }else{
      charMap[char] = 1; 
    }
  }); 
  
  for(let char in charMap){
    if(charMap[char] > maxNum){
      maxNum = charMap[char]; 
      maxChar = char; 
    }
  }
  
  return maxChar;
} 

const output = maxCharacter('javascript')
console.log(output)


// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

function fizzBuzz(){
  for(let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
      console.log(i + ' :FizzBuzz')
    }else if(i % 5 === 0){
      console.log(i + ' :Buzz')
    }else if(i % 3 === 0){
      console.log(i +' :Fizz')
    }else{
      console.log(i)
    }
  }
}

//Call Function 
const output = fizzBuzz()
console.log(output)
