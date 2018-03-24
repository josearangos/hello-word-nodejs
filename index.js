const express = require('express')
const PORT = process.env.PORT || 5000
var app=express();

app.listen(PORT,function(){
    console.log("escuchando");
})

app.get('/api/message',function(req, res){
    var nombre=req.param('name');
    res.send('<h1>'+'hola: '+nombre+'</h1>');
});



