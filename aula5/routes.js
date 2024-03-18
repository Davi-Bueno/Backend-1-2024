// para rostas
const express = require ('express')
const route = express.Router()// metodo router pra criar um objeto roteador(rotas,uso de middlewares e afim)
const homeController =require('./controllers/homeController')//req da pasta controller dentro do arquivo homeController, uso (no caso as funções)

route.use("/reset",(req,res)=>{//rota para aplicar o reset dos valores do objeto

    homeController.resetar(req,res)//uso do arquivo homeCOntroller(onde tem as funções) com a propriedade resetar(função especifica pra reset)

})
route.use("/",(req,res)=>{
    
    homeController.paginaInicial(req,res)
    ;
})
route.use("/reset",(req,res)=>{

    homeController.resetar(req,res)

})


module.exports = route // tornar esse arquivo routes.js 'exportavel' =o route=roteador +ferramentas de rotas etc