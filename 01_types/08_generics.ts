// a common problem - we may not know beforehand what exactly will be the type

// here we are limited to any or to very specific types
const zeroethElement = (a:string| Array<number> | Array<boolean>)=>{ // any[]
    return a[0]
}

// here we will allow ANY iterable type - generic type <T> makes it a generic
// NB we are not obliged to return the same type
const zeroethElementGeneric = <Type>(a:Type | Array<Type>):Type=>{ // usually just <T>
    return a[0]
}

// exercise the code
{
    // careful A quick note about the variables declared error it is because VSCode is aware about the other files and they are not block scoped
    let a = 'how does this look'
    let b = [4,3,2,1]
    let z = ['4','3','2','1']
    let y = [{},{},{},{}]
    let a_a:Array<Array<object>>  = [[{}],[{}],[{}],[]]

    console.log( zeroethElementGeneric(a), zeroethElementGeneric(b) ) // 'h' 4
    console.log( zeroethElementGeneric(y), zeroethElementGeneric(z) ) //
}