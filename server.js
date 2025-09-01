// Importa o módulo 'express'
const express = require('express');
// Cria uma instância do aplicativo Express
const app = express();
// Define a porta em que o servidor irá rodar
const PORT = 3000;

// Middleware para servir arquivos estáticos da pasta 'public'
// Isso faz com que os arquivos index.html, style.css e script.js
// estejam acessíveis no navegador
app.use(express.static('public'));

// Inicia o servidor e escuta na porta especificada
app.listen(PORT, () => {
    // Exibe uma mensagem no console quando o servidor estiver rodando
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});