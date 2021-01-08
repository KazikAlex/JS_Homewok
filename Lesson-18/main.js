//Задача №1

//    /^[a-z]{3,10}_[a-z]{3,10}-?[\d]{0,4}@[\w.-]{2,20}\.com$/.test('name_surname-1234@gmail.com');

/^[a-z]{3,10}_[a-z]{3,10}(-?\d{0,4})?@([a-z\d](\.|\-)?){2,20}.com$/.test('name_surname-1234@gmail.com');


//Задача №2

var num1 = "+375-25-777-77-77";
// num2 = 375299999999,
// num3 = 8-044-444-44-44,
// num4 = 8033-6666666;

function regExp(phone) {

    // var isValidNumber = phone.match(/^+?(375)|(80)?$/g);
    // var isValidNumber = /^\+?((375)|(8-?0))^0-?()$/.test(num1);
    var isValidNumber = /^\+?$/.test(num1);
    
    return console.log(isValidNumber);
}

regExp(num1);