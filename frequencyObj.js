// a function to create a simple
// frequency counter using an object
function createFrequencyCounter(array) {
  let frequencies = {};

  for (let val of array) {
    let valCount = frequencies[val] || 0;
    frequencies[val] = valCount + 1;
  }

  return frequencies;
}




function charCount(str) {
  //split string into array
  //use reduce- initialize empty object as accumulator.
  return str.split('').reduce((obj, char) => {
    //ensure string contains only letters and numbers
    if(/[A-Z0-0]/i.test(char)){
      //downcase all letters
      char=char.toLowerCase();
      //if char in object- increment count or add to obj with count =1
      obj[char]=obj[char]+1 || 1
    }
    return obj
  }, {});


}

console.log(charCount('Duuuude'))


