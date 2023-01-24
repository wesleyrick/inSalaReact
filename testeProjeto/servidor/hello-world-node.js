const http = require('http');
const fetch = require('node-fetch');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running as http://${hostname}:${port}/`);
});

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(async (result) => {
        let pokemon = await result.json();
        console.log(pokemon.name);
        console.log(pokemon.moves);
    })
    .catch((erro) => {
        console.log(erro);
    });
    