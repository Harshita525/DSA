// Remove duplicates from an array

// First Approach (using set method)

let arr = [1, 2, 2, 3, 4, 4, 5];

function removeDuplicate(arr){
   let unique= [...new Set(arr)]
   return unique
}

console.log(removeDuplicate(arr));