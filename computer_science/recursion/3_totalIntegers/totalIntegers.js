const totalIntegers = function(obj) {
  if (typeof obj !== 'object' || obj == null) return 

  return Object.values(obj).reduce((acc, value) => {
    // if(!Number.isInteger(value) && typeof value !== 'object') return 
    return acc + (typeof value === 'object' && value !== null ? totalIntegers(value) : (typeof value === 'number' && Number.isInteger(value) ? 1 : 0))
  }, 0)
};

// search through each object 
// if the keys value is a number return 1
// stop once all the values are read
// base case? 
// 
// check if the value is a non number

// Do not edit below this line
module.exports = totalIntegers;
