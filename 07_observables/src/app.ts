

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
const suggest = (arr:string[], query:string):string[]=>{
    return arr.filter( (item)=>{
        return query.length>0 && item.startsWith(query)
    } )
}

// a cleanup utility
const cleanUpUtil = (container:HTMLElement)=>{
    container.innerHTML = ''
}

// here is the function for append any search suggestions into the web page
const appendResults = (container:HTMLElement, results:string[])=>{
    for (const result of results) {
        // we need a fresh <li> for each suggestion
        const li = document.createElement('li')
        const innerText = document.createTextNode(result)
        li.appendChild(innerText)
        container.appendChild(li)
    }
}
// we need to grab some bits of the DOM
const searchBox:HTMLElement = document.querySelector('#search') // or .getElementById('search)
const results:HTMLElement   = document.querySelector('#results')
