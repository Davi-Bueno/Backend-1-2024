
let totalAcessos = 0 //contador de acessos acomulados para pré reset
let contadorJson = { //objeto contadorJson com suas propriedades(metodos) e valores (novos objetos[novas proriedades de rotas e acessos ])
    GET: {},
    POST: {},
    PUT: {},
    DELETE: {}
};

exports.paginaInicial = (req, res) => {
    let rota = req.url || '/';//const para gravar url
    let metodo = req.method;//consta pra gravar metodo
    //CRIANDO/add ao objeto contadorJson com duas profundidades de indices( metodo+rota)
    contadorJson[metodo][rota] = contadorJson[metodo][rota] ? contadorJson[metodo][rota] + 1 : 1;//valores de rotas e metodos começando com 1 POR REQ e acrescentando caso repita os mesmo valores
    totalAcessos++;
    console.log("rota: " + rota + " metodo: " + metodo + " acessos: " + contadorJson[metodo][rota]);// historico no console

    //retorna em objeto json no insomnia
    return res.json({
        rota: rota,
        metodo: metodo,
        acessos: contadorJson[metodo][rota],
        totalAcessos: totalAcessos

    })

};
//agora vamos so restar, ou seja, deixar o valores do objeto contadorJson serem =0 e a data da ativação, vale lembrar q precisa estar na rota/resetar
exports.resetar = (req, res) => {
    const data = new Date(); // Data atual
    console.log("Servidor até o momento teve: " + totalAcessos + " acessos ao total  " + data)
    Object.keys(contadorJson).forEach(metodo => {//"tratamento das chaves do objeto contadorJsson","pra cada metodo valor dos metodos=0 ou {} vazio"
        contadorJson[metodo] = {};
    });
    console.log("e o Contador de Acessos foi resetado com sucesso  " + data)
    return res.json(contadorJson);
}


exports.contadorJson = contadorJson; // Exportando o contador


