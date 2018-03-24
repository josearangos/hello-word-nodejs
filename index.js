const express = require('express')
const PORT = process.env.PORT || 5000
var app=express();

app.use(express.static('public'));

app.listen(PORT,function(){
    console.log("escuchando");
})

app.get('/api/message',function(req, res){
    var nombre=req.param('name');
    if(nombre){
        res.send('<style>body{background-color: #f5f5f5;font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;color: #333;}</style></head><center><h1>'+'Hola '+nombre+'</h1></center>');

    } else {
        res.send('<style>body{background-color: #f5f5f5;font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;color: #333;}</style></head><center><h1>'+' No escribiste tu nombre :(' + '</h1></center>');

    }
});



