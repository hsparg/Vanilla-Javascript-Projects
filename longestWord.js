// CHALLENGE 1: LONGEST WORD
// Retrun the longest word of a string
// If more than one longest word, put into an array 
// ex. longestWord('Hello, my name is Brad') === 'hello'
// ex. longestWord('Hello there, my name is Brad') === ['hello', 'there']

function longestWord(sen){
  // Create filtered array
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  
  // Sort by length
  const sorted = wordArr.sort((a,b) => b.length - a.length);
  
  // If multiple words, put into array 
  const longestWordArr = sorted.filter((word) => word.length === sorted[0].length); 
  
  //Check if more than one array val 
  if(longestWordArr.length === 1){
        //return the word 
        return longestWordArr[0];
      }else{
        return longestWordArr; 
      }
}; 




// CHALLENGE 2: ARRAY CHUNKING 
// Split an array into chunked arrays of a specific length 
//ex. chunkArray ([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6], [7]]
//ex. chunkArray ([1, 2, 3, 4, 5, 6, 7], 2) == [[1,2][3,4][5,6],[7]]

function chunkArray(arr, len){
// SOLUTION 1   
   // Init chunked arr
   const chunkedArr =[];
   // Set index
   let i = 0; 
  
   //Loop while index is less than the array length
   while(i < arr.length){
     //Slice out from the index to the index + the chunk length and push on to the chunked array
     chunkedArr.push(arr.slice(i, i + len));
     // Increment by chunk length 
     i += len ;
   }
  
   return chunkedArr; 
  
// SOLUTION 2 ****************** 

// Init chunked Arr = [];
  const chunkedArr = [];
  
//Loop through arr 
  arr.forEach(function(val){
    // Get last element 
    const last = chunkedArr[chunkedArr.length - 1]
    
    if (!last || last.length === len){
      chunkedArr.push([val])
    } else {
      last.push(val)
    }
  }); 
  
  return chunkedArr
  
}

const output = chunkArray([1, 2, 3, 4, 5, 6, 7], 2)
console.log(output)





//   const flatArr = []
  
//   arrays.forEach(function(arr){
//     arr.forEach(function(val){
//       flatArr.push(val)             
//     })
//   })
  
//   return flatArr
  
