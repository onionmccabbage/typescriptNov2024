// How to write a function ... let me count the ways

function fnA(){
    // this is still fine, but advice is to avoid
}

const fnB = (a)=>{return a*a} // less verbose
// if we have exactly one incoming argument we can leave out the ()
const fnC = a=> a*a // fine is JS // NB use () for TS
const fnD = a=>{return a*a} // if we include the {} we MUST remember return
// if hter is only ONE statement in the body we can leave out {return}
const fnE = (a)=> a*a 
const fnF = ()=>'still works' // if there are no incoming arguments

// functions inside a class
class Demo {
    someMethod(){} // most common syntax
    otherMethod = ()=>{}
}