// JS has no idea of interface, but can do classes
// NB  ...but classes are just OBJECTS in JS

class Snap {
    title:string
    url:string
    // NB remember at RUNTIME we may still pass in a non-string and JS will be fine
    constructor(title:string, url:string) { // only (zero or) one constructor in JS
        this.title = title
        this.url   = url
    }
}

// make instances
const s1 = new Snap('wibblywoo', 'http://nonsuch.com')
console.log(s1.title, s1['url']) // either is fine