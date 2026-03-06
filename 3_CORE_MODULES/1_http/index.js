import http from 'http';

const porta = 3000;

const server = http.createServer((req, res) => {

    res.write('oi, HTTP');
    res.end();
})

server.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
})

// listen é o método que inicia o servidor e fica escutando as requisições. Ele recebe dois parâmetros: a porta onde o servidor vai rodar e uma função de callback que é executada quando o servidor começa a rodar.