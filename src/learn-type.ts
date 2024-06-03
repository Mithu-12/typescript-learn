let count: number = 34;
let name1: string = 'sermin'

let address: string = `${name1} stays in BD`

let IsBoolean: boolean = false;

let anyType: any = true;

let multipleTypes: string | number = 34

if (typeof name1 === "string"){
    console.log('yes it is string')
} else {
    console.log('nope')
}

class Car {
    name: string;
    constructor(input: string){
        this.name = input;
    }
}
class Human {
    name: string;
    constructor(input: string){
        this.name = input;
    }
}

let bmw = new Car('BMW 8')

// if(bmw instanceof Car){
//     console.log('its a car')
// }else{
//     its not a car
// }



if(bmw instanceof Human){
 console.log('its human')
}else{
    console.log('not human')
}

let str: any = 'asfdw'

console.log(str.indexOf('a'))

let index: number = (str as string).indexOf('a')

console.log(index)


let index1: number = (<string>str).indexOf('a')


