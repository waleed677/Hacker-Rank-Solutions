

// let text = "www.abc.xy";
// let k = 7;

let text = "www.abc.xy";
let k = 87;

console.log(caesarCipher(text, k));

function caesarCipher(s, k) {

    let alphabets = "abcdefghijklmnopqrstuvwxyz";
    let result = '';
    let rotatedAlphabets = '';
    // Rotate the alphabets to K time

    if(k < alphabets.length) {
        rotatedAlphabets = alphabets.slice(k) + alphabets.slice(0,k);
    } else {
        let rotation = k % alphabets.length;
        rotatedAlphabets =   alphabets.slice(rotation) + alphabets.slice(0,rotation);
    }

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if(char.match(/[a-z]/i) ) {
            let charIndex = alphabets.indexOf(char.toLowerCase());
            let newChar = rotatedAlphabets[charIndex];

            result += char === char.toUpperCase() ? newChar.toUpperCase() : newChar 

        } else {
            result += char;
        }


    }

    return result;



}