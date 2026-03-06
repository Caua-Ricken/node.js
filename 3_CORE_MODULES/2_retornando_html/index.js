import http from 'http';

const porta = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Olá, meu primeiro server</h1> <p>testando a atualização</p>');
})

server.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
})