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
    // ways to declare a method
    prettyPrint():string{ // this is far more common
        return `This snap is ${this.title} url ${this.url}`
    }
    // or
    prettyPrint2 = ():string=>{
        return `This snap is ${this.title} url ${this.url}`
    }
    // or 
    pp = function(){} // old-skool, tr to avoid
}

// make instances
// const s1 = new Snap('wibblywoo', 'http://nonsuch.com')
const s2:Photo = new Snap( // no need to data-type, it is implicit
    {'id'          :346, 
     'albumId'     :3, 
     'title'       :'cat', 
     'thumbnailUrl':'http://nonsuch.ie', 
     'url'         :'bbc.co.uk/nope'})

// console.log(s1.title, s1['url']) // either is fine
console.log(s2.prettyPrint()) // either is fine

// exercising the code
// an array [ {}, {}, {} ] with implicit typing
// const p:Array<Photo> = [{ // Array<> is Typescript
const p:Photo[] = [{ // Photo[] is Typescript - the two are functionaly the same
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
},
{
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://via.placeholder.com/600/771796",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
},
{
    "albumId": 1,
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "https://via.placeholder.com/600/24f355",
    "thumbnailUrl": "https://via.placeholder.com/150/24f355"
}]

let s3 = new Snap( p[0] )
console.log(s3.prettyPrint())