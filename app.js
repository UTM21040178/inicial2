const { type } = require("os")

const mongoose = require('mongoose')
const urlbd = "mongodb://localhost:27017/UTMA"

mongoose.connect(urlbd)
.then(()=>{
console.log("funciona la conexion")
})
.catch((error)=>{
    console.log("No funciona la conexion",error)
})

const EsquemaAlumnos = new mongoose.Schema({
    name:{
        type: String
    },

    apepat:{
     type: String
    },

    edad:{
        type: Number
    },


})

const modeloAlumnos = new mongoose.model ("Tabla de alumnos", EsquemaAlumnos)

modeloAlumnos.create({
    name: "Eduardo",
    apepat: "Lara",
    edad: 20
})