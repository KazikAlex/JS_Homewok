//Задача №1

//вариант1
var number = [-1, 0, 2, 34, -2],
    newArr = [];     

number.forEach(function filterNumbersArr(num) {
    if (num > 0) {
        newArr.push(num);
    }
});

console.log();

//вариант2

var number = [-1, 0, 2, 34, -2];
var positiveArray = number.filter(function(num) {
    return num > 0;
});

console.log(positiveArray);


//Задача №2

var number = [-1, 0, 3, 2, 34, -2];

var positive = number.find(function(num) {
    return num > 0;
});

console.log(positive);


//Задача №3

function isPalindrome(word) {
    var newWord = word.toLowerCase().split('').reverse().join('');
    var word = word.toLowerCase();

    return word == newWord;

}

isPalindrome('шалаШ'); // true 
isPalindrome('привет'); // false

 
//Задача №4

function areAnagrams(word1, word2) {
    var word1 = word1.toLowerCase().split('').sort().join('');
    var word2 = word2.toLowerCase().split('').sort().join('');;

    return word1 == word2;

}

areAnagrams('пила', 'лиПа'); // true
areAnagrams('кот', 'отк'); // true 
areAnagrams('кот', 'атк'); // false
areAnagrams('кот', 'отко'); // false


//Задача №5

function divideArr(arr, leng) {
    var newArr = [];

    for (var i = 0; i < arr.length; i = i + leng) {
        newArr.push(arr.slice(i, i + leng));
    }
    
    return newArr;
}
  
console.log(divideArr([1, 2, 3, 4], 2)); // [[1, 2], [3, 4]]
console.log(divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3)); // [[1, 2, 3], [4, 5, 6], [7, 8]]


