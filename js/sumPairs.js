exports.sumPairs = function(array, target) {
    let result = [];	
    for (i = 0; i < array.length; i++){	
      for (let j = i + 1; j < array.length; j++){
        if (array[i] + array[j] === target){	
          result.push([array[i], array[j]]);	
        }	
      }	
    }	
    if (result.length > 0){	
        return result;	
    }	
    return('unable to find pairs');
};
//console.log(exports.sumPairs([1,2,3,4,5], 7))