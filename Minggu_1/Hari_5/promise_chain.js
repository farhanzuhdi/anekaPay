const getPost = () => fetch('https://jsonplaceholder.typicode.com/posts/1')
const getAuthor = (id) => fetch('https://jsonplacerholder.typicode.com/users/'+id)
const getComment = (id) => fetch('https://jsonplacerholder.typicode.com/users/'+id)

getPost()
.then(postResponse => postResponse.json())
.then(postResponse => getAuthor(postResponse.id)
    .then(authorResponse => authorResponse.json()
        .then(authorResponse =>getComment(postResponse.id)
            .then(commentResponse => commentResponse.json())
            .then(commentResponse => {
                return({postResponse,authorResponse,commentResponse})
                })
            )
        )
        .then(results => {
            console.log(results.postResponse)
            console.log(results.authorResponse)
            console.log(results.commentResponse)
        })
        )
        .catch(error => console.log(error))