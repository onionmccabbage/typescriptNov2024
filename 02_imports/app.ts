// we often architect with modules, and import stuff
import * as m from './maths' // or maths.ts or maths.js
// import * as u from './util'
// anything exported may be imported like this
import {Dog, Penguin} from './util'
// this is how we import the default
import Arbitrary, {pi} from './maths'
// we may directly import JSON
import * as posts from './data.json'

console.log(posts)

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