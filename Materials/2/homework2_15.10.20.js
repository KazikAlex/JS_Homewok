// var base = +prompt('Введите базовое число'),
//     plus = +prompt('Сколько нужно прибавить к базовому числу?'),
//     result = base + plus,
//     minus = +prompt('Сколько нужно отнять от результа прибавления?'),
//     result = result - minus,
//     multiply = +prompt('На что нужно умножить результат отнимания?'),
//     result = result * multiply,
//     division = +prompt('На что нужно поделить результат умножения?'),
//     result = result / division;

var base = +prompt('Введите базовое число'),
    plus = +prompt('Сколько нужно прибавить к базовому числу?'),
    minus = +prompt('Сколько нужно отнять от результа прибавления?'),
    multiply = +prompt('На что нужно умножить результат отнимания?'),
    division = +prompt('На что нужно поделить результат умножения?'),
    result = ((base + plus - minus) * multiply) / division;


    alert('Ваша формула: ((' + base + ' + ' + plus + ' - ' + minus + ') * ' + multiply + ') / ' + division + '\nРезультат: ' + result);

    var result = (a + b < 4 ) ? 'Мало' : 'Много';




var a = prompt('Введите первую переменную');
       b = prompt('Введите вторую переменную');

c = a;
a = b;
b = c;

alert('Я их поменял местами ' + a + ' и ' +  b);