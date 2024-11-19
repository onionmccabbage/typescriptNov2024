// generators have been available since ES6 (2015)
// they are VERY efficient

// we MUST use 'function*' ( not ()=>{} )
function* fib(){
    // generate the next member in the fibbonacci sequence
    // i.e. 1, 2, 3, 5, 8, 13, 21, 34 ...
    let first=1, second=2
    // for(;;){ // endless loop
    for (let i=0; i<Number.POSITIVE_INFINITY; i++) { // also an endless loop
    // for(let i=0;i<7;i++){ // we have an end
        let sum = first+second
        yield sum // we yield (not return) so the function* does not end
        first = second
        second = sum
    }
}
// exercise the code
const prettyPrint = (item:IteratorResult<number>)=>{
    // return JSON.stringify(item)
    return item.value
}
const g = fib() // an instance of our generator
console.log( g.next() ) // 3
console.log( g.next() ) // 5
console.log( g.next() ) // 8
console.log( g.next().value ) // 13
console.log( g.next().value )
console.log( g.next().value ) 
console.log( g.next().value ) 
console.log( g.next().value )
console.log( g.next().value ) 
console.log( g.next().value ) // undefined - the generator is exhausted