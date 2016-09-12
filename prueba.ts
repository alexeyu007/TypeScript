function holaMundo(nombre) {

return "HOLA MUNDO, soy "+ nombre;
	// body...
}

var nombre = "Alex Urquizu";
var resultado = holaMundo(nombre);

var etiqueta = <HTMLElement>document.getElementById("contenedor");

 etiqueta.innerHTML  = resultado;

 //Variables y tipos 
 var nombre: string ="Pedro Rojas";
 var edad: number= 22;
 var programador: boolean = true;
 var langs: Array<string> = ["PHP","Java","CSS"];




etiqueta.innerHTML = nombre + "-" + edad ;


// diferencia entre var (nibel global)y led  (nivel local o dentro del bloque)

var a  = 7 ;
var b = 2;

if(a === 7) {
	// codlet ae...
let a =4;
var b =  1;

console.log("dentro del if: "+ a +"-"+b);
}

console.log("fuera del if: "+a+"-"+b);