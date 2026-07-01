const pascal = function(n) {

    if(n <= 0) return []

    const result = [[1]];



    function createPascal(currentRow, remainingRows){
        if(remainingRows <= 0) return;

        const paddedRow = [0, ...currentRow, 0]
        const nextRow = [];



        for(let i = 0; i < paddedRow.length - 1; i++){
            const sum = paddedRow[i] + paddedRow[i + 1]
            nextRow.push(sum)
            
            }

        result.push(nextRow)
            
        createPascal(nextRow, remainingRows - 1)


        }
    

    createPascal([1], n - 1)


    return result[result.length - 1];

};


// create a loop
// the amount of times the loop runs is based on the number given
// the loop begins with [0, 1, 0]
// take the first index add it to its neighbor to the right 
// return as new array

// create a helper function that takes an array then recursivly calls that function again with a new array 
// as long as n has not been reached

// 

// Do not edit below this line
module.exports = pascal;
