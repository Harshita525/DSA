// Input: "hello"
// Output: "olleh"

const str = "hello";
console.log(str.split("").reverse().join(""));

function reveseStr(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

console.log(reveseStr("Harshita"));
