//Задача №1

/^[a-z]{3,10}_[a-z]{3,10}(-?\d{0,4})?@([a-z\d](\.|\-)?){2,20}.com$/.test('name_surname-1234@gmail.com');


//Задача №2

var num1 = '+375-33-777-77-77',
num2 = '375299999999',
num3 = '8-044-444-44-44',
num4 = '8033-6666666';

function regExp(phone) {
    var isValidNumber = /^((\+?375)|(8-?0))-?(?:25|29|33|44)-?[1-9]{1}\d{2}-?\d{2}-?\d{2}$/.test(phone);
    
    return console.log(isValidNumber);
}

regExp(num1);
regExp(num2);
regExp(num3);
regExp(num4);


//Задача №3

var enterString = 'Введите строку на русском языке:';

function vowelCounter(strEnt) {
    var counter = strEnt.match(/[аоиеёэыуюяaeiou]/ig)
    if (counter != null) {
        return console.log('В этом предложении глассных ' + counter.length + ' шт.');
    }else {
        return console.log('В этом предложении глассных нет глассных');
    }
    
}

vowelCounter(enterString);