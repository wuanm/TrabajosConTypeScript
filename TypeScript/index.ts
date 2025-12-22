//Datos del pedido
//1. siki oernutunis estis tres tamaños (Enum)
enum Tamano{
    Pequena="Pequeña",
    Mediana='Mediana',
    Grande='Grande'
}

//2- El molde es una pizza (interface)
interface Pizza{
    id:number;
    nombre: string;
    precio: number;
    tamano : Tamano;
}

//3. el molde de un pedido
interface Pedido{
    cliente:string;
    pizzas: Pizza[];
    total: number;
}

//Crear el menu (Datos
const Menu: Pizza[] =[
    {id:1,nombre: "Pepperoni", precio:150,tamano: Tamano.Grande},
    {id:2,nombre: "Hawaiana", precio:180,tamano: Tamano.Mediana},
    {id:3,nombre:"Mexicana",precio:200,tamano:Tamano.Pequena}
]

//la clase representa al vendedor que tiene una libreta(carrito de venta)
class CarritoPizza{
    private ListaPizza: Pizza[]=[];
    constructor(){}

    //metodo para calcular el precio
    calcularPecioPorTamano(nombreBase: string,tamano:Tamano):number{
        let precioBase:number=100; //precio base para cualquier pizza

        switch (tamano){
            case Tamano.Pequena:
                return precioBase;
            case Tamano.Mediana:
                return precioBase+=50;
            case Tamano.Grande:
                return precioBase+=100;
            default:
                console.log("Tamano no valido")
        }
        return precioBase;
    }
    //Actualizamos el método de agregar  para usar esta lógica
    venderPizza(nombre: string, tamano: Tamano): void{
        const precioFinal: number= this.calcularPecioPorTamano(nombre,tamano);

        ///creamos el objeto pizza
        const nuevaPizza: Pizza={
            id: Date.now(),
            nombre: nombre,
            tamano: tamano,
            precio: precioFinal  
        };
        //guardamos el pedidio
        this.ListaPizza.push(nuevaPizza);
        console.log(`Orden: ${nombre} ${tamano} -> ${precioFinal}`)

    }

   //metodo para sumar los precios de lo que hay en la libreta (array)
   obtenerTotal():number{
    let total:number=0;
    for (let i=0; i<this.ListaPizza.length; i++){
        total += this.ListaPizza[i].precio;
    }
    return total;
   }
}

//creamos el carrito de instancia
const miVenta = new CarritoPizza();

miVenta.venderPizza("Pepperoni",Tamano.Grande);
miVenta.venderPizza("Hawaiana",Tamano.Mediana);
miVenta.venderPizza("Mexicana",Tamano.Pequena);

//total a pagar
const totalAPagar:number= miVenta.obtenerTotal();

console.log('-----------------------------------');
console.log('Pizzeria la italina mexicana');
console.log(`El total a pagar es: ${totalAPagar}`);
console.log('-----------------------------------');