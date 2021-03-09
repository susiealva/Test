

//framewrok de express
const{Router} = require('express');
//inicializar
const router = Router();

//tambien puede ser asi:
//const express = require(express);
//const router = express.Router();


//rutas
router.get('/', (req, res) =>{
    res.json({"name":"Susie"});
});

module.exports = router;

