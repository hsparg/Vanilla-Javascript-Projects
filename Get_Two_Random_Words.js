
let randomWords = ['ball', 'blue', 'broccoli', 'cookie', 'cow', 'cloud', 'claim', 'cord', 'director', 'embarrassment', 'green', 'gray', 'harvest', 'major', 'marriage', 'bathtub', 'infection', 'instinct', 'interface', 'invisible', 'innocent', 'organize', 'perforate', 'pizza', 'paradox', 'patch', 'percent', 'plagerize', 'red', 'retreat', 'scene', 'scramble', 'summer', 'squash', 'thanks', 'trade', 'twitch', 'wisecrack', 'yellow', 'choose', 'ring', 'sniff', 'skeleton', 'suffering', 'cheese', 'matter', 'reporter','topple', 'shiver', 'ward', 'sow', 'chart', 'ethics', 'scene', 'negative', 'session','table', 'jail', 'hurt', 'brillance', 'wing', 'dynamic', 'school', 'crevice', 'analysis', 'character', 'wealth', 'excuse', 'disturbance', 'host', 'item', 'eyebrow', 'sunshine', 'morale', 'glow', 'feminine', 'sample', 'monarch',  'southern', 'hospitality', 'chapter', 'automatic', 'voice', 'landscape', 'force', 'europe', 'truck', 'faint', 'worry', 'interest', 'doctor', 'anger', 'trick', 'twilight', 'build', 'torch', 'present', 'eternal', 'trivial', 'treatment', 'reason', 'pepper', 'grass', 'serious', 'limit', 'shelter', 'smart', 'fossil', 'technique', 'power', 'achieve', 'threat', 'remark', 'spokesperson', 'taste', 'memory', 'merchant', 'help', 'dress', 'painter', 'blissful', 'speaker', 'singer', 'dancer', 'circle', 'triangle', 'rectangle', 'square', 'popcorn', 'walk', 'run', 'jump', 'hide', 'drink', 'bake', 'shop', 'sing', 'pop', 'dig', 'hole', 'park', 'bond', 'photography', 'dime', 'penny'
]
let usedCards = []

const right_h1 = document.querySelector('.right_h1');
const left_h1 = document.querySelector('.left_h1');

const card = document.querySelector('.card');

//function to get random Words
  let getWords = (arr, num) => {
    const twoWords = []
    
    //obtaining random words from array      
    for(let i = 0; i < num; i++ ){
      var word = arr[Math.floor(Math.random()*randomWords.length)];
      console.log(word)
      twoWords.push(word)
      arr.pop(word)
    }
  console.log(twoWords)
    
    //left card word
    left_h1.innerText = twoWords[0]
    
    //right card word
    right_h1.innerText = twoWords[1]
  }

card.onclick = () => {
  right_h1.innerText = ''
  left_h1.innerText = ''
  getWords(randomWords, 2)
}
 
   
