# Play Code

PlayCode é uma API voltada totalmente para a tecnologia, onde há controle de postagem de vídeos sobre o assunto, onde você também pode interagir com outros usuários via chat.

# API & Documentação

A API foi desenvolvida em Node.js, utilizando TypeScript para tipagem de dados.
Você pode encontrar a documentação da API [aqui](https://playcodeapi.herokuapp.com/).

# Instalação e Execução

### Primeiramente, baixe o respositório via terminal utilizando o seguinte comando:

```bash
git clone https://github.com/odaairlopes/playcode-api.git
```

### Após baixar, acesse o clone do repositório:

```bash
cd playcode-api
```

### Instale as dependências do projeto

```bash
yarn
```

### Inicie o banco de dados junto com o [docker](https://www.docker.com/):

```bash
sudo docker-compose up -d
```

### Aplique as _migrations_ no banco de dados:

```bash
yarn typeorm migration:run
```

### Por fim, rode o projeto com o seguinte comando:

```bash
yarn dev
```

### Se a resposta no terminal for esta, o aplicativo estará rodando em localhost:3000.

```bash
yarn run v1.22.17
$ tsnd --transpile-only --respawn --ignore-watch node_modules src/server.ts
[INFO] 19:38:57 ts-node-dev ver. 1.1.8 (using ts-node ver. 9.1.1, typescript ver. 4.5.5)
[app] Connect at Database
[app] server running at http://localhost:3000
```

## Tecnologias utilizadas:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org)
- [TypeORM](https://typeorm.io)
- [Docker](https://www.docker.com)
- [Swagger](https://swagger.io)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [jsonwebtoken](https://jwt.io)
- [socket.io](https://socket.io)
