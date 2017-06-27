const express = require('express');
var app = express();
var path = require('path');
const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
});

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(process.env.PORT || 3000, function () {
    console.log('escutando na porta 3000');
});

const bodyParse = require('body-parser');
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());

app.post('api/contato', function (req, res) {
    console.log(JSON.stringify(req.body));
    res.status(200).json({ success : true });
});

const fs = require('fs');
const dbFolder = __dirname + '/db';
const contatosDbPath = dbFolder + '/contatos.json';
//antes do server iniciar verifica se a pasta existe
//se não existe, cria
if(!fs.existsSync(dbFolder)){
    fs.mkdirSync(dbFolder);
}
//se o arquivo não existe, retorna arquivo JSON vazio
//se o arquivo existe, retorna JSON array com todos os contatos
var tryRead = function (path, callback) {
    fs.readFile(path, 'utf8', function (err, contatos){
        if (err) return callback([]);
        var contatosJSON = [];
        try{
            contatosJSON = JSON.parse(contatos);
        } catch (error){ }
        
        return callback(contatosJSON);
    });
}

app.post('/api/contato', function (req, res) {
    //le os contatos ja gravados
    tryRead(contatosDbPath, function (contatos){
        //inclui um novo contato
        contatos.push(req.body);
        //escreve arquivo com um contato novo
        fs.writeFile(contatosDbPath, JSON.stringify(contatos), function (err){
            if(err){
                res.status(500).json({error: 'Opa, detectamos um probleminha! Tente novamente mais tarde!' });
                return;
            }
            //envia http code 200 e json com {success : true}
            res.status(200).json({success : true});
        });
    });
});

app.get('/api/artigo/*', function(req, res){
const artigosDbPath = dbFolder + '/artigos.json';
    tryRead(artigosDbPath, function(artigos){

    var artigo = artigos.filter((artigo) => {
        return parseInt(artigo.id) == parseInt(req.params[0]);
    })
        res.status(200).json(artigo[0]);
    });
});

app.get('/api/artigos', function(req, res){
const artigosDbPath = dbFolder + '/artigos.json';
    tryRead(artigosDbPath, function(artigos){
        res.status(200).json(artigos);
    });
});

//mudar a rota padrao -> '*'
app.get('*', function(req,res) {
    res.sendfile(path.join(__dirname, 'dist/index.html'));
});