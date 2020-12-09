// Задание №1

var login = prompt('Введиите логин');

if (login == "Админ") {
    var password = prompt('Введите пароль');

        if (password == "Черный властелин") {
            alert('Добро пожаловать!');
        } else if (password == null) { 
            alert('Вход отменен');
        } else {
            alert('Пароль не верен!');
        }
} else if (login == null) {
    alert('Вход отменен');
} else {
    alert('Я вас не знаю');
}



// Задание №2

var message = (login === 'Вася') ? 'Привет' : 
            (login === 'Директор') ? 'Здравствуйте' :
            (login === '') ? 'Нет логина': '';


// Задание №3

var styles = ['Джаз', 'Блюз'];

console.log(styles);
styles.push('Рок-н-Ролл');
console.log(styles);
styles[styles.length-2] = 'Классика';
console.log(styles);
alert(styles.shift());
console.log(styles);
styles.unshift('Рэп', 'Регги');
console.log(styles);


// Задание №4

var surname = prompt('Введите свою фамилию:');

if (surname == null) {
    surname = '-';
}else {
    while (surname == '') {
        surname = prompt('Это поле не может быть пустым. Введите свою фамилию:');
    }
}

var names = prompt('Введите свое имя:');

if (names == null) {
    names = '-';
}else {
    while (names == '') {
        names = prompt('Это поле не может быть пустым. Введите свою фамилию:');
    }
}
   
var patronymic = prompt('Введите свое отчество');

if (patronymic == null) {
    patronymic = '-';
}else {
    while (patronymic == '') {
        patronymic = prompt('Это поле не может быть пустым. Введите своё отчество');
    }
}
    
var age = +prompt('Введите свой возраст цифрами');

while (isNaN(age) || age == '' || 1 > age || age > 110) {
    age = +prompt('Это поле не может быть не цифровым, пустым и не адекватным. Введите свой возраст корректно!');
}

var gender = confirm('Ваш пол - мужской?'),
    pension;


gender = (gender) ? 'мужской' : 'женский';
pension = ((gender == 'мужской' && age < 65) || (gender == 'женский' && age < 60 )) ? 'Нет' : 'Да';


// if (gender) {
//     gender = 'мужской';
//     if (age < 65) {
//         pension = 'Нет';
//     }else {
//         pension = 'Да';
//     }
// }else {
//     gender = 'женский';
//     if (age < 60) {
//         pension = 'Нет';
//     }else {
//         pension = 'Да';
//     }
// }

alert('Ваше ФИО: ' + surname + ' ' + names + ' ' + patronymic + 
        '\nВаш возраст в годах: ' + age + 
        '\nВаш возраст в днях: ' + (age * 365) + 
        '\nЧерез пть лет вам будет: ' + (age + 5) +
        '\nВаш пол: ' + gender + 
        '\nВы на пенсии: ' + pension);
