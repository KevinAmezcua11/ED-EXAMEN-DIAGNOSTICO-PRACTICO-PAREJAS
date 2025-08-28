const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let tareas = [];
let idTarea = 1;

app.get('/', (req, res) => {
    res.json({
        message: "¡Bienvenido!"
    });
});

/* PUNTO 2 */
/* a. Crear una NUEVA tarea */
app.post('/newTarea', (req, res) => {
    try {
        const { titulo, descripcion } = req.body;
        
        if (!titulo) {
            return res.status(400).json({ message: "El título es obligatorio" });
        }

        const newTarea = {
            id: idTarea++,
            titulo,
            descripcion: descripcion || "",
            completada: false,
            creadaEn: new Date()
        };

        tareas.push(newTarea);

        return res.status(200).json({
            message: "Tarea creada con éxito",
            tarea: newTarea
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error al crear tarea",
            error: error
        });
    }
});

/* b. Obtener TODAS las tareas */
app.get('/getTareas', (req, res) => {
    try {
        return res.status(200).json({
            message: "Tareas obtenidas con éxito",
            tareas: tareas
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error al consultar tareas",
            error: error
        });
    }
});

/* c. Obtener UNA tarea por ID */
app.get('/getTarea/:tareaId', (req, res) => {
    try {
        const tareaId = parseInt(req.params.tareaId);
        const tarea = tareas.find(t => t.id === tareaId);

        if (!tarea) {
            return res.status(404).json({ message: "Tarea no encontrada" });
        }

        return res.status(200).json({
            message: "Tarea obtenida con éxito",
            tarea: tarea
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error al consultar tarea",
            error: error
        });
    }
});

/* d. Actualizar una tarea existente */
app.put('/updateTarea/:tareaId', (req, res) => {
    try {
        const tareaId = parseInt(req.params.tareaId);
        const index = tareas.findIndex(t => t.id === tareaId);

        if (index === -1) {
            return res.status(404).json({ message: "Tarea no encontrada" });
        }

        tareas[index] = { ...tareas[index], ...req.body };

        return res.status(200).json({
            message: "Tarea actualizada con éxito",
            tarea: tareas[index]
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error al actualizar tarea",
            error: error
        });
    }
});

/* e. Eliminar una tarea por ID */
app.delete('/deleteTarea/:tareaId', (req, res) => {
    try {
        const tareaId = parseInt(req.params.tareaId);
        const index = tareas.findIndex(t => t.id === tareaId);

        if (index === -1) {
            return res.status(404).json({ message: "Tarea no encontrada" });
        }

        const eliminada = tareas.splice(index, 1);

        return res.status(200).json({
            message: "Tarea eliminada con éxito",
            tarea: eliminada[0]
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error al eliminar tarea",
            error: error
        });
    }
});

/* PUNTO 3 */
/* Cantidad total de tareas */
app.get("/estadisticas/total", (req, res) => {
    try {
        const total = tareas.length;
        res.json({ totalTareas: total });
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el total de tareas" });
    }
});

/* Tarea más reciente */
app.get("/estadisticas/reciente", (req, res) => {
    try {
        if (tareas.length === 0) return res.json({ tareaReciente: null });

        const tareaReciente = tareas.reduce((reciente, t) => {
            return new Date(t.creadaEn) > new Date(reciente.creadaEn) ? t : reciente;
        }, tareas[0]);

        res.json({ tareaReciente });
    } catch (error) {
        res.status(500).json({ error: "Error al obtener la tarea más reciente" });
    }
});

/* Tarea más antigua */
app.get("/estadisticas/antigua", (req, res) => {
    try {
        if (tareas.length === 0) return res.json({ tareaAntigua: null });

        const tareaAntigua = tareas.reduce((antigua, t) => {
            return new Date(t.creadaEn) < new Date(antigua.creadaEn) ? t : antigua;
        }, tareas[0]);

        res.json({ tareaAntigua });
    } catch (error) {
        res.status(500).json({ error: "Error al obtener la tarea más antigua" });
    }
});

/* Cantidad de tareas completadas y pendientes */
app.get("/estadisticas/estado", (req, res) => {
    try {
        const completadas = tareas.filter(t => t.completada).length;
        const pendientes = tareas.filter(t => !t.completada).length;

        res.json({ completadas, pendientes });
    } catch (error) {
        res.status(500).json({ error: "Error al obtener las estadísticas de estado" });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
