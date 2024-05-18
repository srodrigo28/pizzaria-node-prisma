### Criando api pizzaria Maio 2024 NodeJS Prima TypeScript
```Link
https://www.udemy.com/course/dev-fullstack/learn/lecture/31683250#overview
```

#### Primeiros passos
* npm init -y
#### Todas dependências
* TypeScript
```
npm i typescript -D
```
* Express
```
npm i express
```
* Express Types
```
npm i @types/express -D
```
* Criando um arquivo de config do TypeScript
```
 npx tsc --init
```
* Recarregar automaticamente com TS-Node-DEV
```
npm i ts-node-dev -D
```
* Tratamentos de erros
```
npm i express-async-errors
```
* Liberando acesso para outros Ips acessar aplciação
```
npm i cors @types/cors -D
```
#### Prisma
* Prisma
```
npm i prisma 
```
* Prisma Client
```
npm i @prisma/client
```
* Prisma init cria uma pasta com model inicial prisma
```
npx prisma init
```
#### Package.json
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "ts-node-dev src/server.ts"
  },
```

* Prisma
* JWT

#### Observação
- Pode também deixar seu script start apenas para fazer compilar e dar o start, deixando ele assim:

"dev": "ts-node-dev --transpile-only src/server.ts"