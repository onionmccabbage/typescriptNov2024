

export interface Photo { // interface is the prefered way to declare types
    id           : number
    title        : string
    url          : string
    albumId      : number
    thumbnailUrl : string
}

// make a call to the end-point API using 'fetch' (browser-only)
// we say 'async' to make this non-blocking (await)
// export const fetchPhotos = <T>(x:T):T[]=>{ // either syntax is valid
export const fetchPhotos = async <T>():Promise<Array<T>>=>{ 
    const API = `https://jsonplaceholder.typicode.com/photos`
    try {
        const response  = await fetch(API) // GET by default
        // the response object contains a lot of info
        if (response['status']==200){ // 200 means all good
            // NB response.json will be a Promise
            // or response.xml or response.html, response.text
            return response.json() // this is the JSON ontained within the response object
        }
    }
    catch (err) {
        throw(err)
    }
    finally {
        // this always run
    }

}