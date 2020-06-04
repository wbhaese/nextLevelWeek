import knex from 'knex';
import path from 'path';

//após instalar o knex, é preciso instalar o sqlite
//npm install sqlite3
const connection = knex({
    client: 'sqlite3',
    connection: {
        //é importante usar o path, por isso ele será importado acima
        //ele cria a URL 
        //__dirname: retorna o diretório para o database neste caso
        filename: path.resolve(__dirname, 'database.sqlite'), 
    },
    useNullAsDefault: true,
});
//antes de criar o banco, precisamos identificar as entidades/tabelas do DB
    //no nosso caso teremos:
    //points: pontos de coleta
    //items: itens para coleta
        //relacionamentos: nestes casos, N-N,
        //um relacionamento N-N gera uma nova taela:
        //no nosso caso 'point_items': relaciona o os itens que são coletados num ponto 

export default connection;

//migration: histórico do banco de dados
//auxilia na combinação de modificações na criação de DBs