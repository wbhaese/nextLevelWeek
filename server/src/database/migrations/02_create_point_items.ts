import Knex from 'knex';

//método up será usado para criar
//recebe o parâmetroknex
export async function up(knex: Knex) {
    //precisa importar o Knex (com letra maiúscula)
    //após isso, nos parâmetros da função deve-se colocar knex: Knex

    return knex.schema.createTable('point_items', table => {
        table.increments('id').primary();
        table.integer('point_id')
            .notNullable()
            .references('id')
            .inTable('points');
        table.integer('item_id')
            .notNullable()
            .references('id')
            .inTable('items');
    });
 }

//método down será usado para desfazer as alterações do up()
export async function down(knex: Knex) {
    return knex.schema.dropTable('point_items');
}
