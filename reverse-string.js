// explore string nature and reverse a string 
// how to count all 'e' from string sentence 
let string = 'I am majedul Islam. I want to be a developer';

function countAllE (sentence) {
    let count = 0;
    for(let letter of sentence) {
        if(letter == 'a') {
            count++;
        }
    }
    return count;
} 

let getcount = countAllE(string);
console.log(getcount);

// how to reverse  a string 

let sentence = 'I am Majedul Islam. I want to be a web developer';

function reverseString (sentence) {
    let string = '';
    for(let letter of sentence) {
        string = letter + string;
    }
    return string;
}

let getReverse = reverseString(sentence);
console.log(getReverse);