//FILTER() METHOD
const arr = [34, 219, 109, 2934, 12, 10, 29];

const oddNumbers = arr.filter(number => number % 2)
const evenNumbers = arr.filter(number => !(number % 2))
const check = arr.filter(number => true)

//MAP() METHOD- returns new array, which can be modified using callback function as a parameter.
const double = arr.map(number => number * 2);
const people = arr.map(number => number + " people");

//FOR EACH - changing original Array with forEach and using second parameter which is [index] of element.
arr.forEach((number, index) => arr[index] = number * 2);