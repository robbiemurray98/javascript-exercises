const contains = function(obj, val) {
    const values = Object.values(obj)

    if(values.includes(val)) return true;

    const nestedObjects = values.filter(
        (value) => typeof value === 'object' && value !== null
    )

    return nestedObjects.some((nestedObject) => 
        contains(nestedObject, val)
    )

};

// find the base case?
// 
// return true if the given val exists within the obj
// use object.values to turn to an array
// use includes to check the value

// Do not edit below this line
module.exports = contains;
