const express = require('express')
const app = express()
const port = 50000

const knex = require('knex')({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'Reunion94!',
      database : 'supplychainmanagement'
    }
});

app.get('/', (req,res) => {
    res.send("Hello")
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})