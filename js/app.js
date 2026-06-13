//1
class Tarea {
    constructor(id, titulo, completada = false) {
        this.id = id;
        this.titulo = titulo;
        this.completada = completada;
    }

    toggleEstado() {
        return this.completada = !this.completada;
    }
}

class GestorTareas {

    arrayDeTareas = [];

    agregarTareas(titulo) {
        const nuevaTarea = this.arrayDeTareas.length + 1;
        this.arrayDeTareas.push(new Tarea(nuevaTarea, titulo));
    }

    listarTareas() {
        this.arrayDeTareas.forEach(tarea => console.log(tarea));
    }

    buscarPorTitulo(titulo) {
        return this.arrayDeTareas.find(tarea => tarea.titulo.toLowerCase() === titulo.toLowerCase());
    }

    listarCompletadas() {
        return this.arrayDeTareas.filter(tarea => tarea.completada);
    }
}


//2
function cargarTareas() {
    return new Promise((resolve) => {

        setTimeout(() => {
            const tareasIniciales = [
                new Tarea(1, "Sacar la basura", true),
                new Tarea(2, "Lavar la ropa"),
                new Tarea(3, "Tender la cama")
            ];
            resolve(tareasIniciales);
        }, 2000);

    });
}

//3
async function ejecutarPrograma() {

    const gestor = new GestorTareas();

    console.log("Cargando tareas...");

    const tareasCargadas = await cargarTareas();


    gestor.arrayDeTareas = tareasCargadas;
    console.log("Tareas cargadas correctamente.");

    console.log("\n--- Lista Inicial ---");
    gestor.listarTareas();

    console.log("\n--- Agregando nueva tarea ---");
    gestor.agregarTareas("Ir al super");
    gestor.listarTareas();

    console.log("\n--- Buscar por título ---");
    console.log("Buscando 'Almorzar'...");
    const busqueda1 = gestor.buscarPorTitulo("Almorzar");

    if (busqueda1) {
        console.log("Tarea encontrada:", busqueda1);
    } else {
        console.log("Resultado: No se encontró la tarea.");
    }

    console.log("\nBuscando 'tender la cama'...");
    const busqueda2 = gestor.buscarPorTitulo("tender la cama");

    if (busqueda2) {
        console.log("Tarea encontrada:", busqueda2);
    } else {
        console.log("Resultado: No se encontró la tarea.");
    }

    console.log("\n--- Lista completadas ---");
    const completadas = gestor.listarCompletadas();
    completadas.forEach(tarea => console.log(tarea));

    //4
    console.log("\n--- Extra: Solo los títulos ---");
    const nuevoArrayDeTareas = gestor.arrayDeTareas.map(tarea => tarea.titulo);
    console.log(nuevoArrayDeTareas);
}


ejecutarPrograma();