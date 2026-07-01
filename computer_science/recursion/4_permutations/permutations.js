const permutations = function(arr) {
    let result = [];


    function backtrack(current, remaining){
        if(remaining.length === 0){
            result.push(current)
            return
        }
        for(let i = 0; i < remaining.length; i++){
            const nextItem = remaining[i]
            const newRemaining = remaining.toSpliced(i, 1)
            const newCurrent = current.concat(nextItem);

            backtrack(newCurrent, newRemaining)
        }
    }

    backtrack([], arr)

    return result;
};

// 

// Do not edit below this line
module.exports = permutations;
