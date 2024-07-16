const express = require('express')
const app = express();

// app.use('/', (req, res)=> {
//     res.send ('hello world');
// });

app.get('/', (req,res)=>{
    res.send("hi, ini aku method get");
});

app.post('/', (req,res)=>{
    res.send("hi, ini aku method post");
});

app.put('/', (req,res)=>{
    res.send("hi, ini aku method put");
});

app.patch('/', (req,res)=>{
    res.send("hi, ini aku method patch");
});

app.delete('/', (req,res)=>{
    res.send("hi, ini aku method delete");
});

app.listen(3000,()=>{
    console.log ("server running on port: 3000");
});