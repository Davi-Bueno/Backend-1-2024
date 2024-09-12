# TODO.md - API de Vendas de Eletrodomésticos

Este arquivo contém as tarefas relacionadas ao desenvolvimento da API de Vendas de Eletrodomésticos. 

### Todo

- [ ] Implementar paginação nas rotas de busca ~2d #feat @devteam 2024-09-15  
  - [ ] Criar middleware para paginação  
  - [ ] Testar em `/eletro` e `/clientes`  
- [ ] Configurar integração com Swagger para gerar documentação automática ~1d #doc @devteam  
- [ ] Criar sistema de autenticação de vendedores ~3d #auth @devteam  
  - [ ] Criar rota de login para vendedores  
  - [ ] Implementar JWT para autenticação  

### In Progress

- [ ] CRUD de Carrinhos de Compras ~2d #feat @devteam  
  - [ ] Adicionar eletrodomésticos ao carrinho  
  - [ ] Atualizar quantidade e remover itens  

### Done ✓

- [x] Implementação de CRUD para eletrodomésticos  
- [x] Configuração inicial do Prisma ORM  
- [x] Autenticação JWT para usuários  
- [x] Configuração do banco de dados no SQL Server  
