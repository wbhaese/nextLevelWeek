import path from 'path'; 

module.exports = {//não dá para ser esado com export default
    client: 'sqlite3',
    connection: {
        //no path.resolve, é necessário colocar a pasta, pois neste caso, este arquivo não está na mesma pasta
        filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite'), 
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations') 
    },
    //após salvar estas configurações deve-se executar o comando:
    //npx knex migrate:latest --knexfile knexfile.ts migrate:latest
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds') 
    },
    //para não ocorrer o erro 'sqlite does not support insert', insere-se o seguinte código:
    useNullAsDefault: true
};