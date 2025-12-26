import { VeterinariaService } from "./services/veterinaria.services.js";
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
        //con el id de la mascota traemos su nombre
        const nombresMascotas = d.mascotaId.map(id => {
            const mascota = veterinaria.buscarMascota(id);
            return mascota ? mascota.nombre : `ID: ${id}`;
        });
        //creamos el texto de la tabla para el nombre
        const listaMostrar = nombresMascotas.join(", ") || "Sin mascotas";
        const fila = `     
             <tr>
                <td>${d.nombre} (ID: ${d.id})</td>
                <td>${listaMostrar}</td>
                
            </tr>
        `;
        tablaCuerpo.innerHTML += fila;
    });
};
//evento para registrar dueño
btnDueno.addEventListener('click', () => {
    const id = Number(document.getElementById('duenoId').value);
    const nombre = document.getElementById('duenoNombre').value;
    if (veterinaria.addNuevoDueno({ id, nombre, telefono: "N/A", mascotaId: [] })) {
        actualizarVista();
        //limpiar los imput
        document.getElementById('duenoId').value = '';
        document.getElementById('duenoNombre').value = '';
    }
});
// Evento para Registrar Mascota
btnMascota.addEventListener('click', () => {
    const id = document.getElementById('mascotaId');
    const nombre = document.getElementById('mascotaNombre');
    const especies = document.getElementById('mascotaEspecie');
    const raza = document.getElementById('mascotaRaza');
    const idsD = document.getElementById('vincularDuenoId');
    //traemos los valores
    const idM = Number(id.value);
    const nombreM = nombre.value;
    const especieM = especies.value;
    const razaM = raza.value;
    const idD = Number(idsD.value);
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
        id.value = '';
        nombre.value = '';
        especies.value = '';
        raza.value = '';
        idsD.value = '';
    }
});
//traemos los input de busqueda del id
const buscarMascota = document.getElementById('idBuscarMascota');
const buscar = document.getElementById('buscar');
const contenedorMascota = document.getElementById('contenedor-descripcion');
const contenedorImagen = document.getElementById('contenedor-imagen');
const NombreMascota = document.getElementById('tituloMascota');
buscar.addEventListener('click', (e) => {
    e.preventDefault();
    const id = Number(buscarMascota.value);
    const mascota = veterinaria.buscarMascota(id);
    // Verificación de seguridad para evitar el error de "null"
    if (!contenedorMascota || !contenedorImagen || !NombreMascota) {
        console.error("No se encontraron los contenedores en el HTML. Revisa los IDs.");
        return;
    }
    if (mascota) {
        // 1. Lógica para la imagen (asegúrate que la carpeta sea ./assets/)
        const rutaImgen = `./dist/app/assets/${mascota.especie.toLowerCase()}.png`;
        // 2. Insertamos la imagen físicamente en el DOM
        contenedorImagen.innerHTML = `<img src="${rutaImgen}" alt="${mascota.nombre}" style="width: 100%; max-width: 200px;">`;
        console.log(`Ruta de la imagen: ${rutaImgen}`);
        NombreMascota.textContent = mascota.nombre;
        // 3. Corregido el error de la comilla en "card"
        const lamascota = `
        <div class="card">
            <p><strong>ID:</strong> ${mascota.id}</p>
            <p><strong>Nombre:</strong> ${mascota.nombre}</p>
            <p><strong>Especie:</strong> ${mascota.especie}</p>
            <p><strong>Raza:</strong> ${mascota.raza}</p>
            <p><strong>Edad:</strong> ${mascota.edad}</p>
            <p><strong>Estado:</strong> ${mascota.estaEnConsulta ? 'En consulta' : 'Fuera de consulta'}</p>
        </div>
        `;
        contenedorMascota.innerHTML = lamascota;
        buscarMascota.value = '';
    }
    else {
        // Manejo de error visual
        NombreMascota.textContent = "No encontrado";
        contenedorMascota.innerHTML = '<p style="color:red;">La mascota con ese ID no existe.</p>';
        contenedorImagen.innerHTML = 'imagen';
    }
});
//# sourceMappingURL=main.js.map