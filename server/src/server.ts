//Aula 1
// import express from 'express'; 
// //para instalar os types do express - npm install @types/express -D

// const app = express();

// app.get('/users', (request, response) => {
//     console.log("Listagem de User");

//     return response.json([
//         'Diego',
//         'Wallace',
//         'José',
//         'André'
//     ]);
// });

//Para o node reconhecer arquivos TS, intala-se a dependência: npm install ts-node -D

// app.listen(3333); // movido para baixo

//intalar a dependência typescript: npm install typescript -D

//é necessário arquivo de configurações typescript:
//npx tsc --init // criará arquivo tsconfig.json

//depois de instlar o ts-node, typescript e tsc, para executar o servidor: npx ts-node src/server.ts

//para evitar o reinício do node quando atualizar o código instala-se o pacote:
//npm install ts-node-dev -D
//depois é só rodar npx ts-node-dev src/server.ts

//Para não ter que executar o comando todas as vezes, no arquivo package.json em 'scripts', adiciona-se as seguintes linhas:
// "scripts": {
//   "dev": "ts-node-dev src/server.ts"
// },
//Executa agora 'npm run dev'

//Agora passa para o fornte com reactJS

//----------------------------------------//


//Aula dia 2 02/06/2020

//Rota: endereço completo da requisição
//Recurso: qualentidade estamos acessando

//TIPO de requisição:

//GET: Busca informações
//POST: Cria uma nova informação
//PUT: atualiza informação
//DELETE: Remove uma informação

import express from 'express'; 
import routes from './routes';//se for um arquivo fora do node_modules, precisa do './' antes
import path from 'path';
const app = express();

app.use(express.json());

app.use(routes); // instancia o outro arquivo

// const users = [
//     'Diego',
//     'Wallace',
//     'Antonio',
//     'André'
// ];

// tipos de parâmetro passados para o backend:
//request params: parâmetros que vem na rota que identificam um recurso
//Query params: são parâmetros opcionais geralmente usado em filtros
//request body: parâmetros para criar/atualizar as informações - por aqui vem as informações

//Banco de dados Knex vs SQL:
//SELECT * FROM users name = 'Diego'

//knex('users').where('name, 'Diego').select('*')

//Comentado para prosseguir na aula

// app.get('/users', (request, response) => {
//     // console.log("Listagem de User");
//     const search = String(request.query.search);

//     const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

//     return response.json(filteredUsers);
// });

// app.get('/users/:id', (request, response) => {
//     const id = Number(request.params.id);

//     const user = users[id];

//     return response.json(user);
// });

// app.post('/users', (request, response) => {
//     const data = request.body;

//     console.log(data);

//     const user = {
//         name: data.name,
//         email: data.email
//     }

//     return response.json(user); //Importante colocar 'return' antes para 'forçar' a requisição a retornar os dados
// });


//após criar o novo arquivo 'routes.ts' e a pasta 'database' é necessário instalar o knex:
//npm install knex
//depois disso, novos comentários no arquvios connection


//depois de criada a pasta seeds e o arquivo create_items
// foram criadas a pasta de imagens. Precisamos adicionar o seguinte código neste mesmo arquivo:
//no arquivo routes.ts, vamos adicionar novas rotas

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))//foi usada a função express.static() para acessar as imagens. Pode ser usada também para download de PDFs, etc.

app.listen(3333);