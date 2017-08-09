var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = femaleNames.concat(maleNames);
console.log(allNames);

var newName = 'Misandre';

if (allNames.indexOf(newName) === -1) {
    allNames.push(newName);
    console.log(allNames)
} else {
    console.log('Already exists in the array, pls. enter new name.');
};