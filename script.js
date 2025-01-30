// The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

let original = "Riya"
let answer = mirrorString(original)
console.log(answer)

function mirrorString(str){
    let reversed = '';
    for (let i = str.length-1;i>=0;i--) {
        reversed += str[i]
    }
    return str+reversed;
}