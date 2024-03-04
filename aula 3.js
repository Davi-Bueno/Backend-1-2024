const express = require("express");
const bodyParser = require("body-parser");// middleware *tinha deixado no bloco do ex da aula 3 la embaixo
const app = express();
//raiz
app.get("/", (req, res) => {
    res.send("DEVER DE CASA 02-DAVI BUENO, O MELHOR");
});

app.get("/about/:id", (req, res) => {
    const id = req.params.id;
    const sit = req.query.sit;
    return res.json({
        id: id,
        nome: "Pablo",
        sit: sit,
        email: "pablo.coelho@gmail.com"
    });
});

// Apenas path "about" terá liberdade das derivações,
// por isso, após o novo path "id" estar antes desse bloco de código,
// para também não haver conflito de exceções
app.get(/.*about.*/, (req, res) => {
    res.send("DADOS DA PÁGINA ABOUT E SUAS DERIVAÇÕES");
});

app.get("/search/:id", (req, res) => {
    const id = req.params.id;
    const email = req.query.email;
    const name = req.query.name;
//propriedade a serem substituidads por novas/o que for pedido

    return res.json({
        id: id,
        name: name,
        email: email
    });
});

//"usar" o middleware á aplicação express
app.use(bodyParser.json());

const contatos = [];// vetor para os dados em si
const allnomes = [];// vetor apenas para os  nomes e usado como requisição no Get para puxar o vetor contatos
//"planilha em branca para dados" na rota/espaço '/contatos'
app.post("/contatos", (req, res) => {
    const NOME = req.body.NOME;
    const CEP=req.body.CEP;
    const EMAIL=req.body.EMAIL;

    const contato= { NOME,CEP,EMAIL}; // shorthand(forma prática de atribuir novos dados às variaveis de um escopo de um objeto)
    
    contatos.push(contato);//add ao vetor contatoS o contatO ou seja, NOME+CEP+EMAIL
    allnomes.push(NOME);//add ou vetor allnomes o NOME apenas
    return res.json(contatos);
});
// so pra mostrar o CONJUNTO de dados de contatos
app.get("/contatos", (req, res) => {
    return res.json(contatos);
});
//condição de que só retornara os dados do contato solicitando pelo NOME proveniente do vetor allnomes onde há os nomes.
app.get("/contato/:nome", (req, res) => { 
    const nome = req.params.nome;// var pra receber a requisição do parametro do nome digitado
    if (allnomes.includes(nome)) { //se no vetor allnomes tiver o nome que eu escrevi, continue.
        const filteredContatos = contatos.filter(contato => contato.NOME === nome);  //const pra novo vetor em que á o nome tanto do vetor do all nomes como se for == ao de contatos
        return res.json(filteredContatos);// mostre o vetor/dados que tem o nome (filtrado do vetor all nomes) presente nos  contatos.
    } else {
        res.send("Não há esse contato na nossa Base de dados!");// se o valor do nome for != do vetor allnomes, mostre:
    }
});

//porta do servidor
app.listen(3000, () => {
    console.log("Servidor na porta 3000 aberta com sucesso!");
});
