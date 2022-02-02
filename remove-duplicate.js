// remove duplicate iteams from an array 

function removeDuplicate (numbers) {
    let unique = [];
    for (let element of numbers) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}

let numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];
let uniqueNumbers = removeDuplicate(numbers);
console.log(uniqueNumbers);