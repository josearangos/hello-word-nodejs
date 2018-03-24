const express = require('express')
const PORT = process.env.PORT || 5000
var app=express();

app.use(express.static('public'));

app.listen(PORT,function(){
    console.log("escuchando");
})

app.get('/api/message',function(req, res){
    var nombre=req.param('name');
    res.send('<center><h1>'+'hola: '+nombre+'</h1></center>');
});



