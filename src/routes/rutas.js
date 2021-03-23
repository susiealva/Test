//framewrok de express
const{Router} = require('express');
//inicializar
const router = Router();

//tambien puede ser asi:
//const express = require(express);
//const router = express.Router();

const herramientas =require('./data.json');
console.log(herramientas);

//ruta para todo
router.get('/', (req, res) =>{
    res.json(herramientas);
});

//ruta x id
router.get('/:id', (req, res) =>{
   const {id} = req.params;
   herramientas.forEach(herramienta => {
       if(herramienta.id == id){
           res.json(herramienta);
           console.log(herramienta.nombre);
       }
   });
   console.log(id);
});

//ruta x complejidad
router.get('/complejidad/:complejidad', (req, res) =>{
    const {complejidad} = req.params;
    const h = [];

    herramientas.forEach(herramienta => {
        if(herramienta.complejidad == complejidad){
            h.push(herramienta);
        }
    });
    res.send(h);
 });

//ruta complejidad de una herramienta
router.get('/complejidad/id/:id', (req, res) =>{
    const {id} = req.params;
    herramientas.forEach(herramienta => {
        if(herramienta.id == id){
            res.json(herramienta.complejidad);
            console.log(herramienta.nombre, herramienta.complejidad);
        }
    });
    console.log(id);
 });

//ruta x utilidad
router.get('/utilidad/:utilidad', (req, res) =>{
    const {utilidad} = req.params;
    const h = [];

    herramientas.forEach(herramienta => {
        if(herramienta.utilidad == utilidad){
            h.push(herramienta);
        }
    });
    res.send(h);
 });
 
 //ruta utilidad de una herramienta
router.get('/utilidad/id/:id', (req, res) =>{
    const {id} = req.params;
    herramientas.forEach(herramienta => {
        if(herramienta.id == id){
            res.json(herramienta.utilidad);
            console.log(herramienta.nombre, herramienta.utilidad);
        }
    });
 });

//ruta x tipo
 router.get("/tipo/:tipo", (req, res) =>{
    const {tipo} = req.params;
    const h = [];

    herramientas.forEach(herramienta => {
        if(herramienta.tipo == tipo){
            h.push(herramienta);
        }
    });
    res.send(h);
 });

 //ruta tipo de una herramienta
router.get('/tipo/id/:id', (req, res) =>{
    const {id} = req.params;
    herramientas.forEach(herramienta => {
        if(herramienta.id == id){
            res.json(herramienta.tipo);
            console.log(herramienta.nombre, herramienta.tipo);
        }
    });
 });

  //ruta x tema o materia
  router.get('/tom/:temaomateria', (req, res) =>{
    const {temaomateria} = req.params;
    const h = [];

    herramientas.forEach(herramienta => {
        if(herramienta.temaomateria == temaomateria){
            h.push(herramienta);
        }
    });
    res.send(h);
 });

//ruta tema o materia de una herramienta
router.get('/tom/id/:id', (req, res) =>{
    const {id} = req.params;
    herramientas.forEach(herramienta => {
        if(herramienta.id == id){
            res.json(herramienta.temaomateria);
            console.log(herramienta.nombre, herramienta.temaomateria);
        }
    });
 });

   //ruta x costo
   router.get('/costo/:costo', (req, res) =>{
    const {costo} = req.params;
    const h = [];

    herramientas.forEach(herramienta => {
        if(herramienta.costo == costo){
            h.push(herramienta);
        }
    });
    res.send(h);
 });

//ruta costo de herramienta
router.get('/costo/id/:id', (req, res) =>{
    const {id} = req.params;
    herramientas.forEach(herramienta => {
        if(herramienta.id == id){
            res.json(herramienta.costo);
            console.log(herramienta.nombre, herramienta.costo);
        }
    });
 });

module.exports = router;