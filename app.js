//Definir variables del servidor
const express = require('express'); //HTTP
const hbs = require('hbs'); //HTML - Dinamicos
const bodyParser = require('body-parser');  //Procesar POST
const port = process.env.port || 3000; // Puertos

const app = express();
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', ()=>{});

//Middleware - use
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/login', (req,res) =>{
    res.render('login');
}); 

app.post('/index', (req, res) => {
    res.render('dashboard', {
        nombre: "Caleb",
        email: "Caleb"
    });//Vista dinámica - HTML dinámico
});

app.get('*', (req,res) =>{
    res.render('404');
});

app.listen(port, ( ) => {
    console.log('El servidor express está corriendo en el puerto: ', port);
});

