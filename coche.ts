class Coche {

	public color:string;
	public modelo:string;
	public velocidad:number;

	public getColor(){

		return this.color;

	}

	public setColor(color:string){

		this.color = color;

	}

}


var coche = new Coche();
var coche2 = new Coche();
var coche3 = new Coche();
coche.setColor("Rojo");
coche2.setColor("Amarillo");
coche3.setColor("Verde");

console.log("El color del coche es :" + coche.getColor()) ;
console.log("El color del coche es :" + coche2.getColor() ) ;
console.log("El color del coche es :" + coche3.getColor() );

