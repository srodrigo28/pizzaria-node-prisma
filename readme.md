### Criando api pizzaria Maio 2024 NodeJS Prima TypeScript
```Link
https://www.udemy.com/course/dev-fullstack/learn/lecture/31683250#overview
```

```Último visto 67
https://www.udemy.com/course/dev-fullstack/learn/lecture/31683288#overview
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
##### Prisma Models
```
model User {
  id String @id @default(uuid())
  
  name String
  email String
  password String

  created_at DateTime? @default(now())
  updated_at DateTime? @default(now())

  @@map("users")
}
```
* 1. Prisma Migration
```
npx prisma migrate dev
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

#### Rotas criadas
* Users
``` POST
http://localhost:3333/users
```
#### Observação
- Pode também deixar seu script start apenas para fazer compilar e dar o start, deixando ele assim:

"dev": "ts-node-dev --transpile-only src/server.ts"