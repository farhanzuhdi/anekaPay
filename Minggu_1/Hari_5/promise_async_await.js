//promised
function fetchWithPromise(id){
    fetch(endpoint + id)
    .then(response => {
        return response.json();
    })
    .then(response => {
        console.log(response);
    })
}

//async/await
async function fetchWithAsyncAwait(id){
    let response = await fetch(endpoint + id)
    response = await response.json()
    console.log(response)
}