// let inf = 1 // careful - scope in other modules

{
    // destructuring 
    const values = [42, 47, 3, -6, 99, 32463, -33, 66]
    // sparse array
    // here ... means the rest of the values (zero or more)
    const [first, second, third,, ...rest] = values

    console.log(rest)

    const fn = (x, y, ...rest)=>{
        /// any other parameters end up in rest
    }
}

{

}

{

}