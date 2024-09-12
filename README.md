# API de Vendas de Eletrodomésticos

Esta API foi desenvolvida para gerenciar um sistema de vendas de eletrodomésticos, incluindo clientes, vendedores, produtos e carrinhos de compras.

## Tecnologias Utilizadas

- Node.js
- Express.js
- Prisma ORM
- SQL Server
- JWT para autenticação

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

- `API Back/`: Contém o código do backend
  - `API-vendas/`: Diretório principal da API
    - `controller/`: Controladores da aplicação
    - `route/`: Rotas da API
    - `utils/`: Utilitários e funções auxiliares
  - `prisma/`: Configurações e schema do Prisma ORM

- `API Front/`: Contém o código do frontend
  - `src/`: Código-fonte do frontend
    - `axios.js`: Configuração e funções de chamada à API
    - `components/`: Componentes React reutilizáveis
    - `containers/`: Componentes React que representam páginas ou seções maiores
    - `theme/`: Configurações de tema da aplicação

## Modelos de Dados

A API utiliza os seguintes modelos de dados:

1. Cliente
2. Vendedor
3. Eletrodoméstico
4. Carrinho
5. CarrinhoEletro (relação entre Carrinho e Eletrodoméstico)

## Funcionalidades Principais

- Autenticação de usuários (login/logout)
- CRUD completo para Clientes, Vendedores, Eletrodomésticos e Carrinhos
- Busca e filtragem de dados
- Gestão de carrinhos de compras

## Rotas da API

A API possui as seguintes rotas principais:

- `/login`: Autenticação de usuários
- `/logout`: Finalização de sessão
- `/eletro`: Operações relacionadas a eletrodomésticos
- `/vendedor`: Operações relacionadas a vendedores
- `/clientes`: Operações relacionadas a clientes
- `/carrinhos`: Operações relacionadas a carrinhos de compras
- `/carrinhos_Eletro`: Operações relacionadas à relação entre carrinhos e eletrodomésticos

Todas as rotas (exceto login e logout) requerem autenticação via JWT.

## Configuração e Execução

1. Clone o repositório
2. Instale as dependências: `npm install`
3. Configure as variáveis de ambiente, incluindo a `DATABASE_URL` para conexão com o SQL Server
4. Execute as migrações do Prisma: `npx prisma migrate dev`
5. Inicie o servidor: `npm start`

## Documentação da API

A API utiliza Swagger para documentação. Acesse a rota `/api-docs` após iniciar o servidor para visualizar a documentação completa das rotas disponíveis.

## Frontend

O frontend da aplicação é desenvolvido em React e utiliza Material-UI para a interface do usuário. Ele se comunica com o backend através de chamadas axios e implementa as funcionalidades de CRUD para todas as entidades do sistema.

## Contribuição

Contribuições são bem-vindas! Por favor, abra uma issue para discutir mudanças maiores antes de submeter um pull request.

## Licença

[Inserir informações sobre a licença aqui]
