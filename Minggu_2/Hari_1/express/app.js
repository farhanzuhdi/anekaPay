const express = require('express')
    const app = express()
    const port = 3000

app.get(',',(req,res) => {
    res.send('Coba coba')
})

app.listen(port, () =>{
    console.log(`coba port ${port}`)
})