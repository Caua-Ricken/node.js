import http from 'http';
import url from 'url';
import fs from 'fs';

const porta = 3000;

const server = http.createServer((req, res) => {

    const q = url.parse(req.url, true);
    const filename = q.pathname.substring(1)

   if (filename.includes('html')) {
    if (fs.existsSync(filename)) {
      fs.readFile(filename, function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data)
        return res.end()
      })
    } else {
        fs.readFile('404.html', (err, data) => {
            res.writeHead(404, { 'Content-Type': 'text/html' })
            res.write(data)
            return res.end();
        })
      
    }
  }
})


server.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
})