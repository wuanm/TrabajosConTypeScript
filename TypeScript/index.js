"use strict";
//Datos del pedido
//1. siki oernutunis estis tres tamaños (Enum)
var Tamano;
(function (Tamano) {
    Tamano["Pequena"] = "Peque\u00F1a";
    Tamano["Mediana"] = "Mediana";
    Tamano["Grande"] = "Grande";
})(Tamano || (Tamano = {}));
//Crear el menu (Datos
const Menu = [
    { id: 1, nombre: "Pepperoni", precio: 150, tamano: Tamano.Grande },
    { id: 2, nombre: "Hawaiana", precio: 180, tamano: Tamano.Mediana },
    { id: 3, nombre: "Mexicana", precio: 200, tamano: Tamano.Pequena }
];
//la clase representa al vendedor que tiene una libreta(carrito de venta)
class CarritoPizza {
    constructor() {
        this.ListaPizza = [];
    }
    //metodo para calcular el precio
    calcularPecioPorTamano(nombreBase, tamano) {
        let precioBase = 100; //precio base para cualquier pizza
        switch (tamano) {
            case Tamano.Pequena:
                return precioBase;
            case Tamano.Mediana:
                return precioBase += 50;
            case Tamano.Grande:
                return precioBase += 100;
            default:
                console.log("Tamano no valido");
        }
        return precioBase;
    }
    //Actualizamos el método de agregar  para usar esta lógica
    venderPizza(nombre, tamano) {
        const precioFinal = this.calcularPecioPorTamano(nombre, tamano);
        ///creamos el objeto pizza
        const nuevaPizza = {
            id: Date.now(),
            nombre: nombre,
            tamano: tamano,
            precio: precioFinal
        };
        //guardamos el pedidio
        this.ListaPizza.push(nuevaPizza);
        console.log(`Orden: ${nombre} ${tamano} -> ${precioFinal}`);
    }
    //metodo para sumar los precios de lo que hay en la libreta (array)
    obtenerTotal() {
        let total = 0;
        for (let i = 0; i < this.ListaPizza.length; i++) {
            total += this.ListaPizza[i].precio;
        }
        return total;
    }
}
//creamos el carrito de instancia
const miVenta = new CarritoPizza();
miVenta.venderPizza("Pepperoni", Tamano.Grande);
miVenta.venderPizza("Hawaiana", Tamano.Mediana);
miVenta.venderPizza("Mexicana", Tamano.Pequena);
//total a pagar
const totalAPagar = miVenta.obtenerTotal();
console.log('-----------------------------------');
console.log('Pizzeria la italina mexicana');
console.log(`El total a pagar es: ${totalAPagar}`);
console.log('-----------------------------------');
