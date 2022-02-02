// how to find odd and even numbers from  an array 

function odd (numbers) {
    let oddContainer = [];
    for(let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 != 0) {
            oddContainer.push(numbers[i]);
        }
    }
    return oddContainer;
}

let numbers = [10, 13, 12, 14, 15, 17, 19, 21, 23, 25];
let getOddNumbers = odd(numbers);
console.log(getOddNumbers);

// how to find even numbers from an array 

function even (numbers) {
    let evenContainer = [];
    let i = 0; 
    while (i < numbers.length) {
        if (numbers[i] % 2 == 0) {
            evenContainer.push(numbers[i]);
        }
        i++;
    }

    return evenContainer;
}

let setYourNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let getEvenNumbers = even(setYourNumbers);
console.log(getEvenNumbers);