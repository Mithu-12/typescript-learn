"use strict";
let count = 34;
let name1 = 'sermin';
let address = `${name1} stays in BD`;
let IsBoolean = false;
let anyType = true;
let multipleTypes = 34;
if (typeof name1 === "string") {
    console.log('yes it is string');
}
else {
    console.log('nope');
}
class Car {
    constructor(input) {
        this.name = input;
    }
}
class Human {
    constructor(input) {
        this.name = input;
    }
}
let bmw = new Car('BMW 8');
// if(bmw instanceof Car){
//     console.log('its a car')
// }else{
//     its not a car
// }
if (bmw instanceof Human) {
    console.log('its human');
}
else {
    console.log('not human');
}
let str = 'asfdw';
console.log(str.indexOf('a'));
let index = str.indexOf('a');
console.log(index);
let index1 = str.indexOf('a');
