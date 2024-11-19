// NB in the generated JS we must remember to import from promises.js
import { fetchPhotos, Photo } from "./promises";
// make a call to our function
// promises are 'then-able'
fetchPhotos() // this is async will return a Promise
// when fetchPhotos returns something, only then do we ...
    .then( (d:Photo[])=>{ // or Array<Photo>
        console.log(d[0].thumbnailUrl)
    } )
    .catch( (err)=>{
        console.log(err)
    } )