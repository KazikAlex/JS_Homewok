//Задача №1

var nameArray = ['Вася', 'Петя', 'Маша'];

function nameArrayObjects(arr) {
    var arrObjects = arr.map(function(name) {

        return {name};
    });

    return arrObjects;

};

nameArrayObjects(nameArray);


//Задача №2

//"Текущее время : 00 : 13 : 24"

var timeArray = ['00', '13', '24'];

function realTime(arr) {
    var time = arr.join(' : ');

    return `"Текущее время : ${time}"`;
}

console.log(realTime(timeArray));



//Задача №3 

//вариант 1
function vowelCounter() {
    var str = prompt('Введите строку на русском языке:');
    var counter = 0;

    strArr = str.split('');

    for(var key of strArr) {
        if ("аоиеёэыуюя".includes(key)) {
            counter += 1;
        }
    } 

    return counter;
}

alert(vowelCounter());

//вариант 2
function vowelCounter() {
    var str = prompt('Введите строку на русском языке:');

    var counter = str.split('').filter(function(item) {
        return "аоиеёэыуюя".includes(item);
    });

    alert(counter.length);
}

vowelCounter();


//Задача №4

function countSentencesLetters(text) {
    var textPart = text.split(/[!?.]/);

    textPart.forEach(element => {
        if (element.split(/[,\s]/).join('').length > 0) {
            var a = element.split(/[,\s]/).join('').length;
            console.log(`${element}: Letters quantity is: ${a}`);
        }
    });
}

countSentencesLetters('Привет, студент! Студент... Как дела, студент?');


//Задача №5

function frequentWord(text) {
    var word = text.toLowerCase().split(/[,!?.\s]/);
    var b = [];
    
    var arr = word.filter(function(item, index) {
        var name = item.split(/\s/).join();
        
        if (name != '') {
            var obj = {};
            obj.name = name;
            var counter = 1;
            for(var index; index < word.length; index++) {
                if (item == word[index+1]) {
                    counter++;
                    delete word[index+1];
                }
            }
            obj.count = counter;
            b.push(obj);
        }      
    });

    var c = [];

    c.push(b[0]);

    for (var x = 0; x < b.length-1; x++) {
        if (c[0].count > b[x+1].count) {
            continue;
        }else {
            c.shift();
            c.push(b[x+1]);
        }
    }

    return console.log(`Максимальное число повторений у слова "${c[0].name}" - ${c[0].count}`)

}

frequentWord('Привет, студент! Студент... Как дела, студент?');