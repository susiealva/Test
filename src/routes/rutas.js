

//framewrok de express
const{Router} = require('express');
//inicializar
const router = Router();

//tambien puede ser asi:
//const express = require(express);
//const router = express.Router();

const herramientas =require('./data.json');
console.log(herramientas);

//rutas
router.get('/', (req, res) =>{
    res.json({"name":"Susie"});
});

module.exports = router;

