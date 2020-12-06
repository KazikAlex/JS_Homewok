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

        var arr = word.filter(function(item, index) {
            var name = item.split(/\s/).join();
            if (name != '') {
                var obj = {};
                obj.name = name;
                var counter = 1;
                for(var index; index < word.length; index++) {
                    if (item == word[index+1]) {
                        counter++;
                    }
                }
                obj.count = counter;
                // return obj;
            }
        });
    
        
    
    // word.forEach(element => {
    //     if (element != '') {
    //         var choiseWord = element.split(/\s/).join();
    //         var counter = 1;

    //         for (var i = 0; i < word.length; i++) {
    //             if (element == word[i+1]) {
    //                 counter++;
    //             }
    //         }
    //         arr.push({name: choiseWord, count: counter});
    //     }
    // });

    console.log(arr);
}

frequentWord('Привет, студент! Студент... Как дела, студент?');