console.log('test');
console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        continue;
    } else {
        console.log(i);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 0; i < 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FIZZBUZZ")
    } else {
        if (i % 3 == 0) {
            console.log("FIZZ")
        } else {
            if (i % 5 == 0) {
                console.log("BUZZ")
            }
        }
    }
}

//While loop
let i = 1;

while (i < 100) {
    let output = "";

    if (i % 3 == 0) {
        output += "FIZZ"
    }
    if (i % 5 == 0) {
        output +="BUZZ"
    }
    console.log(`${i} ${output}`);

    i++;
}

//do while loop
let x = 1;

while (x < 100) {
    let output = "";

    if (x % 3 == 0) {
        output += "FIZZ"
    }
    if (x % 5 == 0) {
        output += "BUZZ"
    }
    console.log(`${x} ${output}`);

    x++;
    while (x <= 100);
}

//exercise 4:
let numberToFind = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let i = 1; i <= n; i++) {
    if (i == numberToFind){
        console.log(`Found ${numberToFind}`);
        break;
    }
    if (i == 9) {
        console.log(`Did not find ${numberToFind} within 1-${n}..`);
    }    
}

//example = 5
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let i = start; i < end; i++) {
    let output = ""

    if (i % fizzDivisor == 0) {
        output += "FIZZ";
    }

    if (i % buzzDivisor == 0) {
        output += "BUZZ";
    }

    console.log(`{i} ${output}`);
}
console.log(fizzDivisor, buzzDivisor);