// Задание №1

function Animal(name) {
    
    var foodAmount = 0,
        self = this;

        self.name = name;

    self.dailyNorm = function(norma) {
        if (!arguments.length) return formatFoodAmount() ;

        if ( norma < 50 ) {
            throw new Error("Не жмись, дай коту больше!!!");
          }
          if ( norma > 500 ) {
            throw new Error("Ты чего мне жирдяя ростишь!? Столько давать нельзя! ");
          }
    
          foodAmount = norma;
    };

    function formatFoodAmount() {
        return foodAmount + ' гр.';
    }

    self.feed = function() {
        console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма');
    };
}

function Cat(name) {
    Animal.apply(this, arguments);

    this.satisfied = function() {
        console.log('Кот доволен ^_^');
    };

    var animalFeed = this.feed;

    this.feed = function() {
        animalFeed.call(this);
        this.satisfied();
        return this;
    };

    this.stroke = function() {
        console.log('Гладим кота.');
        return this;
    };

}

// Cat.prototype = Animal;

var barsik = new Cat('Барсик');

// console.log( barsik );
// console.log( barsik.feed );
// console.log( barsik.animalFeed );


barsik.dailyNorm(55);
console.log( barsik.dailyNorm() );
console.log( barsik.feed() );

console.log( barsik.stroke().feed() );
barsik.dailyNorm(455);
console.log( barsik.feed().stroke() );
console.log( barsik.feed().stroke().dailyNorm() );
console.log( barsik.name );