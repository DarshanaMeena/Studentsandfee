const express = require('express')
const mysql = require('mysql2')
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'management'
});
db.connect((res,err) => {
    if(err) {
        console.log(err)
    } else 
    console.log('Data base connection succfully!')
})
module.exports=db;