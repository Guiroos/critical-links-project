## Critical Links Project

O Objetivo é desenhar uma aplicação web completa, com frontend, backend e banco de dados. 
Deverás construir uma aplicação para gestão de estudantes.

As principais funcionalidades são:

 - Banco de dados estruturados para estudantes e classes;
 - Visualizar estudantes e seus dados na tela;
 - Visualizar classes e seus dados na tela;
 - Poder inserir, editar e excluir estudantes;
 - Poder inserir, editar e excluir classes;

 

## Instalação

Clone o repositório.

```bash
  git clone git@github.com:Guiroos/critical-links-project.git
```

Instale as dependências.

```bash
  cd critical-links-project
  npm install
```


## Rodando localmente

 Dentro da pasta raiz

 ### Iniciando servidor

 Iniciar o servidor, disponível em [API](http://localhost:3001).
 
 OBS: servidor conectado ao seu MongoDB.

```bash
  cd backend
  npm run start
```


### Iniciando aplicação web

Iniciar o aplicativo React, disponível em [WEB](http://localhost:3000).


```bash
  cd frontend
  npm run start
```

## Rodando testes

 ### Cypress

 Execute o comando dentro da pasta frontend.

 ```bash 
  cd frontend
  npm run cypress:open
 ```
 
 Caso precise de ajuda para navegar no Cypress, entre na documentação do mesmo [AQUI](https://www.cypress.io/)
 
 
## Stacks utilizadas

**Front-end:** ReactJS, TailwindCSS.

**Front-end:** NestJS, Mongoose, MongoDB, TypeScript.



## Documentação da API

#### Retorna um objeto com todos elementos

```http
  GET /students
  GET /classes
```

#### Retorna um elemento com pelo ID

```http
  GET /students/:id
  GET /classes/:id
```

#### Cria um elemento pelo body enviado

```http
  POST /students
  POST /classes
```

#### Atualizar um elemento pelo ID

```http
  PUT /students/:id
  PUT /classes/:id
```

#### Deleta um elemento pelo ID

```http
  DELETE /students/:id
  DELETE /classes/:id
```

Os estudantes possuem as seguintes propriedades:

| Propriedades   | Tipo       
| :---------- | :--------- 
| `_id` | `number` |
| `firstName` | `string` |
| `lastName` | `string` |
| `email` | `string` |
| `studentID` | `number` 
| `class` | `string[]` 
| `createdDate` | `Date` 
| `updatedDate` | `Date`
| `deletedDate` | `Date`


As classes possuem as seguintes propriedades:

| Propriedades   | Tipo       
| :---------- | :--------- 
| `_id` | `number` |
| `className` | `string` |
| `year` | `number` |
| `createdDate` | `Date` 
| `updatedDate` | `Date`
| `deletedDate` | `Date`




## Roadmap

- [ ] Desenvolver sistema de login;

- [ ] Implementar testes  Unitários para frontend e backend.
