// sometimes we need to nsure we have a particular type before trying to use it
// (remember - there is no TS at runtime)

// a function to return the size of an entity
const eg = (sn:string | number)=>{
    // return how many members in the collection 'sn', or the number to a specific size (dp)
    if (typeof sn === 'number'){
        // return to 2dp
        return sn.toFixed(2) // the ts engine offers hints for number-friendly things
    } else if (typeof sn == 'string'){
        // return the length of the string
        return sn.length //ts will code-hint string options here
    } else {
        // ummmmmm
    }
}

let s = 'this is a string'
let n = 3.45678

console.log( eg(s) )
console.log( eg(n) )