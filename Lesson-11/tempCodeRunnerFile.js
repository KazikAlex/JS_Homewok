
function divideArr(arr, leng) {
    var newArr = [];

    for (var i = 0; i <= arr.length; i+leng) {
        newArr.push(arr.splice(0, leng));
    }
    
    return newArr;
}
  
console.log(divideArr([1, 2, 3, 4], 2)); // [[1, 2], [3, 4]]
console.log(divideArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 3)); // [[1, 2, 3], [4, 5, 6], [7, 8]]