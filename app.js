const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;


app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.sendFile(path.resolve('./views/home.html'))
})

app.get('/register', (req, res)=>{
    res.sendFile(path.resolve('./views/register.html'))
})

app.get('/login', (req, res)=>{
    res.sendFile(path.resolve('./views/login.html'))
})

/*app.listen(3000, ()=>{
    console.log("servidor corriendo");
})*/

app.listen(PORT, ()=>{
    console.log(`servidor funcionando en el puerto ${PORT}`);
})
