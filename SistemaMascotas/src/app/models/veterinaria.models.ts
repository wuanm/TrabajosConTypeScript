
//tipo de animal permitido
export  type Especie  = 'perro' | 'gato'| 'ave' | 'otro';



//definimos las mascotas
export interface Mascota{
    id: number;
    nombre: string;
    especie: Especie;
    raza: string;
    edad: number;
   estaEnConsulta: boolean;

}


//definimos al cliente
export interface Dueno{
    id: number;
    nombre: string;
    telefono: string;
    mascotaId: number[]
}