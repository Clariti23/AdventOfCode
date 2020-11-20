

https://adventofcode.com/2015/day/2/input


// takes in "2x3x4"
function calcSA(input) {

    let subtotal = 0;
    let sides = input.split("x");

    //add smallest area as extra
    let mins = sides.sort((a, b) => a - b).slice(0, 2);
    let smallest = mins[0] * mins[1];
    subtotal += smallest;

    let l = sides[0];
    let w = sides[1];
    let h = sides[2];

    value = 2 * (l * w) + 2 * (l * h) + 2 * (h * w);
    subtotal += value;

    // console.log(subtotal)
    return subtotal;
}

// let input = "2x3x4";
// calcSA(input)


const calcTotal = () => {
    
    let total = 0;

    var lineReader = require('readline').createInterface({
        input: require('fs').createReadStream('input2.txt')
    });
      
    lineReader.on('line', function (line) {
        let x = calcSA(line);
        total += x
        console.log(total)
    });
}

// calcTotal();

// accepts "2x3x4"
function calculatePerimeter(input) {
    // let subtotal = 0;
    let sides = input.split("x");

    //assign the two smallest sides
    let mins = sides.sort((a, b) => a - b).slice(0, 3);
    let small1 = mins[0];
    let small2 = mins[1];
    
    let ribbon = 2 * small1 + 2 * small2 + (mins[0] * mins[1] * mins[2])

    // console.log(ribbon)

    return ribbon;
}

// calculatePerimeter("2x3x4");

const calcPerimTotal = () => {
    
    let total = 0;

    var lineReader = require('readline').createInterface({
        input: require('fs').createReadStream('input2.txt')
    });
      
    lineReader.on('line', function (line) {
        let x = calculatePerimeter(line);
        total += x
        console.log(total)
    });
}

calcPerimTotal();