// Задание №1

function Animal() {
    this._foodAmount = 60;
}

Animal.prototype.dailyNorm = function(norma) {
    if (!arguments.length) return this._formatFoodAmount() ;

    if ( norma < 50 ) {
        throw new Error("Не жмись, дай коту больше!!!");
    }
    if ( norma > 500 ) {
        throw new Error("Ты чего мне жирдяя ростишь!? Столько давать нельзя! ");
    }

      this._foodAmount = norma;
};

Animal.prototype._formatFoodAmount = function() {
    return this._foodAmount + ' гр.';
};

Animal.prototype.feed = function() {
    console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма');
};

function Cat(name) {
    Animal.apply(this, arguments);
    this.name = name;  
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.feed = function() {
    Animal.prototype.feed.apply(this,arguments);
    console.log('Кот доволен ^_^');
    return this;
};

Cat.prototype.stroke = function() {
    console.log('Гладим кота.');
    return this;
};

var barsik = new Cat('Барсик');

barsik.dailyNorm();
console.log( barsik.dailyNorm() );
console.log( barsik.feed() );
console.log( barsik.stroke().feed() );
barsik.dailyNorm(455);
console.log( barsik.feed().stroke() );
console.log( barsik.feed().stroke().dailyNorm() );
console.log( barsik.name );


// Задание №2

var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        console.log('Hello');
    }
};

function deepClone(clone) {

    if ( typeof(clone) === 'object' ) {
        if ( clone === null ) {
            return clone;
        }

        var cloneIner = Array.isArray( clone ) ? [] : {};

        for ( key in clone ) {
            cloneIner[key] = deepClone(clone[key]);
        }

        return cloneIner;
    }else {

        return clone;
    }

}

var clonedObj = deepClone(initialObj);
clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);
console.log(initialObj);
console.log(clonedObj);


// Задание №3

var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
};

var compareObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
};


function compare(initialObj, compareObj) {
    var initialObjProp = 0, 
        compareObjProp = 0;

    if (initialObj === compareObj) {
        return true;
    }
 
    if (initialObj == null && typeof(initialObj) != "object" && compareObj == null && typeof(compareObj) != "object") {
    
        return false;
    }
    
    for (var prop in initialObj) {
        initialObjProp += 1;
    }

    for (var prop in compareObj) {
        compareObjProp += 1;
        if (!(prop in initialObj) || !compare(initialObj[prop], compareObj[prop])) {
            return false;        
        }
    }        
    return initialObjProp == compareObjProp;
}

initialObj.object.object2.array2[1].name = 'Vasya';
initialObj.array.push(2);

compare(initialObj, compareObj);
console.log(initialObj);
console.log(compareObj);
























































//Задание 3: 
var a = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
};

var b = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
};


function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
 
    if (a == null && typeof(a) != "object" && b == null && typeof(b) != "object") {
    
        return false;
    }
 
    var propertiesA = 0, propertiesB = 0;
    for (var property in a) {
        propertiesA += 1;
    }
    for (var property in b) {
        propertiesB += 1;
        if (!(property in a) || !deepEqual(a[property], b[property])) {
            return false;        
        }
    }        
    return propertiesA == propertiesB;
}

// a.object.object2.array2[1].name = 'Vasya';
//       a.array.push(2);


console.log(deepEqual(a, b));
console.log(a);
console.log(b);