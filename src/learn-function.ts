function sum(a : number, b?: number): number{
    if(b){
    return a + b
    } return a
}

console.log(sum(3, 5))
// console.log(sum(3))