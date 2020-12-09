// Задание №1

//вариант 1 ES6
function pow() {
    var res = 0;

    do {
        var x = prompt('Введите число, котрое хотите возвести в степень: ');
    }
    while ( isNaN(x) || x == '' || x == null ); 
    

    do {
        var n = +prompt('Введите степень в которую возвести число (только целочисленное значение!!!): ');
    }
    while ( isNaN(n) || n == '' || !Number.isInteger(n) );

    if ( x == 0 ) {
        return alert('0 в степени ' + n + ' = 0');
    }

    if ( n == 0) {
        return alert(x + ' в степени 0 = 1');
    }

    res = x;

    for ( var i = 1; i < n; i++) {
        res *= x;
    }
    return alert(x + ' в степени ' + n + ' = ' + res);
}

pow();

//вариант 2 ES5
function pow() {
    var res = 0;

    do {
        var x = prompt('Введите число, котрое хотите возвести в степень: ');
    }
    while ( isNaN(x) || x == '' || x == null ); 
    

    do {
        var n = +prompt('Введите степень в которую возвести число (только целочисленное значение!!!): ');
    }
    while ( isNaN(n) || n == '' || (n ^ 0) !== n );

    if ( x == 0 ) {
        return alert('0 в степени ' + n + ' = 0');
    }

    if ( n == 0) {
        return alert(x + ' в степени 0 = 1');
    }

    res = x;

    for ( var i = 1; i < n; i++) {
        res *= x;
    }
    return alert(x + ' в степени ' + n + ' = ' + res);
}

pow();

// Задание №2

//вариант 1

function sumTo() {
    var sum = 0;

    do {
        var n = prompt('Введите целоe число n, для подсчета суммы целых чисел от 1 до n: ');
    }
    while ( isNaN(n) || n == '' || n == null ); 

    for (i = 1; i <= n; i++ ) {
        sum += i;
    }

    return alert('Сумма чисел от 1 до ' + n + ' равна ' + sum);

}

sumTo();

//вариант 2

do {
    var n = prompt('Введите целоe число n, для подсчета суммы целых чисел от 1 до n: ');
}
while ( isNaN(n) || n == '' || n == null ); 

var sum = 0,
    i = 1;

function sumTo() {

    if ( i > n ) {
        return alert('Сумма чисел от 1 до ' + n + ' равна ' + sum);
    }
    sum += i;
    i++;
    sumTo();
}

sumTo();

//вариант 3

function sumTo() {

    do {
        var n = +prompt('Введите целоe число n, для подсчета суммы целых чисел от 1 до n: ');
    }
    while ( isNaN(n) || n == '' || n == null ); 3

    return alert('Сумма чисел от 1 до ' + n + ' равна ' + n * (n + 1) / 2);
}

sumTo();

// Самая быстрая функция в варианте #3 с фрмулой, т.к. это только одна матемматическая перация на любое n, т.е. сразу происходит вычисление.
// второй по скорости будет вариант №1 с циклом, т.к. цикл проходит ровно столько, сколько цифр вв прогрессии.
// самым трудоемким будет рекрсия ваиант №2, т.к. происходит создание вложеных функций (контекстов выполнения) в памяти, а вложенность в JS ограничена и 100000 операций уже нативный JS не пропускает.


// Задание №3

var mass = [5, 7, 
          [4, [2], 8, [1, 3], 2],
          [9, []],
          1, 8
  ];

function treeSum(arr, sum) {
    var sum = 0;

    for ( var i = 0; i < arr.length; i++ ) {
        console.log(arr[i]);
        if ( typeof arr[i] === 'number' && !isNaN(arr[i]) ) {
            sum += arr[i];
            console.log('сумма ' + sum);
        } else if ( typeof arr[i] === 'object' && arr[i] != null && arr[i].length) {
            sum += treeSum(arr[i]); 
        }
    }

    return sum;
}

treeSum(mass);