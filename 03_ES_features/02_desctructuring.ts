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
    // object destructuring
    const program = {name:'Play School', presenter:'Floella', started:1976, end:1984}
    const {name:n, presenter:p, ...rest} = program
    console.log(`${n} presented by ${p} between ${rest['started']} and ${rest['end']}`)

}

{

}