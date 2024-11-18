// All Typescript gets conveted to JavaScript
// Typescript never makes it to the production code (it is never executed)
{ // this is a javascript scope
    const a = 1
    let b:string = 'hello' // explicitly declare a type
    let c = 'also good'    // implicitly declare a type (best practice)
    // c = 9 // the Typescript language engine will type hint and suggest
    let d:string // no actual valuee yet
}
{
    // a separate scope
    let a = 'ok' // not the same 'a'
    a = 'changed' // strings are immutable
    // we may access a ny member of a  string using slicing
    let z = a[0] // z will be 'c'
    // a[0] = 'C' // nope - we cannot mutate a string
    let d:any = 'any type is legal'
    d = 3
    d = true
    d = []
    // we can be a bit more specific
    let e:number | string | boolean // the type is ... OR ...
    e = 2
    e = '2'
    e = false
    // e = [] // nope
}
{
    // we may declare our own types
    type coffee = ['Latte', 'Flat'] // this can be ANYTHING...
    const f:coffee = ['Latte', 'Flat'] // Typescript offers code completion
    // dynamic typing
    type Kingdom = 'Bacteria' | 'Protozoa' | 'Chromista'
    let b:Kingdom = 'Bacteria'
    let p:Kingdom = 'Protozoa'
    type Arbitrary = 'literaly this' | 10 | false | Kingdom // any mix of types
    let r:Arbitrary = 10
}
