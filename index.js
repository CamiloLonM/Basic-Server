
const express = require('express');
const path  = require('path');
const bodyParser = require('body-parser');
const app = express();

// Importar modulos 
const routes = require('./routes/index')    // router


// Configuracion ( SETTINGS )
app.set(`port`, process.env.PORT || 3000);
app.set('views', path.join( __dirname, 'views'));    //Definir la ruta a express de la  carpeta views
app.set('view engine', 'ejs');                      // Motor de plantilla



// Middlewares
app.use((req,res,next) => {
    console.log(`${req.url} -${req.method}`);       //Solicitando la url y el metodo de la petición
    next();
});

app.use(bodyParser.json());                                // Importacion del modulo bodyParser--metodo Json
app.use(bodyParser.urlencoded({extended: false}));         // Otro metodo urlencode formulario y {parametros} 

// Routes URL

app.use(routes);

// Archivos estaticos (Static files) Archivos de js css
app.use(express.static(path.join( __dirname , 'public')));        //Ubicacion del servidor de archivos estaticos


// Start the server
app.listen(app.get('port'), () => {
    console.log(`Server on Port:`, app.get('port'));
});