// Задание №4

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

    self.animalFeed = function() {
        console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма');
    };
}

function Cat(name) {
    Animal.apply(this, arguments);

    this.satisfied = function() {
        console.log('Кот доволен ^_^');
    };

    var catFeed = this.animalFeed;

    this.animalFeed = function() {
        catFeed.call(this);
        this.satisfied();
        return this;
    };

    this.stroke = function() {
        console.log('Гладим кота.');
        return this;
    };

}

var barsik = new Cat('Барсик');
barsik.dailyNorm(55);
// console.log( barsik.dailyNorm() );
// console.log( barsik.animalFeed() );

console.log( barsik.stroke().animalFeed() );
barsik.dailyNorm(455);
console.log( barsik.animalFeed().stroke() );
console.log( barsik.animalFeed().stroke().dailyNorm() );
console.log( barsik.name );