const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let tareas = [];
let id = 1;

app.get('/', (req, res) => {
    res.json({
        message: "¡Bienvenido!"
    });
});



app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
