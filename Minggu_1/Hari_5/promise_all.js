const getPost = () => fetch('https://jsonplaceholder.typicode.com/posts/1')
const getAuthor = (id) => fetch('https://jsonplacerholder.typicode.com/users/'+id)
const getComment = (id) => fetch('https://jsonplacerholder.typicode.com/users/'+id)

let a = getPost().then(res => res.json())
let b = a.then(res => getAuthor(res.id)).then(res => res.json())
let c = a.then(res => getComment(res.id)).then(res => res.json())
Promise.all([a,b,c]).then(res => console.log(res))