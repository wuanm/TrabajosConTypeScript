import { VeterinariaService } from "./services/veterinaria.services.js";
console.log("hola mundo");
const veterinaria = new VeterinariaService();
//referenciamos el dom
const btnDueno = document.getElementById('btnRegistrarDueno');
const btnMascota = document.getElementById('btnRegistrarMascota');
const tablaCuerpo = document.getElementById('tablaCuerpo');
//funcion  para acttualizar las trabla visualmente
const actualizarVista = () => {
    const duenos = veterinaria.getAllDuenos();
    tablaCuerpo.innerHTML = ''; //limpiamos la tabla
    duenos.forEach((d) => {
        const fila = `     
             <tr>
                <td>${d.nombre} (ID: ${d.id})</td>
                <td>${d.mascotaId.join(", ") || "Sin mascotas"}</td>
            </tr>
        `;
        tablaCuerpo.innerHTML += fila;
    });
};
//evento para registrar dueño
btnDueno.addEventListener('click', () => {
    const id = Number(document.getElementById('duenoId').value);
    const nombre = document.getElementById('duenoNombre').value;
    console.log("ya haciendo click");
    if (veterinaria.addNuevoDueno({ id, nombre, telefono: "N/A", mascotaId: [] })) {
        actualizarVista();
    }
});
// Evento para Registrar Mascota
btnMascota.addEventListener('click', () => {
    const idM = Number(document.getElementById('mascotaId').value);
    const nombreM = document.getElementById('mascotaNombre').value;
    const especieM = document.getElementById('mascotaEspecie').value;
    const razaM = document.getElementById('mascotaRaza').value;
    const idD = Number(document.getElementById('vincularDuenoId').value);
    // Creamos el objeto mascota temporal
    const nuevaMascota = {
        id: idM,
        nombre: nombreM,
        especie: especieM,
        raza: razaM,
        edad: 0,
        estaEnConsulta: false,
        duenoId: idD
    };
    // Usamos tu servicio (que ya tiene la lógica de vincular)
    if (veterinaria.addMascotaDeDueno({ id: idD, nombre: "", telefono: "", mascotaId: [] }, nuevaMascota)) {
        actualizarVista();
    }
});
//# sourceMappingURL=main.js.map