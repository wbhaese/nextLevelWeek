import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';



const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

//padrões de actions para as controllers:
//index, show, create, update and delete

routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create);

//abaixo listará vários pontos de controle
routes.get('/points', pointsController.index);

//para lista os pontos, vamos usar o requestParams, neste caso, o ID
routes.get('/points/:id', pointsController.show);


export default routes;