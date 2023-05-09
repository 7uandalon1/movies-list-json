export function urlDevelop(baseUrl, json) {
    let array = [];  
        json.map(movieInJson => { 
            let actualPoster = baseUrl + movieInJson.poster;
            array.push(actualPoster);
            return actualPoster;
             
        });
    return array;
};
