// JS has no idea of interface, but can do classes
// NB  ...but classes are just OBJECTS in JS

interface Photo {
    //some properties
    albumId:number
    id:number
    title:string
    url:string
    thumbnailUrl:string
    // some methods
    // any property or method may be optional  using '?'
    prettyPrint?: ()=>{} // no implementation
}

class Snap implements Photo {
    albumId:number
    id:number
    title!:string // ! means we guarantee it will be not-null
    url:string
    thumbnailUrl:string
    // NB remember at RUNTIME we may still pass in a non-string and JS will be fine
    constructor(title:string, url:string) { // only (zero or) one constructor in JS
        this.title = title
        this.url   = url
    }
    prettyPrint = ():string => {
        return `This snap is ${this.title} url ${this.url}`
    };
}

// make instances
const s1 = new Snap('wibblywoo', 'http://nonsuch.com')
console.log(s1.title, s1['url']) // either is fine