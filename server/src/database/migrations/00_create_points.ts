import Knex from 'knex';

//método up será usado para criar
//recebe o parâmetroknex
export async function up(knex: Knex) {
    //precisa importar o Knex (com letra maiúscula)
    //após isso, nos parâmetros da função deve-se colocar knex: Knex

    return knex.schema.createTable('points', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    });
 }

//método down será usado para desfazer as alterações do up()
export async function down(knex: Knex) {
    return knex.schema.dropTable('point');
}