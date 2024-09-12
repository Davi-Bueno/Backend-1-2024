# API de Vendas de Eletrodomésticos

Esta API foi desenvolvida para gerenciar um sistema de vendas de eletrodomésticos, incluindo clientes, vendedores, produtos e carrinhos de compras.

## Tecnologias Utilizadas

- [x] Node.js
- [x] Express.js
- [x] Prisma ORM
- [x] SQL Server
- [x] JWT para autenticação

## Funcionalidades Principais

- [ ] Implementar autenticação de usuários (login/logout)
- [ ] CRUD completo para Clientes
- [ ] CRUD completo para Vendedores
- [ ] CRUD completo para Eletrodomésticos
- [ ] CRUD completo para Carrinhos de Compras
- [ ] Gestão de carrinhos de compras

## Modelos de Dados

- [ ] Cliente
- [ ] Vendedor
- [ ] Eletrodoméstico
- [ ] Carrinho
- [ ] CarrinhoEletro (relação entre Carrinho e Eletrodoméstico)

## Rotas da API

- [x] `/login`: Autenticação de usuários
- [x] `/logout`: Finalização de sessão
- [ ] `/eletro`: Operações relacionadas a eletrodomésticos
- [ ] `/vendedor`: Operações relacionadas a vendedores
- [ ] `/clientes`: Operações relacionadas a clientes
- [ ] `/carrinhos`: Operações relacionadas a carrinhos de compras
- [ ] `/carrinhos_Eletro`: Operações relacionadas à relação entre carrinhos e eletrodomésticos

## Configuração e Execução

- [x] Clonar o repositório
- [ ] Instalar as dependências: `npm install`
- [ ] Configurar as variáveis de ambiente, incluindo a `DATABASE_URL`
- [ ] Executar as migrações do Prisma: `npx prisma migrate dev`
- [ ] Iniciar o servidor: `npm start`

## Documentação da API

- [ ] Acessar a rota `/api-docs` para a documentação via Swagger
