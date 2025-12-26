import  { Mascota } from "../models/veterinaria.models.js";
import  { Dueno } from "../models/veterinaria.models.js";   
import { Especie } from "../models/veterinaria.models.js";




export class VeterinariaService{
    private mascotas: Mascota[] = [];
    private duenos: Dueno[] = [];

 

    constructor(){}

    buscarMascota(id:number): Mascota | undefined{
        return this.mascotas.find(mascota => mascota.id === id)
    }

    buscarDueno(id: number): Dueno |undefined{
        return this.duenos.find(dueno => dueno.id === id)
    
    }

    //registramos dueño
    addNuevoDueno( nuevoCliente: Dueno): boolean{
        if(this.buscarDueno(nuevoCliente.id)){
            console.log(`El dueño ya existe: ${nuevoCliente.nombre} ya existe`)
            return false;

        }
        this.duenos.push(nuevoCliente);
        console.log(`Nuevo dueño registrado: ${nuevoCliente.nombre}`)
        return true;

    }

    addMascotaDeDueno(cliente: Dueno, mascota: Mascota): boolean{
        const dueno = this.buscarDueno(cliente.id);
        const mascotaEncontrada = this.buscarMascota(mascota.id);
    

        if(!dueno){
            console.log(`El dueno no existe: ${cliente.nombre}`)
            return false;
        }

        if(mascotaEncontrada){
            console.log(`La mascota ya existe: ${mascotaEncontrada.nombre}`)

        }
        //si el dueño existe, guardamos la mascota
        this.mascotas.push(mascota);
        dueno.mascotaId.push(mascota.id);
        return true;


    }

    //traemos todos los elementos
    getAllMascotas(): Mascota[]{
        return this.mascotas;
    }

    getAllDuenos(): Dueno[]{
        return this.duenos;
    }


    



    

   

  
}