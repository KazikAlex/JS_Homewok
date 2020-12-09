// Задание 1
var number = +prompt('Введите любое число');
var numberToSubtract = +prompt('Сколько отнять от предыдущего результата?');
var numberToIncrease = +prompt('Сколько прибавить к предыдущему результату?');
var numberToMultiply = +prompt('На сколько умножить предыдущий результат?');
var numberToDivide = +prompt('На сколько разделить предыдущий результат?');

alert(
	'Формула: (' + number +
	' - ' + numberToSubtract +
	' + ' + numberToIncrease +
	') * ' + numberToMultiply +
	' / ' + numberToDivide +
	'\nРезультат: ' +
	(number - numberToSubtract + numberToIncrease) *
	numberToMultiply / numberToDivide
);