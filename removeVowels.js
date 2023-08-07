function disemvowel(str) {
  const arr = [];
  const vowels = ['a','e','i','o','u'];
  for (const symbol of str){
    if (!vowels.includes(symbol.toLowerCase())){
       arr.push(symbol)
    }
  }
    return arr.join('');
}

//second version 
// function disemvowel (str) {
//     return str.replace(/[aeiou]/gi, '')
// }

//third version
// function disemvowel (str) {
//     return str.split('')
//     .map(word =>['a','e','i','o','u']
//     .includes(word.toLowerCase()) ? '': word)
//     .join('');
    
// }

  console.log(disemvowel("This website is for losers LOL!" )); //"Ths wbst s fr lsrs LL!"
  console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read")); //'N ffns bt,\nYr wrtng s mng th wrst \'…'
  console.log(disemvowel("What are you, a communist?"));//"Wht r y,  cmmnst?"