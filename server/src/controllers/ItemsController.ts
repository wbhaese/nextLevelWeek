import knex from '../database/connection';
import { Request, Response} from 'express';

class ItemsController {
    async index(request: Request, response: Response){ //'/'acessará a rpta raiz: localhost:3000
        //vamos precisar importar a conexão com o banco
        //é precisa usar o 'await' antes do knex e async na função
        const items = await knex('items').select('*');//busca todos os campos do banco


        //-------listar os itens de coleta------:


        //adicionamos o seguinte código em package.json -> dev para carregar os projetos mais rapidamente:
        // --transpileOnly --ignore-watch node_modules
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://localhost:3333/uploads/${item.image}`
            };
        });

        return response.json(serializedItems);
    }   
}

export default ItemsController;