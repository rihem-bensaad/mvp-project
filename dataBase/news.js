const express = require('express');
const router = express.Router();
const connection = require('./config.js');

router.get('/',(req,res) => { 
    let sql = 'SELECT * FROM news';
    connection.query(sql,(err,result) => {
        if(err) throw err 
        res.json(result);
    })

})
router.get('/:id',(req,res) => { 
    let sql = 'SELECT * FROM news WHERE id=?';
    connection.query(sql,[req.params.id],(err,result) => {
        if(err) throw err 
        res.json(result);
    })
})
router.post('/',(req,res) => { 
    let sql = 'INSERT INTO news (userName,password) VALUES (?, ?)';
    console.log([req.body.userName,req.body.password])
    connection.query(sql,[req.body.userName,req.body.password],(err,result) => {
        if(err) throw err 
        res.json(result);
    })
})
router.put('/:id',(req,res) => { 
    let sql = 'UPDATE news SET  userName=?, password=?, WHERE id=?';
    connection.query(sql,[req.body.userName,req.body.password,req.params.id],(err,result) => {
        if(err) throw err 
        res.json(result);
    })
})
router.delete('/',(req,res) => { 
    let sql = 'DELETE FROM news ';
    connection.query(sql,(err,result) => {
        if(err) throw err 
        res.json(result);
    })
})
router.delete('/:id',(req,res) => { 
    let sql = 'DELETE FROM news WHERE id=?';
    connection.query(sql,[req.params.id],(err,result) => {
        if(err) throw err 
        res.json(result);
    })
})


module.exports = router; 