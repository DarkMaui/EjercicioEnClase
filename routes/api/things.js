const express = require('express');
var router = express.Router();

var thingsCollection = [];
var datos = {
    "id": 'uuid',
    "clase": '',
    "seccion":'',
    "cupos": 0,
    "campus": '',
    "docente": ''
}; 



thingsCollection.push(
    Object.assign(datos,{"id":"1", "clase":"Matematicas","seccion":"0100","cupos":"30", "campus":"Sagrado corazon","docente":"Jose"})

);

router.get('/', (req, res, next) =>{
    res.status(200).json(thingsCollection);
});


router.post('/',(req, res, next)=>{
    var newElement = Object.assign(datos, req.body, {});
    thingsCollection.push(newElement);

    res.status(200).json(newElement);

}); 

module.exports = router;

