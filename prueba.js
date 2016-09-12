function holaMundo(nombre) {
    return "HOLA MUNDO, soy " + nombre;
    // body...
}
var nombre = "Alex Urquizu";
var resultado = holaMundo(nombre);
var etiqueta = document.getElementById("contenedor");
etiqueta.innerHTML = resultado;
//Variables y tipos 
var nombre = "Pedro Rojas";
var edad = 22;
var programador = true;
var langs = ["PHP", "Java", "CSS"];
etiqueta.innerHTML = nombre + "-" + edad;
// diferencia entre var (nibel global)y led  (nivel local o dentro del bloque)
var a = 7;
var b = 2;
if (a === 7) {
    // codlet ae...
    var a_1 = 4;
    var b = 1;
    console.log("dentro del if: " + a_1 + "-" + b);
}
console.log("fuera del if: " + a + "-" + b);
