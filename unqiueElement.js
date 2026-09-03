// Find number of unique elements:

// const arr = [10, 20, 20, 30, 30, 30]

console.log(new Set(arr).size);

// Check whether 7 exists

const arr1 = [1, 3, 5, 7, 9];

console.log(new Set(arr1).has(7));

// Check whether an array contains duplicates.

const arr = [1, 2, 3, 4, 5];
function checkDuplicate(arr) {
    const unique = [...new Set(arr)];
    console.log(unique);
    if (arr.length == unique.length){
        return false
    }else{
        return true
    }
}

console.log(checkDuplicate(arr));