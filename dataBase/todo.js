const express = require('express');
const router = express.Router();
const connection = require('./config.js');

router.get('/',(req,res) => { 
    let sql = 'SELECT * FROM todo';
    connection.query(sql,(err,result) => {
        if(err) throw err 
        res.json(result);
    })

})
router.get('/:id',(req,res) => { 
    let sql = 'SELECT * FROM todo WHERE id=?';
    connection.query(sql,[req.params.id],(err,result) => {
        if(err) throw err 
        res.json(result);
    })
})
// router.post('/',(req,res) => { 
//     let sql = 'INSERT INTO todo (text) VALUES (?)';
//     connection.query(sql,[req.body.text],(err,result) => {
//         if(err) throw err 
//         res.json(result);
//     })
// })
// router.put('/:id',(req,res) => { 
//     let sql = 'UPDATE todo SET  text=? WHERE id=?';
//     connection.query(sql,[req.body.text,req.params.id],(err,result) => {
//         if(err) throw err 
//         res.json(result);
//     })
// })

router.delete('/',(req,res) => { 
    let sql = 'DELETE FROM todo ';
    connection.query(sql,(err,result) => {
        if(err) throw err 
        res.json(result);
    })
})

router.delete('/:id',(req,res) => { 
    let sql = 'DELETE FROM todo WHERE id=?';
    connection.query(sql,[req.params.id],(err,result) => {
        if(err) throw err 
        res.json(result);
    })
})


module.exports = router;