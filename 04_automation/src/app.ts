// NB in the generated JS we must remember to import from promises.js
import { fetchPhotos, Photo } from "./promises";

// we need to grab a handle to bits of the HTML DOM
const c = document.getElementById('content') // CAREFUL - this will ONLY work in a browser
const i = document.getElementById('thumbnail')

// make a call to our function
// promises are 'then-able'
fetchPhotos() // this is async will return a Promise
// when fetchPhotos returns something, only then do we ...
    .then( (d:Photo[])=>{ // or Array<Photo>
        console.log(d[0].thumbnailUrl)
        // we can use our DOM id handles to inject into hte web page
        c.innerHTML = d[4]['title'] // grab part of our data
        i.setAttribute('src', d[4]['thumbnailUrl'])
        i.setAttribute('alt', d[4]['title']) // always consider the 'alt' for accesibility
    } )
    .catch( (err)=>{
        console.log(err)
    } )