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

interface Photo2 {
    title: string
    url: string
    prettyPrint(): string // neat way to declare return type of a function
  }

class Snap implements Photo2 {
    albumId:number
    id:number
    title!:string // ! means we guarantee it will be not-null
    url:string
    thumbnailUrl:string
    // NB remember at RUNTIME we may still pass in a non-string and JS will be fine
    // constructor(title:string, url:string) { // only (zero or) one constructor in JS
    constructor(snap:Photo) { // only (zero or) one constructor in JS
        this.title = snap.title
        this.url   = snap.url
    }
    prettyPrint = ():string => {
        return `This snap is ${this.title} url ${this.url}`
    };
}

// make instances
// const s1 = new Snap('wibblywoo', 'http://nonsuch.com')
const s2:Photo = new Snap( // no need to data-type, it is implicit
    {'id'          :346, 
     'albumId'     :3, 
     'title'       :'cat', 
     'thumbnailUrl':'http://nonsuch.ie', 
     'url'         :'bbc.co.uk/nope'})

console.log(s1.title, s1['url']) // either is fine