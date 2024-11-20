// see https://www.typescriptlang.org/docs/handbook/2/classes.html#private

class Base {
    private x = 0 //typescript has 'private'
}
const b = new Base()
// Can't access from outside the class
// console.log(b.x)

class Derived extends Base {
    showX() {
        // Can't access in subclasses
        // console.log(this.x)
    }
}