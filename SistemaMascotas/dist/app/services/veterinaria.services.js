export class VeterinariaService {
    constructor() {
        this.mascotas = [];
        this.duenos = [];
    }
    buscarMascota(id) {
        return this.mascotas.find(mascota => mascota.id === id);
    }
    buscarDueno(id) {
        return this.duenos.find(dueno => dueno.id === id);
    }
    //registramos dueño
    addNuevoDueno(nuevoCliente) {
        if (this.buscarDueno(nuevoCliente.id)) {
            console.log(`El dueño ya existe: ${nuevoCliente.nombre} ya existe`);
            return false;
        }
        this.duenos.push(nuevoCliente);
        console.log(`Nuevo dueño registrado: ${nuevoCliente.nombre}`);
        return true;
    }
    addMascotaDeDueno(cliente, mascota) {
        const dueno = this.buscarDueno(cliente.id);
        const mascotaEncontrada = this.buscarMascota(mascota.id);
        if (!dueno) {
            console.log(`El dueno no existe: ${cliente.nombre}`);
            return false;
        }
        if (mascotaEncontrada) {
            console.log(`La mascota ya existe: ${mascotaEncontrada.nombre}`);
        }
        //si el dueño existe, guardamos la mascota
        this.mascotas.push(mascota);
        dueno.mascotaId.push(mascota.id);
        return true;
    }
    //traemos todos los elementos
    getAllMascotas() {
        return this.mascotas;
    }
    getAllDuenos() {
        return this.duenos;
    }
}
//# sourceMappingURL=veterinaria.services.js.map