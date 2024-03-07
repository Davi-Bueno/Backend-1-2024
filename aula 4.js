const express=require("express");// importar framework
const app= express();//usar framework na const app
const middleEarth=(req,res,next)=>{// middleware ou ponte entre o servidor e cliente web
    console.log("metodo http usado foi: " + req.method + " e o URL foi: " + req.url);//requerimentos do metodo e ulr obtido
    next();//pule pro proximo bloco
};
app.use(middleEarth);// uso do framework na constante middleearth
app.get("/",(req,res)=>{res.send ("Bem-vindo ao nosso servidor Express!")});//raiz
app.get("/status",(req,res)=>{//rota status
    return res.json({
        status:'ok',
        time: new Date()//hora atual
    });
});

app.get("/echo/:message",(req,res)=>{
const message=req.params.message;
return res.json({
    echo:message// o que for digitado no url sera devolvido aqui em json 
})
});

app.use((req, res, next) => {// sem rota especifica, por qualquer rota != das criadas, sera acionada 
    res.json({
         error: 'Not Found',
         statusCode:404
         });
    next()
});





















app.listen(3000,()=>{console.log("servido online na porta 3000!")});


