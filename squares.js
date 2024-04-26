



//squares
//returns true if every value in the first array is squared in the second array

// function squares(nums1,nums2){
//   for(let i = 0 ; i<nums1.length;i++){
//     const foundIndex=nums2.indexOf(nums1[i]**2)
//     if(foundIndex ===-1) return false
//     nums2.splice(foundIndex,1)
//   }
//   return true
// }

// console.log(squares([2,2],[4,4,4]))/// false positive!!!!!!!


//squares refactored

// function squares(nums1, nums2) {
//   if (nums1.length !== nums2.length) {
//     return false;
//   }

//   for (let i = 0; i < nums1.length; i++) {
//     let correctIndex = nums2.indexOf(nums1[i] ** 2);

//     if (correctIndex === -1) {
//       return false;
//     }

//     nums2.splice(correctIndex, 1);
//   }

//   return true;
// }

// end squares

function squaresWithFreqCounter(nums1, nums2) {

  if (nums1.length !== nums2.length) return false;

  let nums1Freqs = createFrequencyCounter(nums1);
  let nums2Freqs = createFrequencyCounter(nums2);

  for (let key of nums1Freqs.keys()) {
    if (nums2Freqs.has(key ** 2) === false) {
      return false;
    }

    if (nums2Freqs.get(key ** 2) !== nums1Freqs.get(key)) {
      return false;
    }
  }

  return true;
}
// end squaresWithFreqCounter
function createFrequencyCounter(array) {
  let frequencies = {};

  for (let val of array) {
    let valCount = frequencies[val] || 0;
    frequencies[val] = valCount + 1;
  }
  console.log(frequencies)
  return frequencies;
}

squaresWithFreqCounter([2,2,2],[4,4,4])