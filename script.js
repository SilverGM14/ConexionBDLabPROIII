document.getElementById('connect-btn').addEventListener('click', function() {
    fetch('/connect')
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                document.getElementById('result').innerHTML = '<div class="alert alert-success" role="alert">¡Conexión exitosa!</div>';
            } else {
                document.getElementById('result').innerHTML = '<div class="alert alert-danger" role="alert">Error al conectar. Por favor, inténtalo de nuevo.</div>';
            }
            document.getElementById('result').style.display = 'block';
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

const express = require('express');
const mssql = require('mssql');

const app = express();


const config = {
    server: 'DESKTOP-RAOPJ4N\SQLEXPRESS', 
    database: 'ProyectoFinalBDI', 
    options: {
        trustedConnection: true 
    }
};


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


app.get('/connect', (req, res) => {
    mssql.connect(config, (err) => {
        if (err) {
            console.error(err);
            res.json({ success: false });
        } else {
            console.log('Conexión exitosa a la base de datos');
            res.json({ success: true });
        }
    });
});

app.get('/script.js', (req, res) => {
    res.sendFile(__dirname + '/script.js');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});