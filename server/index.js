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

app.post('/verify', (req,res) => {
    const { name, email, password } = req.body
    knex('users').select().where({
        'email': email,
        'role': 'Admin',
        'password': password
    })
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

app.post('/add_new_user', (req,res) => {
    const {name, email, role, password} = req.body
    knex('users').insert({
        "name": name,
        "email": email,
        "role": role,
        "password": password
    })
    .then(data => res.json(data))
    .catch(err => res.json(err))
})

app.post('/delete_user', (req,res) => {
    const { id } = req.body
    knex('users').where('id', id).del()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post('/fetch_users', (req,res) => {
    knex.select('id', 'name', 'email', 'role').from('users')
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post('/fetch_single_user', (req,res) => {
    const { id } = req.body
    knex.select('id', 'name', 'email', 'role').from('users').where('id', id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post('/add_new_item', (req,res) => {
    const { item_name, brand, available_quantity, reserved_quantity, notice } = req.body
    knex('items_management').insert({
        "item_name": item_name,
        "brand": brand,
        "available_quantity": available_quantity,
        "reserved_quantity": reserved_quantity,
        "notice": notice
    })
    .then(result => {
        if(result.name === 'error'){
            res.json(result.detail)
        }
        else {
            res.json({
                "status": "OK",
                "message": "Added Item Success"
            })
        }
    })
    .catch(err => res.json(err))
})

app.post('/fetch_store_items', (req,res) => {
    knex.select().table('items_management')
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post('/fetch_single_item', (req,res) => {
    const { item_id } = req.body
    knex('items_management').where('item_id', item_id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post('/update_single_item', (req,res) => {
    const { item_id, available_quantity, reserved_quantity } = req.body
    knex('items_management').where('item_id', item_id)
    .update({
        "available_quantity": available_quantity,
        "reserved_quantity": reserved_quantity
    })
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post('/submit_request', (req,res) => {
    const { collection_date, item_details, project_name, requestor } = req.body
    knex('request_list').insert({
        "collection_date": collection_date,
        "item_details": JSON.stringify(item_details),
        "project_name": project_name,
        "requestor": requestor,
        "status": "New"
    })
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post('/fetch_request_list', (req,res) => {
    knex.select().table('request_list')
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})