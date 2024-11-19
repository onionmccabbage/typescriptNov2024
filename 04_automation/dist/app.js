import { fetchPhotos } from "./promises.js";
// make a call to our function
// promises are 'then-able'
console.log('nearly lunch')
fetchPhotos() // this is async will return a Promise
    // when fetchPhotos returns something, only then do we ...
    .then((d) => {
        console.log(d[0]);
})
    .catch((err) => {
    console.log(err);
});
