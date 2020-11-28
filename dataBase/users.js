const express = require('express');
const router = express.Router();
const connection = require('./config.js');

router.get('/',(req,res) => { 
    let sql = 'SELECT * FROM users';
    connection.query(sql,(err,result) => {
        if(err) throw err 
        res.json(result);
    })
})
router.get('/:id',(req,res) => { 
    let sql = 'SELECT * FROM users WHERE id=?';
    connection.query(sql,[req.params.id],(err,result) => {
        if(err) throw err 
        res.json(result);
    })
})
router.post('/',(req,res) => { 
    let sql = 'INSERT INTO users (firstName,lastName,email,password) VALUES (?, ?, ?, ?)';
    connection.query(sql,[req.body.firstName,req.body.lastName,req.body.email,req.body.password],(err,result) => {
        if(err) throw err 
        res.json(result);
    })
})
router.put('/:id',(req,res) => { 
    let sql = 'UPDATE users SET  firstName=?, lastName=?, email=?, password=? WHERE id=?';
    connection.query(sql,[req.body.firstName,req.body.lastName,req.body.email,req.body.password,req.params.id],(err,result) => {
        if(err) throw err 
        res.json(result);
    })
})

router.delete('/',(req,res) => { 
    let sql = 'DELETE FROM users ';
    connection.query(sql,(err,result) => {
        if(err) throw err 
        res.json(result);
    })
})

router.delete('/:id',(req,res) => { 
    let sql = 'DELETE FROM users WHERE id=?';
    connection.query(sql,[req.params.id],(err,result) => {
        if(err) throw err 
        res.json(result);
    })
})


module.exports = router; 