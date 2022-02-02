// write foo, bar, foobar if divisible by 3 or 5 or both 

/* for (let i = 0; i < 20; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('foobar', i);
    }
    else if(i % 3 == 0) {
        console.log('foo', i)
    }
    else if (i % 5 == 0) {
        console.log('bar', i);
    }

} */

// how to do same by using function 
function divisible (number) {
    for(let i = 1; i <= number; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log('foobar', i);
        }
        else if (i % 3 == 0) {
            console.log('foo', i);
        }
        else if (i % 5 == 0) {
            console.log('bar', i);
        }
        else {
            console.log(i);
        }
    }
}

divisible(50);
     