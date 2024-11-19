// we often architect with modules, and import stuff
import * as m from './maths' // or maths.ts or maths.js
// import * as u from './util'
// anything exported may be imported like this
import {Dog, Penguin} from './util'
// this is how we import the default
import Arbitrary, {pi} from './maths'
// we may directly import JSON
import * as posts from './data.json' // NB the JSON gets parsed into a structure
// string interpolation - you can put any pure JS inside ${}
const message = `Is it an object... ${typeof(posts)=='object'}`
// JSON
const str = JSON.stringify(posts) // convert to text string
const obj = JSON.parse(str) // parse string to a structure

console.log(posts, message)

type Animal = Penguin | Dog // we have useable types
const gromit:Dog = {
    breed:['plasicene', 'silicone'],
    yearOfBirth:1991
}
const feathers:Animal = {
    breed:'rock hopper',
    yearOfBirth:1998
}





console.log(m.pi, m.phi, m.sqrRootTwo)