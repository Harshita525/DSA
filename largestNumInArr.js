// Input: [10, 5, 25, 8]
// Output: 25

let arr = [10, 5, 25, 8];

let largest = -Infinity;

function largestInArr(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
}
return largest;
}

console.log(largestInArr(arr));