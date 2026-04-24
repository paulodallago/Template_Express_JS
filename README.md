# Lyceum API

### Cenário

A API tem como responsabilidade a criação usuários e gerenciamento de sessões de partidas de um jogo online, gerando um toke de sessão para ser compartilhado para acesso de vários dispositivos.

### Instalação

- Clonar o repositório
- Executar "npm i" para instalar os módulos necessários
- Preencher um arquivo ".env", usando como base o arquivo ".env.example", com informações do banco de dados (que deve ser criado antes da execução), porta e chave para geração do JWT. Executar API com "npm run dev", e testes automatizados com "npm test"

### Rotas

#### Base: http://localhost:3000 (ou outra porta)

- Documentação: /docs
- API: /api

#### Person (usuários)

- Listar -> GET /person
- Obter -> GET /person/{id}
- Criar -> POST /person
- Editar -> PUT /person/{id}
- Remover -> DELETE /person/{id}

#### Session (sessões)

- Listar -> GET /session
- Obter -> GET /session/{id}
- Criar -> POST /session
- Remover -> DELETE /session/{id}
- Atualizar token -> PUT /session/refresh/{id}
- Encerrar -> PUT /session/close/{id}

#### Auth (autenticação)

- Login -> POST /login

### Tecnologias

- API desenvolvida com Express JS
- Documentação automática pelo swagger
- Autenticação de usuários com JWT
- Persistência no Postgres, utilizando Sequelize
- Testes automatizados com Jest
