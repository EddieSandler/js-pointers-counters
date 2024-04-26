function validAnagram(str1, str2) {
  //O(n log n- sucks)
// return str1.split('').sort().join()===str2.split('').sort().join()


// using a map is O(n)- linear time

if(str1.length !== str2.length) return false

//create a map of each string
const freq1 = createFrequencyCounter(str1);
const freq2 = createFrequencyCounter(str2);

//fail fast if map lengths are not equal
if(freq1.size!== freq2.size) return false

for (let letter of freq1.keys()){
if(freq2.get(letter)!== freq1.get(letter)) return false
}
return true

  }



  function createFrequencyCounter(str) {
    let frequencies = new Map();

    for (let char of str) {
      let charCount = frequencies.get(char) || 0;
      frequencies.set(char, charCount + 1);
    }

    return frequencies;
  }


  console.log(validAnagram('cinema','iceman'))
  console.log(validAnagram('cat','car'))