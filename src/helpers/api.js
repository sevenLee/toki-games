// import fetchJsonp from 'fetch-jsonp'

export default function callApi(endpoint, method = 'get', body) {
    return new Promise((resolve, reject) => {
        fetch(`/${endpoint}`, {
            headers: { 'content-type': 'application/json' },
            method,
            body: JSON.stringify(body),
        })
        .then(response => {
            // debugger
            if (!response.ok) {
                // throw new Error('Network response was not ok.');
                reject(new Error("Whoops!"));
            }else{
                return response.json().then(json => ({ json, response }))
            }
        })
        .then(({ json, response }) => {
            debugger
            if (!response.ok) {
                reject(json);
            }
            return json;
        })
        .then(
            response => response,
            error => {
                console.log('### error:', error)
            }
        )
    })
}