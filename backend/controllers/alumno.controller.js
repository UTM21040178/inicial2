import{modeloAlumnos} from "../models/alumno.model.js"

modeloAlumnos.create({
    name: "Eduardo",
    apepat: "Lara",
    edad: 20
})

export const test = ()=> {
    console.log ("se esta llamando correctamente el controlador")
}