// Задание №1

function Animal() {
    this._foodAmount = 0;
}

Animal.prototype.dailyNorm = function(norma) {
    if (!arguments.length) return this._formatFoodAmount() ;

    if ( norma < 50 ) {
        throw new Error("Не жмись, дай коту больше!!!");
      }
      if ( norma > 500 ) {
        throw new Error("Ты чего мне жирдяя ростишь!? Столько давать нельзя! ");
      }

      _foodAmount = norma;
};

Animal.prototype._formatFoodAmount = function() {
    return _foodAmount + ' гр.';
};

Animal.prototype.feed = function() {
    console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма');
};

function Cat(name) {
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

barsik.dailyNorm(55);
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
        alert('Hello');
    }
};

function deepClone( typeItem, clone) {
    var cloneInner = {};
    for ( key in clone ) {
        // console.log(typeof(clone[key]));
        if ( typeof(clone[key]) === "function" ) {
            clone[key].toString();
            clone[key].slice(1, length - 1);
            cloneInner[key] = clone[key];
            // deepClone(typeItem, clone);

        }else if ( isArray(clone[key]) ) {
            cloneInner = [];
            cloneInner[key] = clone[key];
        }else {
            cloneInner[key] = clone[key];
        }

    }

    return cloneInner;
}

var clonedObj = deepClone(initialObj);
clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);
console.log(initialObj);
console.log(clonedObj);

// console.log(initialObj.method());
// console.log(clonedObj.method());

