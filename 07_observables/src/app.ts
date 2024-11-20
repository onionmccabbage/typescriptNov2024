

// here are some suggested prompts
const testData:string[] = [
    'people',
    'planets',
    'species',
    'vehicles',
    'starships'
]

// check for a match
//               testData      whatever the useer typed
const suggest = (arr:string[], query:string)=>{
    return arr.filter( (item)=>{
        return query.length>0 && item.startsWith(query)
    } )
}

// a cleanup utility
const cleanUpUtil = (container:HTMLElement)=>{
    container.innerHTML = ''
}