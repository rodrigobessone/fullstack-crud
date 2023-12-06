Projeto: Fullstack-CRUD

Desenvolvimento de um sistema de registro de clientes com a capacidade de gerenciar múltiplos contatos associados.

Antes de começar, assegure-se de ter o Node.js e o npm devidamente instalados em seu ambiente. Caso não estejam instalados, você pode obtê-los em nodejs.org.

Após a instalação do Node.js e do npm, é necessário instalar as dependências do projeto, conforme listadas no arquivo package.json do seu projeto.

bash

npm install

Certifique-se de preencher corretamente as variáveis de ambiente.

Os comandos a seguir devem ser executados no terminal (linha de comando) para garantir o download e a instalação de todas as bibliotecas essenciais para o projeto.

Execute as migrações:

bash

npm run typeorm:run

Para iniciar o projeto em um ambiente de desenvolvimento, utilize o comando a seguir:

bash

npm run dev

Este comando inicializará o servidor em modo de desenvolvimento, permitindo que você faça alterações no código e visualize as atualizações em tempo real.

Rotas do Usuário

    Criação de Usuário
        Descrição: Cria um novo usuário na aplicação.
        Rota: POST /users

json

{
  "name": "nome_usuario",
  "email": "usuario@dominio.com",
  "password": "senha_segura",
  "confirm": "senha_segura",
  "phoneNumber": "telefone_usuário"
}

    Login do Usuário
        Descrição: Realiza o login do usuário na aplicação.
        Rota: POST /login

json

{
  "email": "usuario@dominio.com",
  "password": "senha_segura"
}

    Leitura de Usuários
        Descrição: Obtém a lista de usuários cadastrados.
        Rota: GET /users

    Remoção de Usuário
        Descrição: Remove um usuário específico com base no ID fornecido.
        Rota: DELETE /users/:id

Rotas de Contato

    Criação de Contato
        Descrição: Cria um novo contato associado a um usuário específico.
        Rota: POST /:id/user

json

{
  "name": "Nome Contato",
  "email": "contato@dominio.com",
  "phoneNumber": "+55 (81) 98181-8181"
}

    Leitura de Todos os Contatos de um Usuário
        Descrição: Obtém a lista de todos os contatos associados a um usuário específico.
        Rota: GET /contacts

    Leitura de um Contato Específico
        Descrição: Obtém informações detalhadas de um contato específico associado a um usuário.
        Rota: GET /contacts/:id

    Atualização de Contato
        Descrição: Atualiza as informações de um contato específico associado a um usuário.
        Rota: PATCH /contacts/:id

json

{
  "name": "Novo Nome Contato",
  "email": "novo_contato@dominio.com",
  "phoneNumber": "+55 (81) 98181-8181"
}

    Remoção de Contato
        Descrição: Remove um contato específico associado a um usuário.
        Rota: DELETE /contacts/:id
