// Count vowels in a string.

// First approach

let str = "harshita"
let modifiedStr = str.split("")

function findVowel(modifiedStr) {
    let vowel = ['a', 'e', 'i', 'o', 'u']
    let count = 0;

    for (let i = 0; i <= modifiedStr.length - 1; i++) {
        for (let j = 0; j <= vowel.length - 1; j++) {
            if (modifiedStr[i] == vowel[j]) {
                count++
            }
        }
    }
    return count
}
console.log(findVowel(modifiedStr))


// 2nd approach
let str = "hello";
function findVowel(str) {
    let vowel = "aeiou"
    let count = 0;

    for (let char of str) {
        if (vowel.includes(char)) {
            count++
            break;
        }
    }
    return count;
}
console.log(findVowel(str))


// 3rd approach

function findVowel(str) {
    return str.split("").filter(char => "aeiou".includes(char)).length;
}

console.log(findVowel("Hello"))
