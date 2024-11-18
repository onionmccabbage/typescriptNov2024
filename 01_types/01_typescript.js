// All Typescript gets conveted to JavaScript
// Typescript never makes it to the production code (it is never executed)
{ // this is a javascript scope
    var a = 1;
    var b = 'hello'; // explicitly declare a type
    var c = 'also good'; // implicitly declare a type (best practice)
    // c = 9 // the Typescript language engine will type hint and suggest
    var d = void 0; // no actual valuee yet
}
{
    // a separate scope
    var a = 'ok'; // not the same 'a'
    a = 'changed'; // strings are immutable
    // we may access a ny member of a  string using slicing
    var z = a[0]; // z will be 'c'
    // a[0] = 'C' // nope - we cannot mutate a string
    var d = 'any type is legal';
    d = 3;
    d = true;
    d = [];
    // we can be a bit more specific
    var e = void 0; // the type is ... OR ...
    e = 2;
    e = '2';
    e = false;
    // e = [] // nope
}
{
    var f = ['Latte', 'Flat']; // Typescript offers code completion
    var b = 'Bacteria';
    var p = 'Protozoa';
    var r = 10;
}
{
    var fn = function (x) {
        return "".concat(x); // this is Javascript string interpolation (performant)
    };
    var n = 4;
    fn(n);
}
