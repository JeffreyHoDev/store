const express = require('express')
const app = express()
const port = 50000

const bodyParser = require('body-parser');
const cors = require('cors');

const bcrypt = require('bcrypt');
const saltRounds = 10;

app.use(bodyParser());
app.use(cors());

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

app.post('/login', (req,res) => {
    const { name, email, password } = req.body
    console.log(password)
    knex('users').select().where('password', password)
    .then(data => {
        if(data.length !== 0){
            res.json("Hi, it is there")
        }
        else {
            res.err("Wrong Credentials")
        }
    //   if(data[0].name === name){
    //     bcrypt.compare(password, data[0].password, function(err, result) {
    //       if(result){
    //         res.json({
    //           name: data[0].name,
    //           email: data[0].email
    //         })
    //       }
    //     });
    //   }
    //   else{
    //     res.json("Wrong Credentials")
    //   }
    })
    .catch(err => res.json(err))
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})