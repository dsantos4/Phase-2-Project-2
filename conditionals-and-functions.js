/*
 *Conditionals, Functions, Scope and Loops.
 */

// Equals
let equals = 1 === 1;
console.log(equals)

//Greater than
let greaterThan = 5 > 1;

//Less than
let lessThan = 2 < 10;

// Greater than Equals
let greaterthanEq = 5 > 5;

// Less Than Equals
let lessthanEq = 4 <= 9;

// Not equals
let notequals = 5 !== 2;


let storeA = 1.40;
let storeB = 3.40;

function compareStorePrices (storeA, storeB) {
    let storeAIsLower = storeA < storeB;
    if (storeAIsLower) {
        console.log("Store A has a lower price.")
    } else if (storeB < storeA) {
        console.log("Store B has a lower price.");
    } else {
        console.log("Their prices are equal.")
    }

    compareStorePrices(10, 5);
    compareStorePrices(7, 10);

    function squareNUM (number) {
        let squared = number * number;
        return squared;
    }






    let x = 10;

    function addNumbers (n, m, x) {
        console.log (x);
        if (1===1) {
            b = 8;
        }
        console.log(b)
    }
    return n + m;
}




//              0  1  2  3  4
let ourarray = [1, 2, 3, 4, 5];
for (let i = 0; i<5; i++){
    console.log()
//    console.log(ourArray[i])
}

