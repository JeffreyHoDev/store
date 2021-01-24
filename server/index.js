const express = require('express')
const app = express()
const port = 50000

const bodyParser = require('body-parser');
const cors = require('cors');

const moment = require('moment')

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
      database : 'supplychainmanagement',
      timezone: 'UTC'
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
    knex.select().table('request_list').where('status', 'New')
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post('/fetch_fulfilled_request_list', (req,res) => {
    knex.select().table('request_list').where('status', 'Fulfilled')
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post('/fetch_single_request', (req,res) => {
    const { request_id } = req.body
    knex.select().table('request_list').where('request_id', request_id)
    .then(result => {
        const itemDetail = JSON.parse(result[0]["item_details"])
        result[0]["item_details"] = itemDetail
        res.json(result)
    })
    .catch(err => res.json(err))
})


app.post('/fulfill_request', (req,res) => {
    const { request_id, itemObj } = req.body
    knex('request_list').where('request_id', request_id).update('status', 'Fulfilled')
    .then(result => {
        if(result === 1){
            const fieldsToInsert = itemObj.map(item => ({
                "item_name": item.name,
                "item_id": item.item_id,
                "fulfilled_date": new Date(),
                "outbound_quantity": item.quantity
            }))
        
            knex('item_analysis').insert(fieldsToInsert)
            .then(result => res.json(result))
            .catch(err => res.json(err))
        }
        else {
            throw ("Error!")
        }
    })
    .catch(err => res.json(err))
})

app.post('/cancel_request', (req,res) => {
    const { request_id } = req.body
    knex('request_list').where('request_id', request_id).update('status', 'Cancelled')
    .then(result => res.json(result))
    .catch(error => res.json(error))
})

app.post('/get_pie', (req,res) => {
    const { start_date, end_date } = req.body
    knex('item_analysis').select('item_name').sum('outbound_quantity')
    .groupBy('item_name')
    .whereBetween('fulfilled_date', [start_date+" 00:00:00+08", end_date+" 23:59:59+08"])
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post('/get_line', (req,res) => {
    const { start_date, end_date} = req.body
    knex('item_analysis').select('fulfilled_date').sum('outbound_quantity')
    .groupBy('fulfilled_date')
    .whereBetween('fulfilled_date', [start_date+" 00:00:00+08", end_date+" 23:59:59+08"])
    .orderBy('fulfilled_date', 'asc')
    .then(result => {
        let object = {}
        result.map(each => {
            var date =  new Date(each.fulfilled_date)
            var day = date.getDate()
            if(object[day]){
                let currentSum = parseInt(object[day]["sum"])
                object[day]["sum"] = currentSum + parseInt(each.sum)
            }
            else {
                object[day] = {
                    "day": day,
                    "sum": parseInt(each.sum)
                }
            }
        })
        const returnArray = []
        for(const [key,value] of Object.entries(object)){
            returnArray.push(value)
        }
        res.json(returnArray)
    })
    .catch(err => res.json(err))
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})