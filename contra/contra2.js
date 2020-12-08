//Задание 1:

function Person (name, _personAge) {
    var self = this;
    self.name = name;
    self._personAge = _personAge;

    function _getFormattedAge() {
        return self._personAge + ' лет.';
    } 

    self.showInfo = function() {
        return console.log('Привет, меня зовут ' + self.name + ', мне ' + _getFormattedAge());
    }
}


function Employee(name, personAge, salary) {
    Person.apply(this, arguments);

    this.salary = salary;

    this.show = function() {
       return console.log('Моя зарплата ' + this.salary + '$.');
    };

    var personShowInfo = this.showInfo;

    this.showInfo = function() {
        personShowInfo.call(this);
        this.show();
        return this;
    };

}

var Vasya = new Employee('Вася', 20, 2000);
Vasya.showInfo();


//Задание 2:

function Person (name, _personAge) {
    this.name = name;
    this._personAge = _personAge;
}

Person.prototype._getFormattedAge = function () {

    return this._personAge + ' лет.';
} 

Person.prototype.showInfo = function() {

    return console.log('Привет, меня зовут ' + this.name + ', мне ' + this._getFormattedAge());
}

function Employee(name, personAge, salary) {
    Person.apply(this, arguments);
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.showInfo = function() {
    Person.prototype.showInfo.apply(this,arguments);
    console.log('Моя зарплата ' + this.salary + '$.');
    return this;
};


var Vasya = new Employee('Вася', 20, 2000);
Vasya.showInfo();
