// Задание №1

// вариант 1
for ( var i = 0; i <= 10; i++ ) {
    if ( i != 0 && i % 2 == 0) {
        console.log(i);
    } 
}

// вариант 2
for ( var i = 0; i <= 10; i++ ) {
    if (  i & 1 ) {
        continue;
    } else if ( i != 0 ){
        console.log(i);
    } 
}


// Задание №2

// вариант 1
var obj1 = { name: 'Вася', age: 25 }, 
    obj2 = {};

function isEmpty(obj) {
    var bool;

    if ( Object.keys(obj).length > 0) {
        bool = false;
    } else {
        bool = true;
    }
    return bool;
}

isEmpty(obj1);
isEmpty(obj2);

// вариант 2
var obj3 = { name: 'Вася', age: 25 }, 
    obj4 = {};

function isEmpty1(obj1) {
    var bool1;

    for ( var key in obj1 ) {
        return bool1 = false;
    }
    return bool1 = true;
}

isEmpty1(obj3);
isEmpty1(obj4);


// Задание №3

function dataRequest() {
    var array = [],
        counter = 0,
        req = prompt('Введите числовые данные:');

    while ( !isNaN(req) && req != '' && req != null ) {
        array.push(parseInt(req));
        req = prompt('Введите числовые данные:');
    }

    if ( array.length == 0 ) {
        alert('Массив не был задан');
    } else {
        for (var i = 0; i < array.length; i++) {
            counter += array[i];
        }
        alert('Сумма массива: ' + counter);
    }
}

dataRequest();


// Задание №4 

function simpleMumber() {
    var array = [];

    do {
        num = +prompt('Введите простое число (т.е. больше 1-цы и не дробное): ');
    }
    while ( num <= 1 || isNaN(num) );

    step: for ( var i = 2; i <= num; i++) {
            for ( var a = 2; a < i; a++) {
                if ( i % a == 0) {
                    continue step;  
                }
            }
            array.push(i);
            }

    return alert(array);
}

simpleMumber();
