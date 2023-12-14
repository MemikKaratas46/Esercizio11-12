// Get dependencies
const express = require('express');
const path = require('path');
const app= express();
// Set our api response
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'Audi.html'))
    });
app.get('/AudiSport', (req, res) => {
    res.sendFile(path.join(__dirname,'AudiSport.html'))
    });
app.get('/StoriaAudi', (req, res) => {
    res.sendFile(path.join(__dirname,'StoriaAudi.html'))
    });
app.get('/InnovazioniTecnologiche', (req, res) => {
    res.sendFile(path.join(__dirname,'InnovazioniTecnologiche.html'))
     });

app.listen(3000, function(){
    console.log('Example app listening on port 3000!')
});