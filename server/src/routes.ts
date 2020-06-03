import express from 'express';
import knex from './database/connection';

const routes = express.Router();

routes.get('/items', async (request, response) => { //'/'acessará a rpta raiz: localhost:3000
    //vamos precisar importar a conexão com o banco
    //é precisa usar o 'await' antes do knex e async na função
    const items = await knex('items').select('*');//busca todos os campos do banco
    
    const serializedItems = items.map(item => {
        return {
            title: item.title,
            image_url: item.image
        };
    });

    return response.json(serializedItems);
});

export default routes;