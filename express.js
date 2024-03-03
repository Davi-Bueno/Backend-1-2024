const express =require("express");
const app =express();


app.get("/",(req,res)=>{
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

//apenas path about tera liberdade das derivações, por isso após o novo path id estar antes  desse bloco de ccódigo, para também nao have conflito de exceções
app.get(/.*about.*/,(req,res)=>{
    res.send("DADOS DA PÁGINA ABOUT E SUAS DERIVAÇÕES");
});

app.get("/search/:id",(req,res)=>{
    const id= req.params.id;
    const email=req.query.email;
    const name=req.query.name;
    return res.json({
      id:id,
      name: name,
      email: email
// iguais por serem substituidos de acordo com o "email" inserido e os demais parametros


    });
});

app.listen(3000,()=>{
    console.log("New servidor com sucesso na porta 3000")
});