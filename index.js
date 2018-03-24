const express = require('express')
const PORT = process.env.PORT || 5000
var app=express();

app.use(express.static('public'));

app.listen(PORT,function(){
    console.log("escuchando");
})

app.get('/api/message',function(req, res){
    var nombre=req.param('name');
    res.send('<style>body{background-color: #f5f5f5;}</style></head><center><h1>'+'Hola '+nombre+'</h1></center>');
});



