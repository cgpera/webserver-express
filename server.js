const express = require('express');
const hbs = require('hbs');
require('./hbs/helpers')

const port = process.env.PORT || 3000
const app = express();


app.use(express.static(__dirname + '/public'));

// Express HBS
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/parciales')

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'claudio Pera'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
})